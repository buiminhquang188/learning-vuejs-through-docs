<template>
  <div>
    <h1>Attribute Bindings</h1>
    <div v-bind:id="dynamicId">Dynamic Id</div>
    <h2>Shorthand</h2>
    <div :id="dynamicIdShorthand">Dynamic Id Shorthand</div>
    <h2>Boolean Attributes</h2>
    <button :disabled="isButtonDisabled">Button</button>
    <h2>Dynamically Binding Multiple Attributes</h2>
    <div v-bind="objectOfAttrs">Object of Attributes</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      dynamicId: 'dynamicId',

      dynamicIdShorthand: 'dynamicId',

      isButtonDisabled: true,

      objectOfAttrs: {
        id: 'container',
        class: 'wrapper'
      }
    }
  }
})
</script>

<style scoped></style>
