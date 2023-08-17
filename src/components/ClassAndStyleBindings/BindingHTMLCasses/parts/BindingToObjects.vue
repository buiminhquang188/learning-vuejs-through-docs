<template>
  <h2>Binding to Object</h2>
  <p>Turn on devtools to see more in details</p>
  <div :class="{ active: isActive }">Active truthiness</div>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
    Mutiple classes with default class
  </div>
  <div :class="classObject">Mutiple class with bound object</div>
  <div :class="classObjectComputed">Mutiple class with computed</div>

  <br />
  <div>{{ $data }}</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        isActive: true,
        hasError: false,
        classObject: {
          active: true,
          'text-danger': false
        },
        error: null
      }
    },
    setup() {
      return {}
    },
    computed: {
      classObjectComputed() {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && (this.error as any).type === 'fatal'
        }
      }
    }
  })
</script>

<style scoped></style>
