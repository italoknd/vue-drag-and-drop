<template>
  <div>
    <IconMSWord class="icon-position" v-if="msWordTypeHandler()" />
    <IconMSExcel class="icon-position" v-if="doctype?.endsWith('.xlsx')" />
    <IconMSPowerPoint class="icon-position" v-if="doctype?.endsWith('.pptx')" />
    <IconTextFile class="icon-position" v-if="doctype?.endsWith('.txt')" />
    <IconPDF class="icon-position" v-if="doctype?.endsWith('.pdf')" />
    <IconMusic class="icon-position" v-if="audioTypeHandler()" />
  </div>
</template>

<script setup lang="ts">
import IconMSExcel from "../assets/icons/IconMSExcel.vue";
import IconMSWord from "../assets/icons/IconMSWord.vue";
import IconMSPowerPoint from "../assets/icons/IconMSPowerPoint.vue";
import IconTextFile from "../assets/icons/IconTextFile.vue";
import IconPDF from "../assets/icons/IconPDF.vue";
import IconMusic from "../assets/icons/IconAudio.vue";

const props = defineProps<{
  doctype: String;
}>();

const doctype = $computed<String>(() => {
  return props.doctype;
});

const audioTypeHandler = () => {
  if (doctype?.endsWith(".mp3") || doctype?.endsWith(".mp4")) {
    return true;
  }
};

const msWordTypeHandler = () => {
  if (doctype?.endsWith(".docx") || doctype?.endsWith(".doc")) {
    return true;
  }
};
</script>
