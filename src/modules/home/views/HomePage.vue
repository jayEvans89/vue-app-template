
<template>
  <div>
    <h1 data-test-id="title">
      {{ computedVar }}
    </h1>

    <child-component
      title="child component"
      optional="optional Prop"
    />
  </div>
</template>

<script lang="ts" setup>
import ChildComponent from '@/modules/home/components/ChildComponent.vue'
import { computed } from 'vue'

interface Props {
  test?: string;
}

const props = withDefaults(defineProps<Props>(), {
  test: 'Home Parent'
})

const computedVar = computed(() => {
  return `${props.test} Home Page Title`
})
</script>
