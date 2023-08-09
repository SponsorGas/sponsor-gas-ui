import { ethers } from "ethers"


export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)
  return balance
}

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex)
  return chainIdNum
}

export const formatAddress = (addr: string) => {
  return `${addr.substring(0, 5)}...${addr.substring(39)}`
}

export const isJSONString = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

export const isAddress = (address:string) => {
  return ethers.utils.isAddress(address)
}