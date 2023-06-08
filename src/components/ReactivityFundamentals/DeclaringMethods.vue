<template>
  <div>
    <h1>Declaring Methods</h1>
    <button @click="increment">Count: {{ count }}</button>

    <h2>DOM Update Timing</h2>

    <h2>Deep Reactivity</h2>
    <button @click="mutateDeeply">Mutate deeply</button>
    <p>{{ obj }}</p>

    <h2>Statefull Methods</h2>
    <button @click="click">debounce</button>
  </div>
</template>

<script lang="ts">
  import { debounce } from 'lodash'
  import { defineComponent, nextTick } from 'vue'

  export default defineComponent({
    data() {
      return {
        count: 0,
        obj: {
          nested: {
            count: 0
          },
          arr: ['foo', 'bar']
        }
      }
    },
    methods: {
      increment() {
        this.count++
        nextTick(() => {
          console.log('access update dom')
        })
      },

      mutateDeeply() {
        this.obj.nested.count++
        this.obj.arr.push('baz')
      },

      click: debounce(() => {
        console.log('run debounce')
      }, 500)
    }
  })
</script>

<style scoped></style>
