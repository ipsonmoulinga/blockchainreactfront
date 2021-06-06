/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import BlockChain from './Model';
import { getBlockChain } from '../service/api';
import { DisplayOneBlock } from './DisplayOneBlock';
import { DisplayTransaction } from './DisplayTransaction';

export const DisplayBlokChain = () => {
  const emptyBlockChain:BlockChain = {
    chain: [], transactions: [], miningReward: 0, difficulty: 0,
  };
  const [blockchain, setBlockChain] = useState<BlockChain>(emptyBlockChain);

  const setBlockChainIntoTheState = async () => {
    const response = await getBlockChain();
    setBlockChain(response);
  };
  useEffect(() => {
    setBlockChainIntoTheState();
  }, []);

  return (
      <div>
        <p> Blockchain with a mining difficulty of {blockchain.difficulty} and a mining reward of {blockchain.miningReward}.</p>
        <p>
          Blocks :
        </p>
        <div>
            {blockchain.chain.map((block, index) => (
            <li key={index}>Block N°{index + 1} <DisplayOneBlock BlockToDisplay={block}/></li>))}
         </div>
        <p>
          Achieved transactions :
        </p>
        <div>
            {blockchain.transactions.map((transaction, index) => (
            <li key={index}>Transaction N°{index + 1}
              <DisplayTransaction TransactionToDisplay={transaction}/>
            </li>))}
         </div>
      </div>
  );
};
export default DisplayBlokChain;
