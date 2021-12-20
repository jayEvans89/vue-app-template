
<template>
  <h1>{{ computedVar }} Home Page</h1>

  <child-component title="child component" optional="optional Prop" />
</template>

<script lang="ts">
import ChildComponent from '@/modules/home/components/ChildComponent.vue'
import { defineComponent, computed } from 'vue'
export default defineComponent({
  components: {
    ChildComponent
  },
  props: {
    test: {
      type: String,
      required: true
    }
  },
  setup() {
    const computedVar = computed(() => {
      return '123'
    })

    function returnString(string: string) {
      return string
    }

    return {
      computedVar,
      returnString
    }
  }
})
</script>
