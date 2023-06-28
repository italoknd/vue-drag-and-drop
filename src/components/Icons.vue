<template>
  <div>
    <IconMSWord  v-if="doctype?.endsWith('.docx')" class="icon-position" />
    <IconMSExcel class="icon-position" v-if="doctype?.endsWith('.xlsx')" />
    <IconTextFile class="icon-position" v-if="doctype?.endsWith('.txt')" />
  </div>
</template>

<script setup lang="ts">
import IconMSExcel from "../assets/icons/IconMSExcel.vue";
import IconMSWord from "../assets/icons/IconMSWord.vue";
import IconTextFile from "../assets/icons/IconTextFile.vue";

const props = defineProps<{
  doctype: String,
}>();

const doctype = $computed<String>(()=>{
  return props.doctype
})
</script>
