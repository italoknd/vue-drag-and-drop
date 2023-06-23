<script setup lang="ts">
import { IFile } from "../interfaces/IFiles";

//VARIABLES
let fileSelected = $ref<IFile>({
  name: '',
  size: 0,
  type: ''
})

//FUNCTIONS
const selectFile = () => {
  const inputFile: HTMLInputElement = document.createElement("input");
  inputFile.type = "file";
  inputFile.style.display = "none";

  inputFile.addEventListener("change", (event: Event) => {
    const file = event.target as HTMLInputElement;

    if (file.files && file.files.length > 0) {
      const firstFile: File = file.files[0];
      fileSelected = firstFile
    }
  });

  document.body.appendChild(inputFile);
  inputFile.click();
  document.body.removeChild(inputFile);
};
</script>

<template>
  <div id="dropzone-main-container" @click="selectFile()">
    <div id="dashed">
      <p><strong>Escolha um arquivo</strong> ou arraste pra cá!</p>
    </div>
  </div>
</template>

<style scoped>
#dropzone-main-container {
  width: 25em;
  height: 25em;
  background: #cbdce1;
  border-radius: 8px;
  padding: 0.6em;
  transition: 0.3s;
}

#dropzone-main-container:hover {
  background: #afbfc4;
}

#dashed {
  border: 2px dashed #30466e;
  width: 24.5em;
  height: 24.5em;
  border-radius: 0.5em;
  cursor: pointer;
}

#dashed > p {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #0f2d5f;
  margin: 48% 0;
}
</style>
