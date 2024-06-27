<script>
import { ref, onMounted, watch } from 'vue';
import { getCountries } from '../api/api';
import CountryCard from '../components/CountryCard.vue';
import CountryPopup from '../components/CountryPopup.vue';
import SearchBar from '../components/SearchBar.vue';
import ContinentFilter from '../components/ContinentFilter.vue';

export default {
  components: {
    CountryCard,
    CountryPopup,
    SearchBar,
    ContinentFilter,
  },
  setup() {
    const countries = ref([]);
    const selectedCountry = ref(null);
    const searchTerm = ref('');
    const selectedContinent = ref('');
    const showContinentFilter = ref(false); 
    const filteredCountries = ref([]);

    const fetchCountries = async () => {
      try {
        countries.value = await getCountries();
        applyFilters();
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    const showCountryPopup = (country) => {
      selectedCountry.value = country;
    };

    const closeCountryPopup = () => {
      selectedCountry.value = null;
    };

    const handleSearch = (term) => {
      searchTerm.value = term;
      applyFilters();
    };

    const handleFilter = (continent) => {
      selectedContinent.value = continent;
      applyFilters();
      showContinentFilter.value = false; 
    };

    const applyFilters = () => {
      let filtered = countries.value;

      if (searchTerm.value.trim() !== '') {
        filtered = filtered.filter(country =>
          country.name.toLowerCase().includes(searchTerm.value.trim().toLowerCase())
        );
      }

      if (selectedContinent.value !== '') {
        if (selectedContinent.value === 'Todos') {
          filtered = countries.value; 
        } else {
          filtered = filtered.filter(country =>
            country.continent.name === selectedContinent.value
          );
        }
      }

      filteredCountries.value = filtered;
    };

    watch(countries, applyFilters);

    onMounted(fetchCountries);

    return {
      countries,
      showCountryPopup,
      selectedCountry,
      closeCountryPopup,
      searchTerm,
      selectedContinent,
      handleSearch,
      handleFilter,
      filteredCountries,
      showContinentFilter,
    };
  },
};
</script>


<template>
  <div class="home lg:ml-40">
    <div class="flex mb-4 justify-center"> 
      <SearchBar @search="handleSearch" class="mr-2" />

      <button @click="showContinentFilter = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Filtrar por Continente
      </button>
    </div>

    <div v-if="showContinentFilter" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-4 rounded">
        <ContinentFilter :show="showContinentFilter" @filter="handleFilter" @close="showContinentFilter = false" />
      </div>
    </div>

    <div v-if="filteredCountries.length > 0" class="hola flex flex-wrap">
      <div v-for="country in filteredCountries" :key="country.code" >
        <CountryCard :country="country" @click="showCountryPopup(country)" />
      </div>
    </div>
    <div v-else>
      <p class="text-center mt-4">No se encontraron países.</p>
    </div>

    <CountryPopup v-if="selectedCountry" :country="selectedCountry" @close="closeCountryPopup" />
  </div>
</template>

