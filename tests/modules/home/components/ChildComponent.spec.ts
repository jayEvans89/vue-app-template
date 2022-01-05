import ChildComponent from '@/modules/home/components/ChildComponent.vue'
import { shallowMount } from '@vue/test-utils'

describe('child component', () => {
  const wrapper = shallowMount(ChildComponent, {
    props: {
      title: 'hello'
    }
  })

  it('value', () => {
    expect(wrapper.vm.title).toEqual('hello')
  })

  it('check function', () => {
    expect(wrapper.vm.testMethod()).toEqual('testMethod')
  })
})
