<template>
  <div class="h-64 p-4 w-72">
    <div class="w-64 h-36">
      <img
        :src="image"
        alt=""
        class="object-cover w-full h-full overflow-hidden bg-center bg-cover rounded-lg"
      />
    </div>
    <div class="">
      <h1 class="text-lg font-bold">{{ name }}</h1>
      <!-- <p v-for="(job, index) in occupation" :key="job" class="text-sm">
        <span></span>
        {{ job }}<span v-if="index < occupation.length - 1">,</span>
      </p> -->
    </div>
    <slot> </slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { image, name, occupation } = defineProps([
  "image",
  "name",
  "occupation",
]);
</script>

<style lang="scss" scoped></style>
