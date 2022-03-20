import { Chain } from "./model/chain.model"


export enum Web3Event {
    Close,
    Connect,
    Connected,
    ReConnect,
    SetAccount,
    ChangeAccount,
    LoadBalances,
    SendError,
    SetChain,
    ExecuteMethod,
}

export interface Web3Mediator {
    chain: Chain
    notify(message: any, event: Web3Event): Promise<void>
    setDefaultChain(): Promise<void>
}
