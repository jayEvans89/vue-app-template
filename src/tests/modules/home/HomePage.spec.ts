import HomePage from '@/modules/home/HomePage.vue'
import { shallowMount } from '@vue/test-utils'

describe('Home page component props should be correct', () => {
  const wrapper = shallowMount(HomePage, {
    props: {
      test: 'hello'
    }
  })

  it('test prop should return hello', async () => {
    expect(wrapper.vm.test).toEqual('hello')
  })

  it('returnFunction should return `hello`', () => {
    const wrapper = shallowMount(HomePage, {
      props: {
        test: 'hello'
      }
    })

    expect(wrapper.vm.returnString('hello')).toEqual('hello')
  })
})
