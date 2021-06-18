import React, { useState, useEffect, ReactElement } from 'react';
import IblockChain from '../model/BlockChain';
import getBlockChain, { mineBlockChain } from '../service/api';
import BlockList from './BlockList';
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
  const setMinedBlockChainIntoTheState = async () => {
    const response = await mineBlockChain(blockchain);
    setBlockChain(response);
  };
  useEffect(() => {
    setBlockChainIntoTheState();
  }, []);

  return (
      <div>
        <button onClick={setMinedBlockChainIntoTheState}> MineBlockChain </button>
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
