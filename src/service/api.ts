/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BlockChain from '../components/Model';

export const getBlockChain = async () :Promise<BlockChain|undefined> => {
  try {
    const response = await axios.get('https://msi6bpn676.execute-api.eu-west-3.amazonaws.com/dev/BlockChain');
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
