import { createFetch } from "@vueuse/core";

const baseURL = "http://127.0.0.1:8000/";
export const useMyFetch = createFetch({
  baseUrl: baseURL,
});
