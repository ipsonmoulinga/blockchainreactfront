import { getBlockChain, getBlockChain2 } from './api';

describe('getBlockChain', () => {
  it('should returns a blockchain ', async () => {
    // given
    // when
    const result = await getBlockChain();
    // then
    expect(result?.difficulty).toEqual(2);
  });
});
describe('getBlockChain2', () => {
  it('should returns a blockchain ', () => {
    // given
    // when
    const result = getBlockChain2();
    // then
    expect(result.difficulty).toEqual(2);
    expect(result.miningReward).toEqual(100);
  });
});
