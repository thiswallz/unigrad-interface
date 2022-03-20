import { Store } from "vuex";
import { Chain, chainsSupported } from "./model/chain.model";
import Web3Context from "./web3.context";
import { Web3Event, Web3Mediator } from "./web3.mediator";

const RDTTokenExchange = "PancakeSwapv2";

export class Web3Connection implements Web3Mediator {
  store: Store<any>;
  context: Web3Context;

  constructor(store: Store<any>, context: Web3Context) {
    this.store = store;
    this.context = context;
  }

  get chain(): Chain {
    return this.store.state.chain;
  }

  get RDTTokenAddress(): string {
    return this.chain.smartContracts.RDTToken
  }

  async notify(message: any, event: Web3Event): Promise<void> {
    try {
      switch (event) {
        case Web3Event.Connect:
          await this.connect()
          break;
        case Web3Event.Connected:
          this.connected(message)
          break;
        case Web3Event.Close:
          this.close()
          break;
        case Web3Event.ReConnect:
          await this.reConnect()
          break;
        case Web3Event.SetAccount:
          this.setAccount(message);
          break;
        case Web3Event.ChangeAccount:
          await this.setAccount(message);
          await this.loadBalances();
          break;
        case Web3Event.SetChain:
          await this.setChain(message)
          break;
        case Web3Event.LoadBalances:
          await this.loadBalances()
          break;
        case Web3Event.SendError:
          this.store.dispatch("error", message);
          break;

        default:
          throw new Error("Method not implemented.");
      }
    } catch (err) {
      await this.store.dispatch("connectWallet", false);
      this.store.dispatch("error", err);
    }
  }

  async setDefaultChain() {
    console.log(process.env.GRIDSOME_DEFAULT_CHAIN)
    const chainFound = chainsSupported.find(
      chain => chain.chainId === process.env.GRIDSOME_DEFAULT_CHAIN,
    );
    if (!chainFound) {
      throw new Error("Chain not supported.");
    }
    this.store.dispatch("setChain", chainFound);
  }

  private async connected(data) {
    try {
      await this.setChain(data.chainId);
      await this.setAccount(data.account);
      await this.store.dispatch("connectWallet", true);
    } catch (err) {
      throw new Error(err);
    }
  }

  private async close() {
    this.context.disconnect();
    this.store.dispatch("disconnect");
  }

  private async reConnect() {
    await this.context.disconnect();
    await this.store.dispatch("disconnect");
    await this.connect();
  }

  private async connect() {
    await this.context.connect(this.store.state.wallet);
  }

  private async setChain(chainId: string) {
    const chainFound = chainsSupported.find(
      chain => chain.chainId === chainId
    );
    if (!chainFound) {
      throw new Error("Chain not supported.");
    }
    this.store.dispatch("setChain", chainFound);
  }

  private async loadBalances() {
    const balance = await this.context.getNativeBalance(
      this.store.state.account
    );
    const RDTBalance = await this.context.getTokenBalance(
      this.store.state.account,
      this.RDTTokenAddress
    );
    console.log("get balan....", balance, RDTBalance);
    this.store.dispatch("setRDTBalance", RDTBalance);
    this.store.dispatch("setGeneralBalance", balance);

    if (RDTBalance > 0) {
      const RDTPrice = await this.context.getTokenPrice(
        this.RDTTokenAddress,
        RDTTokenExchange
      );
      this.store.dispatch("setRDTPrice", RDTPrice);
    }
  }

  private setAccount(account: string) {
    if (!account) {
      throw new Error("Problems with the account.");
    } else {
      this.store.dispatch("setAccount", account);
    }
  }
}

export class BaseComponent {
  protected mediator: Web3Mediator;

  constructor(mediator: Web3Mediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Web3Mediator): void {
    this.mediator = mediator;
  }
}
