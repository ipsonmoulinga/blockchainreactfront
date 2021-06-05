/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Transaction } from './Model';

const DisplayAchievedTransactions = () => {
  const [blockchain, setBlock] = useState<Transaction[]>([]);

  useEffect(() => {
    axios.get('https://msi6bpn676.execute-api.eu-west-3.amazonaws.com/dev/blockChainTransactions').then((response) => {
      const block : Transaction[] = response.data;
      setBlock(block);
    });
  }, []);

  return (
      <div>
        <p>
          Transactions achevées:
        </p>
        <ul>
          {blockchain.map((bloc, index) => (
            <li key={index}>
              Transaction N°{index + 1} = {JSON.stringify(bloc)}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default DisplayAchievedTransactions;
