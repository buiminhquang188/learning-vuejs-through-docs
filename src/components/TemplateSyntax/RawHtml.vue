<template>
  <div>
    <h1>Raw HTML</h1>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      rawHtml: `<span style="color:red">This should be red.</span>`
    }
  }
})
</script>

<style lang="scss" scoped></style>
