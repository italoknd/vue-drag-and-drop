<script setup lang="ts">
import { IFile } from "../interfaces/IFiles";

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
      type: firstFile.type,
    });
  }

  console.log(filesSelecteds);
};
</script>

<template>
  <div id="dropzone-main-container" @click="openFileExplorer()">
    <div id="dashed">
      <input
        type="file"
        ref="inputRef"
        style="display: none"
        @change="selectOrDropFile"
      />
      <div v-if="filesSelecteds.length > 0">
        <div v-for="({name, type, size}, index) in filesSelecteds" :key="index" class="item-card" >
          <p>{{ name }}</p>
        </div>
      </div>
      <p><strong>Escolha um arquivo</strong> ou arraste pra cá!</p>
    </div>
  </div>
</template>

<style scoped>
/*MAIN CONTAINERS*/
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

/*CARD ITEM*/
.item-card{
  border: 1px solid #30466e;
  padding: .5em;
  margin: .5em;
  border-radius: .4em;
}
</style>
