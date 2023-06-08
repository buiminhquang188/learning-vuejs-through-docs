<template>
  <div>
    <h1>Writable Computed</h1>
    <p>{{ fullName }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe'
      }
    },
    setup() {
      return {}
    },
    computed: {
      fullName: {
        // getter
        get() {
          return this.firstName + ' ' + this.lastName
        },
        set(newValue: string): void {
          [this.firstName, this.lastName] = newValue.split(' ')
        }
      }
    }
  })
</script>

<style scoped></style>
