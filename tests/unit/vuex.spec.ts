import { mutations }  from '@/store/mutations';
import { Service } from '@/service';

describe('Vuex Tests', () => {

  it('SET_DATA', async () => {
    const expected = 1;
    const state = { all: [] , interval: 0};
    const data = await Service.getCommitsHistoryAsyncByUrl("https://api.github.com/repos/brunoecq/FTF-TakeHomeTest/commits");
    mutations.SET_DATA(state, data);
    expect(state.all.length).toBeGreaterThanOrEqual(expected);
  })

  it('SET_INTERVAL', async () => {
    const expected = 10;
    const state = { all: [] , interval: 0};
    const interval = 10;
    mutations.SET_INTERVAL(state, interval);
    expect(state.interval).toBe(expected);
  })

})
