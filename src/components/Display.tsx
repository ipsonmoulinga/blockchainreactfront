/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */

import BlockChain, { Block } from './Model';

export const DisplayOneBlock = (props:{BlockToDIsplay: Block}) => (
    <ul>
        {props.BlockToDIsplay.previousId
          ? <li> id of previous block : {props.BlockToDIsplay.previousId}</li>
          : <li> Genesis block</li>}
          <li> id : {props.BlockToDIsplay.id} </li>
          <li><ul>{props.BlockToDIsplay.pendingTransactions.map(
            (transaction, index) => <li key={index}> {JSON.stringify(transaction)}</li>,
          )} </ul></li>
    </ul>
);

const DisplayAllBlocks = (props:{blockchain: BlockChain}) => (
    <ul>{props.blockchain.chain.map(
      (blockToDIsplay, index) => <li key={index}>
                                    <DisplayOneBlock BlockToDIsplay = {blockToDIsplay}/>
                                </li>,
    )}
    </ul>
);
export default DisplayAllBlocks;
