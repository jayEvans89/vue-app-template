import ChildComponent from '@/modules/home/components/ChildComponent.vue'
import { enableAutoUnmount, VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'

import { createNewWrapper } from '../../../helpers/createWrapper'

let wrapper: VueWrapper<any>
enableAutoUnmount(afterEach)

const findTitle = () => wrapper.find('[data-test-id="title"')
const findTestButton = () => wrapper.find('[data-test-id="testButton"')
const findCount = () => wrapper.find('[data-test-id="count"]')

describe('child component', () => {
  it('should show the title', () => {
    wrapper = createNewWrapper(ChildComponent, {
      props: {
        title: 'title'
      }
    })

    expect(findTitle().text()).toBe('Child Component title')
  })

  it('Increases the count on button click', async () => {
    wrapper = createNewWrapper(ChildComponent)

    expect(findCount().text()).toBe('0')

    findTestButton().trigger('click')
    await nextTick()

    expect(findCount().text()).toBe('1')
  })

  it('Show optional prop for the button text', async () => {
    wrapper = createNewWrapper(ChildComponent)
    expect(findTestButton().text()).toBe('defaultOptional')
  })
})
