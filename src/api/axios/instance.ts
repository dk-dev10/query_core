import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://u13-crm-test.gexarus.com/api/';

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
  }
);
