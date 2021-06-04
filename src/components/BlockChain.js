/* eslint-disable max-len */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// https://0qi49cvh1e.execute-api.eu-west-3.amazonaws.com/dev/chain
// 'https://0qi49cvh1e.execute-api.eu-west-3.amazonaws.com/dev/chain'

// https://jsonplaceholder.typicode.com/todos

// https://jsonplaceholder.typicode.com/setPhotos

// http://localhost:5000/chain

const Axios = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('https://0qi49cvh1e.execute-api.eu-west-3.amazonaws.com/dev/chain', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      },
    })
      .then((res) => {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Credentials', 'true');
        // res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        // 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token'
        const datas = res.data;
        setDatas(datas);
      });
  }, []);

  return (
    <div>
      <ul>
        {datas.map((data, index) => (
          <li key={index}>
            index N°:{index} = {data.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;
