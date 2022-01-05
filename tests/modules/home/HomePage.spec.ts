import HomePage from '@/modules/home/HomePage.vue'
import { shallowMount } from '@vue/test-utils'

describe('Home page component', () => {
  const wrapper = shallowMount(HomePage, {
    props: {
      test: 'hello'
    }
  })

  it('returnFunction should return `hello`', () => {
    expect(wrapper.vm.returnString('hello')).toEqual('hello')
  })
})
