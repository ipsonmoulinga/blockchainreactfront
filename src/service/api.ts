import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
  IblockChain,
  IDatabaseOperationStatus,
  Itransaction,
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
export const getBalance = async (publicKey:string) : Promise<number> => {
  try {
    const response = await axios.get(`https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/balance/${publicKey}`);
    return Number(response.data);
  } catch (error) {
    console.error(error);
    return 0;
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
export const getAllTransactionsByUsers = async (
  publickey:string,
): Promise<Itransaction[]> => {
  const EmptyUsersTransactions :Itransaction[] = [];
  try {
    const response = await axios
      .get(`https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/getAllTransactions/${publickey}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return EmptyUsersTransactions;
  }
};
export const createTransaction = async (
  amount : number, sender: string, receiver: string,
) :Promise<IblockChain> => {
  const emptyBlockChain :IblockChain = {
    chain: [],
    transactions: [],
    miningReward: 0,
    difficulty: 0,
  };
  try {
    const response = await axios
      .get(`https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/createTransaction/${amount}/${sender}/${receiver}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return emptyBlockChain;
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createNewUser = (
  // formdata:FormData,
  // form: HTMLFormElement,
  publickey:string,
) => {
  const history = useHistory();
  const dat = { email: publickey };
  try {
    const response = axios
      .post('https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/createUser', dat);
    // const { data } = response;
    // eslint-disable-next-line no-restricted-syntax
    console.log(response);
    history.push('/displayallusers');
  } catch (error) {
    console.error(error);
  }
};
