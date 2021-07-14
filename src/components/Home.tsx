import React, { ReactElement } from 'react';
import { CreateTransaction } from './Transaction';

const Home = () : ReactElement => (
      <div>
        <h2>Home</h2>
        <CreateTransaction />
      </div>
);
export default Home;
