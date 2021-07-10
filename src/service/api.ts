import axios from 'axios';
import {
  IblockChain,
  IDatabaseOperationStatus,
  Iuser,
} from '../model/BlockChain';

const getBlockChain = async () :Promise<IblockChain> => {
  const emptyBlockChain :IblockChain = {
    chain: [],
    transactions: [],
    miningReward: 0,
    difficulty: 0,
  };
  try {
    const response = await axios.get('https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/blockchain');
    return response.data;
  } catch (error) {
    console.error(error);
    return emptyBlockChain;
  }
};
export default getBlockChain;

export const mineBlockChain = async (blockchainToMine : IblockChain) :Promise<IblockChain> => {
  try {
    const response = await axios.get('https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/mine');
    return response.data;
  } catch (error) {
    console.error(error);
    return blockchainToMine;
  }
};
export const createUser = async (name:string) :Promise<IDatabaseOperationStatus> => {
  try {
    const response = await axios.get(`https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/createUser/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return IDatabaseOperationStatus.failure;
  }
};
export const getAllUsers = async (): Promise<Iuser[]> => {
  const EmptyUsersTable :Iuser[] = [];
  try {
    const response = await axios
      .get('https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/blockChainUsers');
    return response.data;
  } catch (error) {
    console.error(error);
    return EmptyUsersTable;
  }
};
