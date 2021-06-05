/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import '../style/App.css';
import BlockChain from './Model';
// import { DisplayOneBlock } from './Display';
import DisplayAllBlocks from './Display';
// import { getBlockChain } from '../service/api';

const originalblockchain :BlockChain = {
  chain: [
    {
      id: '631169bf6a0f605460b8669c382d1b92eeae4e70e84106c8b025fc61664debc8',
      pendingTransactions: [],
    },
    {
      previousId: '631169bf6a0f605460b8669c382d1b92eeae4e70e84106c8b025fc61664debc8',
      id: '00d07320cec64acc3667c51574afffc55a96b2345a2148f0611de5c6a677ea6a',
      pendingTransactions: [],
    }],
  transactions: [],
  miningReward: 1,
  difficulty: 2,
};

async function App() {
  return (
      <div>
         <DisplayAllBlocks blockchain={originalblockchain}/>
      </div>
  );
}
export default App;
