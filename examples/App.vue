<template>
  <div style="height: 300px">
    <rich-text @change="change"></rich-text>
  </div>
  <div>{{ content }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RichText from '../packages'

export default defineComponent({
  name: 'App',
  components: {
    RichText
  },
  setup() {
    const content = ref('')
    const change = (text: string) => {
      content.value = text
    }
    return {
      change,
      content
    }
  }
})
</script>
