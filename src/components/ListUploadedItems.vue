<template>
  <div class="uploaded-items">
    <div
      v-for="({ name }, index) in selectedFiles"
      :key="index"
      class="item-card"
    >
      <div class="files-container" :title="name">
        <div id="icon-box">
          <Icons :doctype="name" />
        </div>
        <span>{{ name.length > 20 ? name.slice(0, 30) + "..." : name }}</span>
      </div>
      <IconTrash id="trash-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icons from "./Icons.vue";
import IconTrash from "../assets/icons/IconTrash.vue";
import { IFile } from "../interfaces/IFiles";
import { PropType } from "vue";

const props = defineProps({
  selectedFiles: {
    type: Array as PropType<IFile[]>,
  },
});

const { selectedFiles } = props;
</script>

<style scoped lang="scss">
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

.files-container {
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 0.25em;
  }
}

#trash-icon {
  cursor: pointer;
}
</style>
