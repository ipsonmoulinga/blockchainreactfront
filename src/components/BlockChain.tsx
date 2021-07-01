import React, { useState, useEffect, ReactElement } from 'react';
import {
  Button, Card, Grid, Typography,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import pickaxe from '../assets/pickaxe.png';
import IblockChain from '../model/BlockChain';
import getBlockChain, { mineBlockChain } from '../service/api';
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
const miningButtonStyle = {
  backgroundColor: 'forestgreen',
  borderRadius: '3% 3% 3% 3%',
  zIndex: 2,
  position: 'fixed' as const,
  bottom: 20,
  right: 20,
};

export const BlockChain = () : ReactElement => {
  const matches = useMediaQuery('(min-width:600px)');
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
    <Grid style={gridContainerStyle}>
      <Button
        style={miningButtonStyle}
        onClick={setMinedBlockChainIntoTheState}
      >
        <img
          width={45}
          height={45}
          src={pickaxe}/>
        <span style={{
          display: matches ? 'block' : 'none',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
          Mine a new Block
        </span>
      </Button>
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
