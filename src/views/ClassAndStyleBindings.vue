<template>
  <div class="content">
    <BindingHTMLCasses />
    <hr />
    <BindingInlineStyles />
  </div>
</template>

<script lang="ts">
  import BindingHTMLCasses from '@/components/ClassAndStyleBindings/BindingHTMLCasses/BindingHTMLCasses.vue'
  import BindingInlineStyles from '@/components/ClassAndStyleBindings/BindingInlineStyles/BindingInlineStyles.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    },
    components: { BindingHTMLCasses, BindingInlineStyles }
  })
</script>

<style scoped>
  .content {
    margin-bottom: 200px;
  }
</style>
