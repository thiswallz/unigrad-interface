import chains from "~/data/web3/chains.json";

// tmp types, trick for bypass type moralis
export type ChainsIdType = '0x38' | '0x61'

export interface SmartContract {
  address: string,
}

export interface Chain {
  code: string
  name: string
  chainId: string
  test?: boolean
  smartContracts: {
    RDTToken: string,
    contracts: Record<string, SmartContract>
  }
}

export const chainsSupported: Chain[] = process.env.GRIDSOME_TESTNET_CHAIN ?  chains : chains.filter(chain => chain.test !== false)
