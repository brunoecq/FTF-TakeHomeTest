import { mutations }  from '@/store/mutations';
import { Service } from '@/service';

describe('Vuex Tests', () => {

  it('SET_DATA', async () => {
    const expected = 1;
    const state = { all: [], interval: 0, base_url: '', git_username: '', git_project: ''};
    const data = await Service.getCommitsHistoryAsyncByUrl("https://api.github.com/repos/brunoecq/FTF-TakeHomeTest/commits");
    mutations.SET_DATA(state, data);
    expect(state.all.length).toBeGreaterThanOrEqual(expected);
  })

  it('SET_INTERVAL', async () => {
    const expected = 10;
    const state = { all: [], interval: 0, base_url: '', git_username: '', git_project: ''};
    const interval = 10;
    mutations.SET_INTERVAL(state, interval);
    expect(state.interval).toBe(expected);
  })

  it('SET_BASE_URL', async () => {
    const expected = 'https://api.github.com/repos/{0}/{1}/commits';
    const state = { all: [], interval: 0, base_url: '', git_username: '', git_project: ''};
    const url = 'https://api.github.com/repos/{0}/{1}/commits';
    mutations.SET_BASE_URL(state, url);
    expect(state.base_url).toBe(expected);
  })

  it('SET_GIT_USERNAME', async () => {
    const expected = 'brunoecq';
    const state = { all: [], interval: 0, base_url: '', git_username: '', git_project: ''};
    const git_username = 'brunoecq';
    mutations.SET_GIT_USERNAME(state, git_username);
    expect(state.git_username).toBe(expected);
  })

  it('SET_GIT_PROJECT', async () => {
    const expected = 'FTF-TakeHomeTest';
    const state = { all: [], interval: 0, base_url: '', git_username: '', git_project: ''};
    const git_project = 'FTF-TakeHomeTest';
    mutations.SET_GIT_PROJECT(state, git_project);
    expect(state.git_project).toBe(expected);
  })

})
