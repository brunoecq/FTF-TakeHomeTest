import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card.vue Test', () => {
  it('Renders data and contains username when passed', () => {
    const expected = "BrunoEchevarria"
    const item: JSON = <JSON><unknown>{
        "sha": "ea29703a00d8aedbe5bb003093be678619ad787e",
        "commit": {
          "author": {
            "name": "BrunoEchevarria",
            "email": "bruno.ecq@gmail.com",
            "date": "2021-04-10T03:24:42Z"
          },
          "committer": {
            "name": "BrunoEchevarria",
            "email": "bruno.ecq@gmail.com",
            "date": "2021-04-10T01:39:40Z"
          },
          "message": "* Adding Unit Test for Vuex. \\n * Adding Vuex TS, state, mutations, actions support. \\n _TODO:_ Finish actions unit tests.",
          "url": "https://api.github.com/repos/brunoecq/FTF-TakeHomeTest/git/commits/ea29703a00d8aedbe5bb003093be678619ad787e"
        },
        "url": "https://api.github.com/repos/brunoecq/FTF-TakeHomeTest/commits/ea29703a00d8aedbe5bb003093be678619ad787e",
        "html_url": "https://github.com/brunoecq/FTF-TakeHomeTest/commit/ea29703a00d8aedbe5bb003093be678619ad787e",
        "comments_url": "https://api.github.com/repos/brunoecq/FTF-TakeHomeTest/commits/ea29703a00d8aedbe5bb003093be678619ad787e/comments",
        "author": {
          "login": "BrunoEchevarria",
          "id": 7648368,
          "avatar_url": "https://avatars.githubusercontent.com/u/7648368?v=4",
          "url": "https://api.github.com/users/BrunoEchevarria",
          "html_url": "https://github.com/BrunoEchevarria"
        }
    }
    const wrapper = shallowMount(Card, {
      props: { item }
    })
    expect(wrapper.text()).toContain(expected)
  })
})
