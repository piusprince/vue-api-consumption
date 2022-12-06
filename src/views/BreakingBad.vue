<template>
  <div class="flex flex-wrap gap-3">
    <Card
      v-for="character in characters"
      :key="character.char_id"
      :image="character.img"
      :name="character.name"
      :occupation="character.occupation"
    >
      <div class="">
        <h1 class="text-lg font-bold">{{ name }}</h1>
        <p v-for="(job, index) in occupation" :key="job" class="text-sm">
          <span></span>
          {{ job }}<span v-if="index < occupation.length - 1">,</span>
        </p>
      </div>
    </Card>
  </div>
  <div class="flex gap-3 my-5">
    <button
      @click="page = page + 1"
      class="p-5 text-white bg-black rounded-lg w-28 hover:bg-gray-900"
    >
      Next
    </button>
    <button
      @click="page = page - 1"
      class="p-5 text-white bg-purple-400 rounded-lg w-28 hover:bg-purple-300"
    >
      Back
    </button>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";

const characters = ref(null);
const page = ref(0);

const response = await axios.get(
  "https://www.breakingbadapi.com/api/characters?limit=8"
);
console.log(response.data);

characters.value = response.data;

watch(page, async () => {
  const res = await axios.get(
    `https://www.breakingbadapi.com/api/characters?limit=8&offset=${
      page.value * 8
    }`
  );
  console.log(res.data);
  characters.value = res.data;
});
</script>

<style lang="scss" scoped></style>
