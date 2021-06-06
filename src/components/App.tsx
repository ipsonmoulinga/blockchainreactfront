/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import '../style/App.css';
import DisplayBlockChain, { BlockChainComponent } from './DisplayBlockChain';

function App() {
  return (
    <div>
      <BlockChainComponent />
      Hello world !
      <DisplayBlockChain />
    </div>
  );
}
export default App;
