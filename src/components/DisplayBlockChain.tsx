/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayBlockChain = () => {
  const [chain, setChain] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/setPhotos').then((response) => {
      const chaine = response.data;
      setChain(chaine);
    });
  }, []);

  return (
    <div>
      <ul>
        {chain.map((bloc, index) => (
          <li key={index}>
            bloc N°: {index} = {bloc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayBlockChain;
