import ChildComponent from '@/modules/home/components/ChildComponent.vue'
import { shallowMount } from '@vue/test-utils'

test('value', () => {
  const wrapper = shallowMount(ChildComponent, {
    props: {
      title: 'hello'
    }
  })

  expect(wrapper.vm.title).toEqual('hello')
})

test('check function', () => {
  const wrapper = shallowMount(ChildComponent, {
    props: {
      title: 'hello'
    }
  })

  expect(wrapper.vm.testMethod()).toEqual('testMethod')
})
