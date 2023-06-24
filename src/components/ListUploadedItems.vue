<template>
  <div v-if="props.filesSelecteds.length > 0">
    <div
      v-for="({ name }, index) in filesSelecteds"
      :key="index"
      class="item-card"
    >
      <span>{{ name }}</span>
      <MSWordIconVue class="icon-position" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MSWordIconVue from "../assets/icons/MSWordIcon.vue";
import { PropType } from "vue";
import { IFile } from "../interfaces/IFiles";
const props = defineProps({
  filesSelecteds: Array as PropType<IFile[]>
})
</script>

<style scoped>
.item-card {
  border: 1px solid var(--main-text-color);
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 0.2em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: red;
}</style>
