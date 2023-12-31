interface ApplicationConfig{
  id:string
  value:string
  name:string
}
interface ChainConfig {
  name: string;
  entryPointContractAddress:string;
  verifyingPaymasterContractAddress: string;
  paymasterRegistryContractAddress:string;
  applications: ApplicationConfig[];
  symbol: string;
  pimlicoChainValue:string;
  blockExplorer: string;
  rpcUrl: string;
}

interface Config {
  [key: string]: ChainConfig;
}

export const config: Config = {
  '0xe704': {
    name: 'Goerli Linea',
    entryPointContractAddress:'0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
    verifyingPaymasterContractAddress: '0xd6F6bA8025366300822Dae5008762074bC72F1B5',
    paymasterRegistryContractAddress:'',
    applications:[
      {
        id:'1',
        value:'0x2ceb1c6626da4cd3c2d48ed99536a59b7f8241b9',
        name:'NAVHHacker NFT'
      },{
        id:'2',
        value:'native_asset_transfer',
        name:'SponsorPay'
      }
      ],
    symbol: 'LineaETH',
    pimlicoChainValue:'linea-testnet',
    blockExplorer: 'https://explorer.goerli.linea.build',
    rpcUrl: 'https://rpc.goerli.linea.build',
  },
  '0x14a33': {
    name: 'Goerli Base',
    entryPointContractAddress:'0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
    verifyingPaymasterContractAddress: '0xe6e61b4cb54ecfc67421b61bcdc5a566d91888ae',
    paymasterRegistryContractAddress:'',
    applications:[
      {
        id:'1',
        value:'0x7f829ab036fa3ac32928910152c78d93038dc3e2',
        name:'Base ETHGlobal Staking'
      },
      {
        id:'2',
        value:'0x36d07d0b52eab491d714732c7cc79dc39e3ab373',
        name:'xSuperhack NFT'
      }],
    symbol: 'BaseETH',
    pimlicoChainValue:'base-goerli',
    blockExplorer: 'https://goerli.basescan.org',
    rpcUrl: 'https://goerli.base.org',
  },
  '0x1a4': {
    name: 'Goerli Optimism',
    entryPointContractAddress:'0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
    verifyingPaymasterContractAddress: '0xe9866c87082bac6a08a1f7cbbc2697d137fc5dfc',
    paymasterRegistryContractAddress:'0x44d65c8be690325059dbe4fe11c96440d1400efc',
    applications:[
      {
        id:'1',
        value:'0xe6e61b4cb54ecfc67421b61bcdc5a566d91888ae',
        name:'OP ETHGlobal Staking'
      },
      {
        id:'2',
        value:'0x04f726034cebb6dabc6dc6a57f4abe0b342e02a1',
        name:'xSuperhack NFT'
      }],
    symbol: 'OptimismETH',
    pimlicoChainValue:'optimism-goerli',
    blockExplorer: 'https://goerli-optimism.etherscan.io',
    rpcUrl: process.env.OPTIMISM_GOERLI_RPC!,
  }
}

export const isSupportedNetwork = (id: string) => {
  if (!id) {
    return false;
  }
  const isHexChain = id.startsWith('0x');
  const networkId = isHexChain ? id : `0x${Number(id).toString(16)}`;
  return !!(networkId in config );
}

export const getVerifyingPaymasterContractAddressByChainId = (chainId: string): string | undefined => {
  const chainConfig = config[chainId];
  if (chainConfig && isSupportedNetwork(chainId)) {
    return chainConfig.verifyingPaymasterContractAddress
  } else {
    return ''; // Chain ID not found in config
  }
}
export const getEntryPointContractAddressByChainId = (chainId: string): string | undefined => {
  const chainConfig = config[chainId];
  if (chainConfig && isSupportedNetwork(chainId)) {
    return chainConfig.entryPointContractAddress
  } else {
    return ''; // Chain ID not found in config
  }
}
export const getPaymasterRegistryContractAddressByChainId = (chainId: string): string | undefined => {
  const chainConfig = config[chainId];
  if (chainConfig && isSupportedNetwork(chainId)) {
    return chainConfig.paymasterRegistryContractAddress
  } else {
    return ''; // Chain ID not found in config
  }
}
export const getPimlicoChainNameByChainId = (chainId: string): string | undefined => {
  const chainConfig = config[chainId];
  if (chainConfig && isSupportedNetwork(chainId)) {
    return chainConfig.pimlicoChainValue
  } else {
    return ''; // Chain ID not found in config
  }
}
export const getChainConfigForChainId = (chainId: string): ChainConfig | undefined=> {
  const chainConfig = config[chainId];
  if (chainConfig && isSupportedNetwork(chainId)) {
    return chainConfig;
  } 
}
export const getApplicationsForChainId = (chainId: string): ApplicationConfig[] | undefined=> {
  const chainConfig = config[chainId];
  if (chainConfig && isSupportedNetwork(chainId)) {
    return chainConfig.applications;
  } 
}