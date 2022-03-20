import nftPool from '~/data/web3/abi/NftPool.json'
import { Chain } from '../model/chain.model';
import Web3Context from '../web3.context';


export default class NftPool {

  static async typeNFT(chain: Chain, address: string, context: Web3Context){
    return await context.executeMethod({
      chain: chain.chainId,
      address: address,
      function_name: "typeNFT",
      abi: nftPool,
    });
  }

  static async paused(chain: Chain, address: string, context: Web3Context){
    return await context.executeMethod({
      chain: chain.chainId,
      address: address,
      function_name: "paused",
      abi: nftPool,
    });
  }

  static async stakingStart(chain: Chain, address: string, context: Web3Context){
    return await context.executeMethod({
      chain: chain.chainId,
      address: address,
      function_name: "stakingStart",
      abi: nftPool,
    });
  }

  static async balances(chain: Chain, address: string, context: Web3Context, addressOwner: string){
    return await context.executeMethod({
      chain: chain.chainId,
      address: address,
      function_name: "balances",
      abi: nftPool,
      params: {
        "": addressOwner
      }
    });
  }



}
