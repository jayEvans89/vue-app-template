import HomePage from '@/modules/home/HomePage.vue'
import { mount } from '@vue/test-utils'

test('value', () => {
  const wrapper = mount(HomePage)

  expect(wrapper.vm.hello).toEqual('Hello')
})
