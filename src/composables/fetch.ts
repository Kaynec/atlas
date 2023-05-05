import { createFetch } from "@vueuse/core";

const baseURL = "http://217.218.179.15:8000/";
export const useMyFetch = createFetch({
  baseUrl: baseURL,
});
