import axios from 'axios';
import IblockChain, { Iuser } from '../model/BlockChain';

const getBlockChain = async () :Promise<IblockChain> => {
  const emptyBlockChain :IblockChain = {
    chain: [],
    transactions: [],
    miningReward: 0,
    difficulty: 0,
  };
  try {
    const response = await axios.get('https://ywv60ov27i.execute-api.eu-west-3.amazonaws.com/dev/blockchain');
    return response.data;
  } catch (error) {
    console.error(error);
    return emptyBlockChain;
  }
};
export default getBlockChain;

export const mineBlockChain = async (blockchainToMine : IblockChain) :Promise<IblockChain> => {
  try {
    const response = await axios.get('https://ywv60ov27i.execute-api.eu-west-3.amazonaws.com/dev/mine');
    return response.data;
  } catch (error) {
    console.error(error);
    return blockchainToMine;
  }
};
export const createUser = async (name:string) :Promise<Iuser> => {
  const defaultUser:Iuser = { privateKey: '', publicKey: '' };
  try {
    const response = await axios.get(`https://ywv60ov27i.execute-api.eu-west-3.amazonaws.com/dev/user/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return defaultUser;
  }
};
