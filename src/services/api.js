// import axios from 'axios';

// // API Base URL and Headers
// const apiClient = axios.create({
//   baseURL: 'https://mobile-phones2.p.rapidapi.com',
//   headers: {
//     'x-rapidapi-key': '12453ee069msh88b36d08a15480cp1631efjsnbf576920dbe3',
//     'x-rapidapi-host': 'mobile-phones2.p.rapidapi.com'
//   }
// });

// // Get List of Brands
// export const listBrands = async () => {
//   try {
//     const response = await apiClient.get('/brands');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching brands:', error);
//     throw error;
//   }
// };

// // Get Phones by Brand
// export const getPhonesByBrand = async (brandId) => {
//   try {
//     const response = await apiClient.get(`/${encodeURIComponent(brandId)}/phones`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching phones for brand ${brandId}:`, error);
//     throw error;
//   }
// };

// // Get Phone Details
// export const getPhoneDetails = async (phoneId) => {
//   try {
//     const response = await apiClient.get(`/phones/${encodeURIComponent(phoneId)}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching phone details for ID ${phoneId}:`, error);
//     throw error;
//   }
// };

// // Search Phones
// export const searchPhones = async (query) => {
//   try {
//     const response = await apiClient.get('/search', {
//       params: { q: query }
//     });
//     return response.data;
//   } catch (error) {
//     console.error(`Error searching phones with query "${query}":`, error);
//     throw error;
//   }
// };

// src/services/api.js
import axios from 'axios';

const API_KEY = '12453ee069msh88b36d08a15480cp1631efjsnbf576920dbe3';
const API_HOST = 'mobile-phones2.p.rapidapi.com';

export const listBrands = async () => {
  const options = {
    method: 'GET',
    url: 'https://mobile-phones2.p.rapidapi.com/brands',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPhonesByBrand = async (brandId) => {
  const options = {
    method: 'GET',
    url: `https://mobile-phones2.p.rapidapi.com/${brandId}/phones`,
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPhoneDetails = async (id) => {
  const options = {
    method: 'GET',
    url: `https://mobile-phones2.p.rapidapi.com/phones/${id}`,
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchPhones = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://mobile-phones2.p.rapidapi.com/search',
    params: { query },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};