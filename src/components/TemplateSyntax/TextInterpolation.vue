<template>
  <div>
    <h1>Template Syntax</h1>
    <span>Message: {{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      msg: 'Template Syntax'
    }
  }
})
</script>

<style lang="scss" scoped></style>
