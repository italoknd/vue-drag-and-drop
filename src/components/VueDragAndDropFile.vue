<script setup lang="ts"></script>

<template>
  <div id="dropzone-main-container">
    <div id="dashed">
      <p><strong>Escolha um arquivo</strong> ou arraste pra cá!</p>
    </div>
  </div>
</template>

<style scoped>
#dropzone-main-container {
  width: 25em;
  height: 25em;
  background: #CBDCE1;
  border-radius: 8px;
  padding: .6em;
  transition: .3s;
}

#dropzone-main-container:hover{
  background: #afbfc4;
}

#dashed {
  border: 2px dashed #30466e;
  width: 24.5em;
  height: 24.5em;
  border-radius: 8px;
  cursor: pointer;
}

#dashed > p {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #0f2d5f;
  margin: 48% 0;
}
</style>
