import Moralis from 'moralis'
import { ChainsIdType } from '../model/chain.model'
import { Wallet } from '../model/wallet.model'
import { BaseComponent } from '../web3.connection'
import { Web3Strategy } from '../web3.context'
import { Web3Event } from '../web3.mediator'

const serverUrl = process.env.GRIDSOME_MORALIS_URL
const appId = process.env.GRIDSOME_MORALIS_API


declare const window: any

export default class MoralisStrategy extends BaseComponent
  implements Web3Strategy {

  subscriptions: any = []

  get chainId(): ChainsIdType {
    return this.mediator.chain.chainId as ChainsIdType
  }

  async init(): Promise<void> {
    await Moralis.start({ serverUrl, appId })
  }

  async connect(wallet: Wallet): Promise<boolean> {
    try {
      console.log('serverUrl >> ', wallet, appId, serverUrl)

      if (wallet === Wallet.Metamask) {
        console.log('loggin....')
        this.setupWallet(wallet)
        await Moralis.enableWeb3()
        console.log(' 2 loggin....')
        let user = await Moralis.User.current()
        console.log(' 3 loggin....', user)
        if (!user) {
          user = await Moralis.authenticate({
            signingMessage: 'Log in using Moralis',
          })
        }
        return true
      }
    } catch (err) {
      console.error(err)
      throw new Error(err);
    }

    console.log(' 4 loggin....')
    return false
  }

  async disconnect() {
    this.subscriptions.forEach(s => s())
  }

  async getNativeBalance(address: string): Promise<number> {
    console.log(address)
    const balances = await Moralis.Web3API.account.getNativeBalance({
      address,
      chain: this.chainId,
    })
    return parseFloat(Number(Moralis.Units.FromWei(balances?.balance)).toFixed(4))
  }

  async getTokenBalance(address: string, tokenAddress: string): Promise<number> {
    console.log('exe balances', this.chainId, address)
    const response = await Moralis.Web3API.account.getTokenBalances({ chain: this.chainId, address });

    const token = response.find(token => token.token_address === tokenAddress)

    if (!token?.balance) {
      return 0
    }
    return parseFloat(Number(Moralis.Units.FromWei(token.balance)).toFixed(4))
  }

  async getTokenPrice(address, exchange) {
    console.log(this.chainId, address, exchange)
    const options = {
      address,
      chain: this.chainId,
      exchange,
    };
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    return price.usdPrice
  }

  async executeMethod(options) {
    return await Moralis.Web3API.native.runContractFunction(options)
  }

  protected setupWallet(wallet) {
    if (wallet === Wallet.Metamask) {
      this.subscriptions.push(Moralis.onAccountChanged(account => {
        console.log('EVENT onAccountChanged::acc', account)
        this.mediator.notify(account, Web3Event.ChangeAccount)
      }))

      this.subscriptions.push(Moralis.onWeb3Enabled(async data => {
        console.log('EVENT::onWeb3Enabled', data.chainId, data)
        await this.mediator.notify(data, Web3Event.Connected)
      }))

      this.subscriptions.push(Moralis.onWeb3Deactivated(data => {
        console.log('EVENT::onWeb3Deactivated')
        this.mediator.notify(null, Web3Event.Close)
      }))

      this.subscriptions.push(Moralis.onDisconnect(data => {
        console.log('EVENT::onDisconnect')
        this.mediator.notify(null, Web3Event.Close)
      }))

      this.subscriptions.push(Moralis.onChainChanged(data => {
        console.log('EVENT::onChainChanged')
        this.mediator.notify(null, Web3Event.ReConnect)
      }))

    }
  }
}
