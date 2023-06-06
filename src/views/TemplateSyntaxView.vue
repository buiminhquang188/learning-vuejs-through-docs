<script setup lang="ts">
import AttributeBindings from '@/components/TemplateSyntax/AttributeBindings.vue'
import DirectivesSyntax from '@/components/TemplateSyntax/DirectivesSyntax.vue'
import RawHtml from '@/components/TemplateSyntax/RawHtml.vue'
import TextInterpolationVue from '@/components/TemplateSyntax/TextInterpolation.vue'
import UsingJavaScriptExpressionsVue from '@/components/TemplateSyntax/UsingJavaScriptExpressions.vue'
</script>

<template>
  <div>
    <TextInterpolationVue />
    <RawHtml />
    <AttributeBindings />
    <UsingJavaScriptExpressionsVue />
    <DirectivesSyntax />
  </div>
</template>

<style scoped></style>
