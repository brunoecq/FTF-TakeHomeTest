import { shallowMount } from '@vue/test-utils'
import ListCard from '@/components/ListCard.vue'


describe('CardList.vue Tests', () => {
  it('Renders a Card for each item incomming for ListCard', () => {
    const listado = [{},{},{}]
    const expected = 3
    const wrapper = shallowMount(ListCard,{
      props: { listado }
    })
    expect(wrapper.findAllComponents({name: "Card"})).toHaveLength(expected)
  })
})


