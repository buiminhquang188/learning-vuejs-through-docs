<template>
  <div>
    <h1>Declaring Reactive State</h1>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        count: 1,
        someObject: {}
      }
    },
    mounted() {
      const newObject = {}
      this.someObject = newObject
      console.log(newObject === this.someObject)

      console.log(this.count)
      this.count = 2
      console.log(this.count)
    }
  })
</script>

<style scoped></style>
