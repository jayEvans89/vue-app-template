import HomePage from '@/modules/home/HomePage.vue'
import { enableAutoUnmount, shallowMount, VueWrapper } from '@vue/test-utils'

let wrapper: VueWrapper<any>
function createComponent(options?: any) {
  wrapper = shallowMount(HomePage, {
    ...options
  })
}

enableAutoUnmount(afterEach)

const findTitle = () => wrapper.find('[data-test-id="title"]')

describe('Home page component', () => {
  it('returnFunction should return `hello`', () => {
    createComponent({
      props: {
        test: 'title'
      }
    })

    expect(findTitle().text()).toBe('title Home Page Title')
  })
})
