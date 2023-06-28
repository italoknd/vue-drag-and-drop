<template>
  <div>
    <IconMSWord class="icon-position" v-if="doctype?.endsWith('.docx')" />
    <IconMSExcel class="icon-position" v-if="doctype?.endsWith('.xlsx')" />
    <IconTextFile class="icon-position" v-if="doctype?.endsWith('.txt')" />
    <IconPDF class="icon-position" v-if="doctype?.endsWith('.pdf')"/>
  </div>
</template>

<script setup lang="ts">
import IconMSExcel from "../assets/icons/IconMSExcel.vue";
import IconMSWord from "../assets/icons/IconMSWord.vue";
import IconTextFile from "../assets/icons/IconTextFile.vue";
import IconPDF from "../assets/icons/IconPDF.vue"

const props = defineProps<{
  doctype: String,
}>();

const doctype = $computed<String>(()=>{
  return props.doctype
})
</script>
