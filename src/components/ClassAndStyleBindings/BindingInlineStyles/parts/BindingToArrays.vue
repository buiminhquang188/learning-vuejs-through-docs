<template>
  <h2>Binding to Arrays</h2>
  <div :style="[arrayStyles, overridingStyles]">Binding to Arrays</div>

  <p>{{ $data }}</p>

  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] as never }">
    Binding mutiple value
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        arrayStyles: {
          color: 'red',
          fontSize: '13px'
        },
        overridingStyles: {
          color: 'cyan',
          background: 'orange'
        }
      }
    },
    setup() {
      return {}
    }
  })
</script>

<style scoped></style>
