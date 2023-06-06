<template>
  <div>
    <h1>Directives</h1>
    <p v-if="seen">Now you see me</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      seen: true
    }
  }
})
</script>

<style scoped></style>
