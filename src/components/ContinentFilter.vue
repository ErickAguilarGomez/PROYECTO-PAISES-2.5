<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      options: [
        "Todos",
        "África",
        "North America",
        "South America",
        "Asia",
        "Europe",
        "Oceanía",
      ],
    };
  },
  methods: {
    selectContinent(continent) {
      this.$emit("filter", continent);
    },
    closeFilter() {
      this.$emit("close");
    },
  },
};
</script>


<template>
  <div
    class="continent-filter p-4 bg-gray-100 rounded-lg shadow-md"
    v-if="show"
  >
    <ul class="space-y-2">
      <li
        v-for="option in options"
        :key="option"
        class="cursor-pointer px-4 py-2 bg-white hover:bg-gray-200 rounded"
        @click="selectContinent(option)"
      >
        {{ option }}
      </li>
    </ul>
    <button
      @click="closeFilter"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
    >
      Cerrar
    </button>
  </div>
</template>

