<template>
  <h2>Binding With Components</h2>
  <MyComponent class="baz boo" />
  <p>{ class="bar boo" }</p>

  <MyComponent :class="{ active: isActive }"
    >Component with class binding</MyComponent
  >
  <p>{{ $data }}</p>

  <MyComponentUsingAttrs class="baz" />
  <p>{ class="baz" }</p>

  <br />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MyComponent from './MyComponent.vue'
  import MyComponentUsingAttrs from './MyComponentUsingAttrs.vue'

  export default defineComponent({
    data() {
      return {
        isActive: true
      }
    },
    setup() {
      return {}
    },
    components: {
      MyComponent,
      MyComponentUsingAttrs
    }
  })
</script>

<style scoped></style>
