interface ChainConfig {
  name: string;
  contractAddress: string;
  symbol: string;
  blockExplorer: string;
  rpcUrl: string;
}

interface Config {
  [key: string]: ChainConfig;
}

export const config: Config = {
  '0xe704': {
    name: 'Goerli Linea',
    contractAddress: '',
    symbol: 'LineaETH',
    blockExplorer: 'https://explorer.goerli.linea.build',
    rpcUrl: 'https://rpc.goerli.linea.build',
  },
  '0x5': {
    name: 'Goerli',
    contractAddress: '',
    symbol: 'GoerliETH',
    blockExplorer: 'https://goerli.etherscan.io',
    rpcUrl: 'https://goerli.infura.io/v3/',
  },
  '0x14a33': {
    name: 'Goerli Base',
    contractAddress: '',
    symbol: 'BaseETH',
    blockExplorer: 'https://goerli.basescan.org',
    rpcUrl: 'https://goerli.base.org',
  },
  '0x1a4': {
    name: 'Goerli Optimism',
    contractAddress: '',
    symbol: 'OptimismETH',
    blockExplorer: 'https://goerli-optimism.etherscan.io',
    rpcUrl: 'https://optimism-goerli.publicnode.com',
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

export const getContractAddressByChainId = (chainId: string): string | undefined => {
  const chainConfig = config[chainId];
  if (chainConfig && isSupportedNetwork(chainId)) {
    return chainConfig.contractAddress;
  } 
}
