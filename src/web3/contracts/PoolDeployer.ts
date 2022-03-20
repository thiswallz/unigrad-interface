import poolDeployer from '~/data/web3/abi/PoolDeployer.json'
import { Chain } from '../model/chain.model';
import Web3Context from '../web3.context';


export default class PoolDeployer {

  static async poolCount(chain: Chain, context: Web3Context){
    return await context.executeMethod({
      chain: chain.chainId,
      address: chain.smartContracts.contracts.PoolDeployer.address,
      function_name: "poolCount",
      abi: poolDeployer,
    });
  }

  static async allPools(chain: Chain, context: Web3Context, pool: number){
    return await context.executeMethod({
      chain: chain.chainId,
      address: chain.smartContracts.contracts.PoolDeployer.address,
      function_name: "allPools",
      abi: poolDeployer,
      params: {
        "": `${pool}`
      }
    })
  }
}
