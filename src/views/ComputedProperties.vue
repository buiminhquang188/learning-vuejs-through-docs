<template>
  <div>
    <BasicExample />
    <ComputedCachingVsMethods />
    <WritableComputed />
  </div>
</template>

<script lang="ts">
  import BasicExample from '@/components/ComputedProperties/BasicExample.vue'
  import ComputedCachingVsMethods from '@/components/ComputedProperties/ComputedCachingVsMethods.vue'
  import WritableComputed from '@/components/ComputedProperties/WritableComputed.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    },
    components: { BasicExample, ComputedCachingVsMethods, WritableComputed }
  })
</script>

<style scoped></style>
