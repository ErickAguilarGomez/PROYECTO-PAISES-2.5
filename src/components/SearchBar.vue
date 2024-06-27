
<script>
export default {
  data() {
    return {
      searchTerm: ''
    };
  },
  methods: {
    handleInput() {
      this.$emit('search', this.searchTerm.trim());
    }
  }
};
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      class="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 "
      placeholder="Buscar país..."
      v-model="searchTerm"
      @input="handleInput"
    />
  </div>
</template>

