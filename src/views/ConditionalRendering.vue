<template>
  <div>
    <h1>Conditional Rendering</h1>
    <hr />
    <ConditionalRendering />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ConditionalRendering from '@/components/ConditionalRendering/ConditionalRendering.vue'

  export default defineComponent({
    setup() {
      return {}
    },
    components: {
      ConditionalRendering
    }
  })
</script>

<style scoped></style>
