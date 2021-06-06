import { getBlockChain } from './api';

describe('getBlockChain', () => {
  it('should returns a blockchain ', async () => {
    // given
    // when
    const result = await getBlockChain();
    // then
    expect(result.difficulty).toEqual(2);
    expect(result.miningReward).toEqual(100);
    expect(result.chain[0].previousId).toEqual(undefined);
    expect(result.chain[1].id.substring(0, 2)).toEqual('00');
    expect(result.transactions[0].status).toEqual(0);
  });
});
