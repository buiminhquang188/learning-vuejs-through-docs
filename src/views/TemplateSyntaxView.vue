<script setup lang="ts">
import AttributeBindings from '@/components/TemplateSyntax/AttributeBindings.vue'
import RawHtml from '@/components/TemplateSyntax/RawHtml.vue'
import TextInterpolationVue from '@/components/TemplateSyntax/TextInterpolation.vue'
</script>

<template>
  <div>
    <TextInterpolationVue />
    <RawHtml />
    <AttributeBindings />
  </div>
</template>

<style scoped></style>
