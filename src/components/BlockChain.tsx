import React, { useState, useEffect, ReactElement } from 'react';
import getBlockChain from '../service/api';
import BlockList from './BlockList';
import IblockChain from './Model';
import TransactionList from './TransactionList';

export const DisplayBlokChain = () : ReactElement => {
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
      <div>
        <p>
          Mining difficulty: {blockchain.difficulty}.
        </p>
        <p>
          Mining reward: {blockchain.miningReward}.
        </p>
        <p>
          Blocks :
        </p>
        <div>
            <BlockList blocklist={blockchain.chain} />
         </div>
        <p>
          Achieved transactions :
        </p>
          <TransactionList transactionList={blockchain.transactions} />
      </div>
  );
};
export default DisplayBlokChain;
