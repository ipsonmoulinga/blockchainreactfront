/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BlockChain from '../components/Model';

export const getBlockChain = async () :Promise<BlockChain> => {
  const emptyBlockChain :BlockChain = {
    chain: [],
    transactions: [],
    miningReward: 0,
    difficulty: 0,
  };
  try {
    const response = await axios.get('https://msi6bpn676.execute-api.eu-west-3.amazonaws.com/dev/BlockChain');
    return response.data;
  } catch (error) {
    console.error(error);
    return emptyBlockChain;
  }
};
