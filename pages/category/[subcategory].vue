<script setup>
import { useRoute } from 'vue-router';
import { useAsyncData } from 'nuxt/app';

const route = useRoute();

definePageMeta({
  validate: async (route) => {
    return true;
  },
});

const {
  data: subcategoryData,
  pending,
  error,
} = await useAsyncData('subcategory', () =>
  fetchSubcategoryData(route.params.subcategory)
);

async function fetchSubcategoryData(subcategory) {
  const { data } = await useFetch('/api/products');

  const matchingCategory = Object.entries(data.value).find(
    ([category]) => category.toLowerCase() === subcategory.toLowerCase()
  );

  return matchingCategory ? { [matchingCategory[0]]: matchingCategory[1] } : {};
}
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-8">
      {{ route.params.subcategory }}
    </h1>

    <div v-if="pending" class="text-xl">Loading...</div>
    <div v-else-if="error" class="text-xl text-red-500">
      Error: {{ error.message }}
    </div>
    <div v-else-if="Object.keys(subcategoryData).length === 0" class="text-xl">
      No products found for this subcategory.
    </div>
    <div v-else>
      <section
        v-for="(category, categoryName) in subcategoryData"
        :key="categoryName"
        class="mb-12"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="product in category"
            :key="product.id"
            class="border rounded-lg p-4 shadow-md"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 mb-2">
              {{ product.desc.slice(0, 100) }}...
            </p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold">${{ product.price }}</span>
              <span
                v-if="product.oldPrice"
                class="text-sm line-through text-gray-500"
                >${{ product.oldPrice }}</span
              >
            </div>
            <div v-if="product.sizes" class="mt-2">
              <span class="text-sm text-gray-600"
                >Sizes: {{ product.sizes.join(', ') }}</span
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
