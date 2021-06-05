/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayBlockChain = () => {
  const [blockchain, setBlock] = useState([]);

  useEffect(() => {
    axios.get('https://msi6bpn676.execute-api.eu-west-3.amazonaws.com/dev/chain').then((response) => {
      const block = response.data;
      setBlock(block);
    });
  }, []);

  return (
    <div>
      <p>
        DisplayBlockChain.tsx:
      </p>
      <ul>
        {blockchain.map((bloc, index) => (
          <li key={index}>
            bloc N° {index + 1} = {JSON.stringify(bloc)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayBlockChain;
