import getBlockChain, { createUser, mineBlockChain } from './api';

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
    expect(result.transactions[0].status).toEqual(0);
  });
});

describe('mineBlockChain', () => {
  it('should returns a blockchain ', async () => {
    // given
    const givenMiningReward = 100;
    const givenMiningDifficulty = 2;
    // when
    const blockchainToMine = await getBlockChain();

    const result = await mineBlockChain(blockchainToMine);
    // then
    expect(result.difficulty).toEqual(givenMiningDifficulty);
    expect(result.miningReward).toEqual(givenMiningReward);
    expect(result.chain[0].previousId).toEqual(undefined);
    expect(result.chain[1].id.substring(0, 2)).toEqual('00');
    expect(result.transactions[0].status).toEqual(0);
    expect(result.chain.length).toEqual(blockchainToMine.chain.length + 1);
  });
});
describe('createUser', () => {
  it('should returns a user ', async () => {
    // given
    const userName = 'Ipson';
    // when
    const result = await createUser(userName);
    // then
    expect(result.publicKey).toEqual(userName);
  });
});
