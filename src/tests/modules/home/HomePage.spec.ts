import HomePage from '@/modules/home/HomePage.vue'
import { shallowMount } from '@vue/test-utils'

test('value', () => {
  const wrapper = shallowMount(HomePage, { props: { test: 'hello' } })

  expect(wrapper.vm.test).toEqual('hello')
})

test('check function', () => {
  const wrapper = shallowMount(HomePage, {
    props: {
      test: 'hello'
    }
  })

  expect(wrapper.vm.returnString('hello')).toReturnWith('hello')
})
