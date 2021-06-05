import { getBlockChain } from './api';

describe('getBlockChain', () => {
  it('should returns a blockchain ', async () => {
    // given
    // when
    const result = await getBlockChain();
    // then
    expect(result?.difficulty).toEqual(2);
  });
});
