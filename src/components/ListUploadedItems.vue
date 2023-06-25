<template>
  <div class="uploaded-items">
    <div
      v-for="({ name, type }, index) in selectedFiles"
      :key="index"
      class="item-card"
    >
      <span>{{ name }}</span>
      <Icons :doctype="type" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icons from "./Icons.vue";
import { IFile } from "../interfaces/IFiles";
import { PropType } from "vue";

const props = defineProps({
  selectedFiles: {
    type: Array as PropType<IFile[]>,
  },
});

const { selectedFiles } = props;
</script>

<style scoped>
.uploaded-items {
  border: 1px solid var(--secondary-bg-color);
  border-radius: 0.1125em;
  margin-top: 0.5em;
}
.item-card {
  border: 1px solid var(--secondary-bg-color);
  padding: 0.5em;
  margin: 1em auto;
  border-radius: 0.2em;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
