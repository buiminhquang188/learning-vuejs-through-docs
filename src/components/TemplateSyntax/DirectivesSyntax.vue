<template>
  <div>
    <h1>Directives</h1>
    <p v-if="seen">Now you see me</p>

    <h2>Argument</h2>
    <div>
      <a v-bind:href="url">Full syntax directives</a>
    </div>
    <div>
      <a :href="url">Shorthand syntax directives</a>
    </div>
    <div>
      <a v-on:click="doSomething">With event on-click full syntax</a>
    </div>
    <div>
      <a @click="doSomething">With event on-click shorthand syntax</a>
    </div>
  </div>

  <h2>Dynamic Argument</h2>
  <div>
    <a v-bind:[attributeName]="url">Full syntax directives</a>
  </div>
  <div>
    <a :[attributeName]="url">Shorthand syntax directives</a>
  </div>
  <div>
    <a v-on:[eventName]="doSomething">With event on-click full syntax</a>
  </div>
  <div>
    <a @[eventName]="doSomething">With event on-click shorthand syntax</a>
  </div>

  <h3>Modifiers</h3>
  <form @submit.prevent="onSubmit">
    <input />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {
        seen: true,

        url: 'www.google.com',

        attributeName: 'href',
        eventName: 'focus'
      }
    },
    methods: {
      doSomething() {
        alert('Do something!!!')
      },
      onSubmit(payload: Event) {
        console.log(payload)
      }
    }
  })
</script>

<style scoped></style>
