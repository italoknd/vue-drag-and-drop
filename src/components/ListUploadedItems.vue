<template>
  <div class="uploaded-items" v-if="filesSelecteds.length > 0">
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
.uploaded-items{
  border: 1px solid var(--secondary-bg-color);
  border-radius: 1.8px;
  margin-top: .5em;
  
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
