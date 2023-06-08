<template>
  <div>
    <DeclaringReactiveState />
    <DeclaringMethods />
  </div>
</template>

<script lang="ts">
  import DeclaringMethods from '@/components/ReactivityFundamentals/DeclaringMethods.vue'
  import DeclaringReactiveState from '@/components/ReactivityFundamentals/DeclaringReactiveState.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    },
    components: { DeclaringReactiveState, DeclaringMethods }
  })
</script>

<style scoped></style>
