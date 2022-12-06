<template>
  <main class="container m-auto">
    <h1 class="text-red-500">Hello</h1>
    <Hero />
    <!-- <Suspense>
      <template #default>
        <BreakingBad />
      </template>
      <template #fallback>
        <div>
          <p>Loading</p>
        </div>
      </template>
    </Suspense> -->
    <RickAndMorty />

    <!-- // Cache components
    <Component :is:"isBreakingBad ? BreakingBad: RickAndMorty"/> -->
  </main>
</template>

<script setup>
import BreakingBad from "./views/BreakingBad.vue";
import RickAndMorty from "./views/RickAndMorty.vue";
import Hero from "./components/Hero.vue";
</script>

<style lang="scss" scoped></style>
