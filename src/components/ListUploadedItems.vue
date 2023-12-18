<template>
  <div class="uploaded-items" >
    <div
      v-for="({ name, dataURL }, index) in props.selectedFiles"
      :key="index"
      class="item-card"
    >
      <div class="files-container" :title="name">
        <div id="icon-box">
          <Icons v-if="doesNotIncludes(name)" :doctype="name" />
          <img class="miniature" v-else :src="dataURL" alt="Imagem..." />
        </div>
        <span>{{ name.length > 20 ? name.slice(0, 27) + "..." : name }}</span>
      </div>
      <div @click="removeFile(index)">
        <IconTrash id="trash-icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icons from "./Icons.vue";
import IconTrash from "../assets/icons/IconTrash.vue";
import { IFile } from "../interfaces/IFiles";

//PROPS, EMITS AND
const emit = defineEmits<{
  removeFile: [index: number];
}>();

const props = defineProps<{
  selectedFiles: IFile[];
}>();

const removeFile = (idx: number) => {
  emit("removeFile", idx);
};

//FUNCTIONS
const doesNotIncludes = (name: string): boolean => {
  let includes: boolean = false;

  if (
    !name?.includes(".png") &&
    !name?.includes(".jpg") &&
    !name?.includes(".jpeg") &&
    !name?.includes(".svg")
  ) {
    includes = true;
    return includes;
  }
};
</script>

<style scoped lang="scss">
.uploaded-items {
  border: 1px solid var(--secondary-bg-color);
  border-radius: 0.1125em;
  margin-top: 0.5em;
  max-height: 10.625em;
  overflow-y: scroll;

  .miniature {
    width: 1.7em;
    height: 1.7em;
    object-fit: contain;
    background-color: var(--main-bg-color-on-hover);
  }
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
