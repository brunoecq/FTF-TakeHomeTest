import { Service } from '@/service'

describe('Service Tests', () => {

  it('Service retrieves data', async () => {
    const minValue = 0;
    const result = await Service.getCommitsHistoryAsyncByUrl("https://api.github.com/repos/brunoecq/FTF-TakeHomeTest/commits");
    expect(result.length).toBeGreaterThan(minValue)
  })

  it('Service data matchs author', async () => {
    const expected = 'BrunoEchevarria';
    const result = await Service.getCommitsHistoryAsyncByUrl("https://api.github.com/repos/brunoecq/FTF-TakeHomeTest/commits");
    expect(result.length > 0 ? result[0].author.login : '').toBe(expected);
  })

})
