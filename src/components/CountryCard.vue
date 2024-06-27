<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
};
</script>

<template>
  <div class="country-card bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center h-64 w-64">
    <img :src="`https://flagsapi.com/${country.code}/shiny/64.png`" :alt="country.name" class="w-full h-32 object-contain mb-4">
    <h3 class="text-xl font-semibold mb-2">{{ country.name }}</h3>
    <p class="text-gray-600">{{ country.continent.name }}</p>
    <p class="text-gray-600">{{ country.emoji }}</p>
  </div>
</template>

