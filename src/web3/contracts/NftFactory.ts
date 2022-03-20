import nftFactory from '~/data/web3/abi/NftFactory.json'
import { Chain } from '../model/chain.model';
import Web3Context from '../web3.context';

export default class NftFactory {

  static async uri(chain: Chain, context: Web3Context, typeNFT: number) {
    return await context.executeMethod({
      chain: chain.chainId,
      address: chain.smartContracts.contracts.NftFactory.address,
      function_name: "uri",
      abi: nftFactory,
      params: {
        "": `${typeNFT}`
      }
    });
  }
}
