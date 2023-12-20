<script setup lang="ts">
import { IFile } from "../interfaces/IFiles";
import ListUploadedItems from "./ListUploadedItems.vue";

//VARIABLES
let selectedFiles = $ref<IFile[]>([]);
let inputRef = $ref<any>(null);

//FUNCTIONS
const openFileExplorer = () => {
  inputRef.click();
};

const selectOrDropFile = (event: Event) => {
  const file = event.target as HTMLInputElement;

  if (file.files && file.files.length > 0) {
    const firstFile: File = file.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      selectedFiles.push({
        name: firstFile.name,
        size: firstFile.size,
        type: firstFile.type,
        dataURL: e.target?.result
      });

      sendData(selectedFiles);
    };

    reader.readAsDataURL(firstFile);
  }
};

const removeFile = (idx: number) => {
  selectedFiles.splice(idx, 1);
  sendData(selectedFiles);
};

//DRAG N DROP HANDLER FUNCTIONS
const handleDrop = (event: DragEvent) => {
  if (event?.dataTransfer && event.dataTransfer?.files.length) {
    handleFiles(event.dataTransfer.files[0]);
  }
};

const handleFiles = (file: any) => {
  const reader: FileReader = new FileReader();

  reader.onload = (e: ProgressEvent<FileReader>) => {
    selectedFiles.push({
      name: file.name,
      size: file.size,
      type: file.type,
      dataURL: e.target?.result
    });

    sendData(selectedFiles);
  };

  reader.readAsDataURL(file);
};
const sendData = (data: IFile[]) => {
  emits("getData", data);
};

//EMITS & PROPS
const emits = defineEmits<{
  (e: "getData", selectedFiles: IFile[]): void;
}>();

const props = defineProps({
  placeholder: {
    type: String,
    default: "Escolha um arquivo ou arraste pra cá!"
  }
});
</script>

<template>
  <div id="main-container">
    <div
      id="dropzone-main-container"
      @click="openFileExplorer()"
      @drop.prevent="handleDrop"
      @dragover.prevent
    >
      <input
        type="file"
        ref="inputRef"
        style="display: none"
        @change="selectOrDropFile"
      />
      <p>
        <strong>{{ props.placeholder }}</strong>
      </p>
    </div>
    <ListUploadedItems
      v-if="selectedFiles.length > 0"
      @removeFile="removeFile"
      :selectedFiles="selectedFiles"
    />
  </div>
</template>

<style scoped>
/*MAIN CONTAINER*/
#main-container {
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
