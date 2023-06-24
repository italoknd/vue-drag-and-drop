<script setup lang="ts">
import { IFile } from "../interfaces/IFiles";
import ListUploadedItems from "./ListUploadedItems.vue";

//VARIABLES
let filesSelecteds = $ref<IFile[]>([]);
let inputRef = $ref<any>(null);

//FUNCTIONS
const openFileExplorer = () => {
  inputRef.click();
};

const selectOrDropFile = (event: Event) => {
  const file = event.target as HTMLInputElement;

  if (file.files && file.files.length > 0) {
    const firstFile: File = file.files[0];

    filesSelecteds.push({
      name: firstFile.name,
      size: firstFile.size,
      type: firstFile.type
    });
  }

  console.log(filesSelecteds);
};
</script>

<template>
  <div id="main-container">
    <div id="dropzone-main-container" @click="openFileExplorer()">
      <input
        type="file"
        ref="inputRef"
        style="display: none"
        @change="selectOrDropFile"
      />
      <p><strong>Escolha um arquivo</strong> ou arraste pra cá!</p>
    </div>
    <ListUploadedItems :filesSelecteds="filesSelecteds" />
  </div>
</template>

<style scoped>
/*MAIN CONTAINER*/
#main-container{
  width: 25em;
  height: 25em;
}
#dropzone-main-container {
  background: var(--main-bg-color);
  border: 1.8px dashed var(--secondary-bg-color);
  border-radius: 3px;
  padding: 0.6em;
  cursor: pointer;
  transition: 0.3s;
}

#dropzone-main-container:hover {
  background: var(--main-bg-color-on-hover);
}

#dropzone-main-container > p {
  text-align: center;
  color: var(--main-text-color);
  margin: 48% 0;
}
</style>
