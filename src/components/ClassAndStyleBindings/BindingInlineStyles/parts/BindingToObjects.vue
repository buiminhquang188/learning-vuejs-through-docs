<template>
  <h2>Binding to Objects</h2>
  <div
    :style="{
      color: bindingInlineStyles.activeColor,
      fontSize: bindingInlineStyles.fontSize + 'px'
    }"
  >
    Binding inline styles
  </div>
  <p>{{ $data.bindingInlineStyles }}</p>

  <div :style="styleObject">Binding inline styles with style object</div>
  <p>{{ $data.bindingInlineStyles }}</p>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        bindingInlineStyles: {
          activeColor: 'red',
          fontSize: 30
        },
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      }
    },
    setup() {
      return {}
    }
  })
</script>

<style scoped></style>
