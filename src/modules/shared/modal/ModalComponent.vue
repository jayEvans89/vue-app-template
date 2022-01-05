
<template>
  <div class="modal fade" :modal-id="modalId">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  /**
   * The id of the modal
   */
  modalId: string;

  /**
   * Whether the modal will be centered on the page
   */
  center?: boolean;

  /**
  * If the modal can be closed via a background click or the escape key
  */
  static?: boolean | null;

  /**
   * The size of the modal
   */
  modalSize?: string;
}

withDefaults(defineProps<Props>(), {
  center: true,
  static: null,
  modalSize: 'lg'
})
</script>

<style lang="scss">
</style>
