<script setup>
import { useRoute } from 'vue-router';
import { useAsyncData } from 'nuxt/app';

const route = useRoute();

definePageMeta({
  validate: async (route) => {
    return true;
  },
});

const { data: subcategoryData } = await useAsyncData('subcategory', () =>
  fetchSubcategoryData(route.params.subcategory)
);

function fetchSubcategoryData(subcategory) {
  return Promise.resolve({
    /* your data */
  });
}
</script>

<template>
  <div>
    <h1>Category: {{ $route.params.subcategory }}</h1>
  </div>
</template>
