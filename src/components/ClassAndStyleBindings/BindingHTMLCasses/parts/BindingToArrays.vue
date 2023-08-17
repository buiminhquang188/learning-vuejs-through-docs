<template>
  <h2>Binding to Arrays</h2>
  <div :class="[activeClass, errorClass]">Array of class</div>
  <div :class="[isActive ? activeClass : '', errorClass]">
    Array of class with condition
  </div>
  <div :class="[{ active: isActive }, errorClass]">
    Array of class with condition use the object syntax
  </div>

  <br />
  <div>{{ $data }}</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        isActive: false,
        activeClass: 'active',
        errorClass: 'text-danger'
      }
    },
    setup() {
      return {}
    }
  })
</script>

<style scoped></style>
