<template>
  <!-- MyComponent template using $attrs -->
  <p :class="$attrs.class">Hi!</p>
  <span>This is a child component</span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    }
  })
</script>

<style scoped></style>
