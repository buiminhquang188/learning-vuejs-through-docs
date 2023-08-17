<template>
  <h2>v-if</h2>
  <p v-if="awesome">Vue is awesome!</p>
  <br />
  <hr />

  <h2>v-else</h2>
  <div>
    <button @click="awesome = !awesome">Toggle</button>
    <p v-if="awesome">Vue is awesome!</p>
    <p v-else>Oh no 😢</p>
  </div>
  <br />
  <hr />

  <h2>v-else-if</h2>
  <div v-if="types[type] === 'A'">A</div>
  <div v-else-if="types[type] === 'B'">B</div>
  <div v-else-if="types[type] === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  <button @click="handleChangeType">Change type</button>
  <br />
  <hr />

  <h2>
    v-if on
    <code>template</code>
  </h2>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
  <button @click="handleChangeOk">Change template</button>
  <br />
  <hr />

  <h2>v-show</h2>
  <div v-show="okShow">Hello!</div>
  <button @click="handleChangeOkShow">Change template</button>
  <br />
  <hr />

  <div>
    {{ $data }}
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        ok: true,
        okShow: true,
        type: 0,
        types: ['A', 'B', 'C'],
        awesome: true
      }
    },
    methods: {
      handleChangeType() {
        this.type = Math.ceil(Math.random() * 4 - 1)
      },
      handleChangeOk() {
        this.ok = !this.ok
      },
      handleChangeOkShow() {
        this.okShow = !this.okShow
      }
    },
    setup() {
      return {}
    }
  })
</script>

<style scoped></style>
