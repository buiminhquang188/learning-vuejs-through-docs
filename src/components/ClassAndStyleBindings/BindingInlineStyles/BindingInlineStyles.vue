<template>
  <h1>Binding Inline Styles</h1>
  <hr />
  <BindingToObjectsVue />
  <br />
  <hr />
  <BindingToArrays />
  <br />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import BindingToObjectsVue from './parts/BindingToObjects.vue'
  import BindingToArrays from './parts/BindingToArrays.vue'

  export default defineComponent({
    data() {},
    setup() {},
    components: { BindingToObjectsVue, BindingToArrays }
  })
</script>

<style lang="scss" scoped></style>
