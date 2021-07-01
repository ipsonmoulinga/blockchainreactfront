import React, { useState, useEffect, ReactElement } from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import IblockChain from '../model/BlockChain';
import getBlockChain from '../service/api';
import BlockList from './BlockList';
import TransactionList from './TransactionList';

const gridContainerStyle = {
  maxWidth: '100vw',
  minHeight: '100vh',
  height: 'max-content',
  overflow: 'hidden',
};
const cardStyle = {
  backgroundColor: 'transparent',
};

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
    <Grid style={gridContainerStyle}>
      <Card style={cardStyle}>
        <Typography><h3>Mining difficulty: {blockchain.difficulty}.</h3><br/></Typography>
      </Card>
      <Card style={cardStyle}>
          <Typography><h3>Mining reward: {blockchain.miningReward}.</h3><br/></Typography>
      </Card>
      <Grid>
        <Typography><h3>Blocks :</h3></Typography>
        <BlockList blocklist={blockchain.chain} />
      </Grid>
      <Grid>
        <Typography><h3>Achieved transactions :</h3></Typography>
        <TransactionList transactionList={blockchain.transactions} />
      </Grid>
  </Grid>
  );
};
export default BlockChain;
