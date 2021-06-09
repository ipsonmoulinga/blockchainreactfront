import React, { useState, useEffect, ReactElement } from 'react';
import IblockChain from '../model/BlockChain';
import getBlockChain from '../service/api';
import BlockList from './BlockList';
import TransactionList from './TransactionList';
import '../style/BlockChain.css';

export const BlockChain = () : ReactElement => {
  const emptyBlockChain:IblockChain = {
    chain: [], transactions: [], miningReward: 0, difficulty: 0,
  };
  const [blockchain, setBlockChain] = useState<IblockChain>(emptyBlockChain);
  const setBlockChainIntoTheState = async () => {
    const response = await getBlockChain();
    setBlockChain(response);
  };
  useEffect(() => {
    setBlockChainIntoTheState();
  }, []);

  return (
      <ul id="blockchain">
        <li>
        Mining difficulty: {blockchain.difficulty}.
        </li>
        <li>
          Mining reward: {blockchain.miningReward}.
        </li>
        <li>
          Blocks :
          <BlockList blocklist={blockchain.chain} />
        </li>
        <li>
          Achieved transactions :
          <TransactionList transactionList={blockchain.transactions} />
        </li>
      </ul>
  );
};
export default BlockChain;
