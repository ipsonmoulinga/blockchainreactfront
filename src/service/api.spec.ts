import { StatusType } from '../model/BlockChain';
import getBlockChain, {
  getAllTransactionsByUsers,
  // mineBlockChain,
} from './api';

describe('getBlockChain', () => {
  it('should returns a blockchain ', async () => {
    // given
    const givenMiningReward = 100;
    const givenMiningDifficulty = 2;
    // when
    const result = await getBlockChain();
    // then
    expect(result.difficulty).toEqual(givenMiningDifficulty);
    expect(result.miningReward).toEqual(givenMiningReward);
    expect(result.chain[0].previousId).toEqual(undefined);
    expect(result.chain[1].id.substring(0, 2)).toEqual('00');
    expect(result.transactions[0].status).toEqual(StatusType.achieved);
  });
});

// describe('mineBlockChain', () => {
//   it('should returns a blockchain ', async () => {
//     // given
//     const givenMiningReward = 100;
//     const givenMiningDifficulty = 2;
//     // when
//     const blockchainToMine = await getBlockChain();

//     const result = await mineBlockChain(blockchainToMine);
//     // then
//     expect(result.difficulty).toEqual(givenMiningDifficulty);
//     expect(result.miningReward).toEqual(givenMiningReward);
//     expect(result.chain[0].previousId).toEqual(undefined);
//     expect(result.chain[1].id.substring(0, 2)).toEqual('00');
//     expect(result.transactions[0].status).toEqual(StatusType.achieved);
//     expect(result.chain.length).toEqual(blockchainToMine.chain.length + 1);
//   });
// });
describe('getAllTransactionsByUsers', () => {
  it('should returns all transactions initiated by a user ', async () => {
    // given
    const MinerPublicKey = 'secondMiner';
    // when
    const result = await getAllTransactionsByUsers(MinerPublicKey);
    // then
    expect(result.length).toEqual(3);
  });
});
