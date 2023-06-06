<template>
  <div>
    <h1>Using JavaScript Expressions</h1>
    <p>{{ number + 1 }}</p>
    <p>{{ ok ? 'Yes' : 'No' }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
    <div :id="`list-${id}`">Binding id</div>

    <h2>Expressions Only</h2>
    <HighLightJS
      language="js"
      code="
      // this is a statement, not an expression:
      {{ var a =1 }}
      // flow control won't work either, use ternary expressions
      {{ if (ok) { return message } }}
    "
    />
    <h2>Calling Functions</h2>
    <time :title="toTitleDate(date)" :datetime="date"> {{ formatDate(date) }}</time>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

export default defineComponent({
  components: {
    HighLightJS: hljsVuePlugin.component
  },
  setup() {
    return {
      number: 0,
      ok: true,
      message: 'Quang',
      id: crypto.randomUUID(),

      date: new Date().toString()
    }
  },

  methods: {
    toTitleDate(date: string): string {
      return date
    },

    formatDate(date: string): string {
      return date
    }
  }
})
</script>

<style scoped></style>
