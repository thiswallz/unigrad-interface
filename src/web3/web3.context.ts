import { Wallet } from "./model/wallet.model"

export interface Web3Strategy {
  connect(wallet: Wallet): Promise<boolean>
  disconnect(): void
  getNativeBalance(address: string): Promise<number>
  getTokenBalance(
    address: string,
    tokenAddress: string
  ): Promise<number>
  getTokenPrice(address, exchange): Promise<number>
  executeMethod(options): Promise<any>
  init(): Promise<void>
}

export default class Web3Context {
  private strategy: Web3Strategy

  setStrategy(strategy: Web3Strategy) {
    this.strategy = strategy
  }

  init(): Promise<void> {
    return this.strategy.init()
  }

  connect(wallet: Wallet): Promise<boolean> {
    return this.strategy.connect(wallet)
  }

  disconnect() {
    this.strategy.disconnect()
  }

  async getNativeBalance(address: string) {
    return this.strategy.getNativeBalance(address)
  }

  async getTokenBalance(
    address: string,
    tokenAddress: string
  ) {
    return this.strategy.getTokenBalance(address, tokenAddress)
  }

  async getTokenPrice(address, exchange){
    return this.strategy.getTokenPrice(address, exchange)
  }

  async executeMethod(options) {
    return this.strategy.executeMethod(options)
  }
}
