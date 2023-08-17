<template>
  <div>
    <h1>Binding HTML Classes</h1>
    <hr />
    <BindingToObjects />
    <hr />
    <BindingToArrays />
    <hr />
    <BindingWithComponents />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import BindingToObjects from './parts/BindingToObjects.vue'
  import BindingToArrays from './parts/BindingToArrays.vue'
  import BindingWithComponents from './parts/BindingWithComponents.vue'

  export default defineComponent({
    components: {
      BindingToObjects,
      BindingToArrays,
      BindingWithComponents
    }
  })
</script>

<style scoped></style>
