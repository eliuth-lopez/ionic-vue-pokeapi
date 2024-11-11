import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const pokeapi: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

pokeapi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token: string | null = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token ?? ""}`;
  }
  return config;
});

pokeapi.interceptors.response.use(
  //Intercepta la respuesta
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    const { data } = response;
    return data;
  },
  //Intercepta los errores
  (error: AxiosError) => {
    if (error.status === 401) {
      console.log("unauthorized");
    }
    return Promise.reject(error);
  }
);

export default pokeapi;
