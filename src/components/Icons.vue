<template>
  <div>
    <MSWordIcon v-if="doctype?.includes('.doc')" class="icon-position" />
    <MSExcelIcon class="icon-position" v-if="doctype?.includes('.xlsx')" />
  </div>\
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import MSExcelIcon from "../assets/icons/MSExcelIcon.vue";
import MSWordIcon from "../assets/icons/MSWordIcon.vue";

const props = defineProps({
  doctype: {
    type: String,
  },
});

const { doctype } = props;
</script>

<style lang="scss" scoped></style>
