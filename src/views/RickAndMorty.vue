<template>
  <div class="flex flex-wrap gap-3">
    <Card
      v-for="character in characters"
      :key="character.id"
      :image="character.image"
      :name="character.name"
    >
      <p>{{ character.location.name }}</p>
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
import { ref, watch, onMounted } from "vue";
import Card from "../components/Card.vue";

const characters = ref(null);
const page = ref(1);

onMounted(async () => {
  const response = await axios.get(
    //rick and morty api
    "https://rickandmortyapi.com/api/character"
  );
  console.log(response.data);

  characters.value = response.data.results;
  // console.log(characters.value.results.name);

  watch(page, async () => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page.value}`
    );
    characters.value = res.data.results;
    console.log(characters.value);
  });
});
</script>

<style lang="scss" scoped></style>
