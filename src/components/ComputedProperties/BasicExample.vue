<template>
  <div>
    <h1>Basic Example</h1>
    <p>Has published books:</p>
    <p>Without computed method</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
    <p>With computed method</p>
    <span>{{ publishBookMessage }}</span>
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
    computed: {
      publishBookMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No'
      }
    },
    setup() {
      return {}
    }
  })
</script>

<style scoped></style>
