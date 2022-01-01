
<template>
  <h1>Child Component {{ title }}</h1>
  <p @click="testMethod">
    {{ optional }}
  </p>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  optional?: string
}

withDefaults(defineProps<Props>(), {
  optional: 'defaultOptional'
})

const testMethod = () => {
  return 'testMethod'
}

</script>
