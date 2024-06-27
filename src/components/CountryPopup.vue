<script>
export default {
  props: {
    country: Object,
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="bg-white p-4 rounded-lg shadow-lg max-w-3xl max-h-3/4 overflow-auto"
    >
      <img
        :src="`https://flagsapi.com/${country.code}/shiny/64.png`"
        :alt="country.name"
        class="w-full h-32 object-contain mb-4"
      />
      <h2 class="text-lg font-semibold mb-2">{{ country.name }}</h2>

      <p><strong>Idioma:</strong> {{ country.languages[0].name }}</p>

      <p class="mb-2">
        <strong>Continente:</strong> {{ country.continent.name }}
      </p>
      <p><strong>Monedas:</strong> {{ country.currencies[0] }}</p>

      <div v-if="country.states && country.states.length">
        <label for="states" class="font-semibold mb-2"
          >Estados o Regiones:</label
        >
        <select
          id="states"
          class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option
            v-for="state in country.states"
            :key="state.name"
            :value="state.name"
          >
            {{ state.name }}
          </option>
        </select>
      </div>

      <button
        @click="closePopup"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Cerrar
      </button>
    </div>
  </div>
</template>


