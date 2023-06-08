<template>
  <div>
    <h1>Computed Caching vs. Methods</h1>
    <span>{{ calculateBooksMessage() }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        author: {
          name: 'Jonh Doe',
          books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
          ]
        }
      }
    },
    methods: {
      calculateBooksMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No'
      }
    },
    setup() {
      return {}
    }
  })
</script>

<style scoped></style>
