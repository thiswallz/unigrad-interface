import { ActionContext } from 'vuex'
import { ToastProgrammatic as Toast } from 'buefy'
import { State } from '~/state'
import { Web3Connection } from '~/web3/web3.connection'
import Web3Context from '~/web3/web3.context'
import { Web3Event } from '~/web3/web3.mediator'
import { Chain } from '~/web3/model/chain.model'


export interface Web3State {
  chain?: Chain
  walletConnected: boolean
  loaded: boolean
  RDTBalance: number
  RDTPrice: number
  generalBalance: number
  account: string
  wallet: string
  connector: Web3Connection
}

export type Context = ActionContext<Web3State, State>

let web3Connection: Web3Connection = null

export default {
  namespaced: true,
  state: (): Web3State => ({
    chain: null,
    walletConnected: false,
    loaded: false,
    RDTBalance: 0,
    RDTPrice: 0,
    generalBalance: 0,
    account: '',
    wallet: '',
    connector: null
  }),

  mutations: {
    setWalletConnection(state, isConnected) {
      state.walletConnected = isConnected
    },
    setRDTBalance(state, balance) {
      state.RDTBalance = balance
    },
    setRDTPrice(state, price) {
      state.RDTPrice = price
    },
    setGeneralBalance(state, balance) {
      state.generalBalance = balance
    },
    setAccount(state, account) {
      state.account = account
    },
    setWallet(state, wallet) {
      state.wallet = wallet
    },
    setChain(state, chain) {
      state.chain = chain
    },
    setConnector(state, connector) {
      state.connector = connector
    },
    setLoaded(state, isLoaded) {
      state.loaded = isLoaded
    }
  },
  actions: {
    connectWallet(context, isConnected) {
      context.commit('setWalletConnection', isConnected)
      if (isConnected) {
        web3Connection.notify(null, Web3Event.LoadBalances)
      }
    },
    setChain(context, chain: Chain) {
      context.commit('setChain', chain)
    },
    setAccount(context, account) {
      context.commit('setAccount', account)
    },
    setRDTBalance(context, balance) {
      context.commit('setRDTBalance', balance)
    },
    setRDTPrice(context, price) {
      context.commit('setRDTPrice', price)
    },
    setGeneralBalance(context, balance) {
      context.commit('setGeneralBalance', balance)
    },
    async initLoad(context, strategy) {
      const web3Context = new Web3Context()
      web3Context.setStrategy(strategy)
      web3Connection = new Web3Connection(context, web3Context)
      strategy.setMediator(web3Connection)
      await web3Connection.setDefaultChain()
      await web3Connection.context.init()
      await context.commit('setConnector', web3Connection)
      await context.commit('setLoaded', true)
    },
    async connect(context, wallet: string) {
      context.commit('setWallet', wallet)
      web3Connection.notify(null, Web3Event.Connect)
    },
    async disconnect(context) {
      console.log('disconecting')
      context.commit('setWalletConnection', false)
      context.commit('setRDTBalance', 0)
      context.commit('setAccount', null)
    },
    error(context, message) {
      Toast.open({
        duration: 10000,
        message: `${message}`,
        position: 'is-bottom',
        type: 'is-danger',
      })
    }
  },
}
