<script>
export default {
  props: {
    country: Object,
  },
  data() {
    return {
      showPopup: false,
    };
  },
};
</script>


<template>
  <div class="country-item cursor-pointer" @click="showPopup = true">
    <h2>{{ country.name }}</h2>

    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center">
      <div class="absolute inset-0 bg-gray-800 opacity-50"></div>


      <div class="relative bg-white rounded-lg p-4 max-w-md mx-auto">
        <p>Información adicional del país: {{ country.additionalInfo }}</p>
        <button @click="showPopup = false"
          class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Cerrar</button>
      </div>
    </div>
  </div>
</template>

