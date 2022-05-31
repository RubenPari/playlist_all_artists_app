<template>
  <div id="container">
    <strong>{{ name }}</strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Explore",
  props: {
    name: String,
  },
});
</script>
