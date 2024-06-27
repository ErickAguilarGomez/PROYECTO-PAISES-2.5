// api/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://countries.trevorblades.com/',
});

export async function getCountries() {
  try {
    const response = await api.post('', {
      query: `
      query {
        countries {
          code
          name
          emoji
          continent {
            name
          }
          languages {
            name
          }
          currencies
          states {
            name
          }
        }
      }      
      `
    });
    return response.data.data.countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
}


// Función para filtrar países por continente
export async function getCountriesByContinent(continent) {
  try {
    const response = await api.post('', {
      query: `
        query {
          countries(filter: { continent: { eq: "${continent}" } }) {
            code
            name
            emoji
            continent {
              name
            }
          }
        }
      `
    });
    return response.data.data.countries;
  } catch (error) {
    console.error(`Error fetching countries in ${continent}:`, error);
    throw error;
  }
}
