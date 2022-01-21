import ChildComponent from '@/modules/home/components/ChildComponent.vue'
import { enableAutoUnmount, shallowMount, VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'

let wrapper: VueWrapper<any>
function createComponent(options?: any) {
  wrapper = shallowMount(ChildComponent, {
    ...options
  })
}

const findTitle = () => wrapper.find('[data-test-id="title"')
const findTestButton = () => wrapper.find('[data-test-id="testButton"')
const findCount = () => wrapper.find('[data-test-id="count"]')

enableAutoUnmount(afterEach)

describe('child component', () => {
  it('should show the title', () => {
    createComponent({
      props: {
        title: 'title'
      }
    })

    expect(findTitle().text()).toBe('Child Component title')
  })

  it('Increases the count on button click', async () => {
    createComponent()

    expect(findCount().text()).toBe('0')

    findTestButton().trigger('click')
    await nextTick()

    expect(findCount().text()).toBe('1')
  })

  it('Show optional prop for the button text', async () => {
    createComponent()
    expect(findTestButton().text()).toBe('defaultOptional')
  })
})
