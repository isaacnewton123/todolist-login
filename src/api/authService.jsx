import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fidodating.xyz/",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const register = (userData) => {
  return apiClient.post("/api/register", userData);
};

export const login = async (credentials) => {
  const response = await apiClient.post("api/login", credentials);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const getTask = () => {
  return apiClient.get("/api/tasks");
};

export const addTask = (item) => {
  return apiClient.post("/api/tasks", item);
};

export const editComplete = (id, item) => {
  return apiClient.put(`/api/tasks/${id}`, item);
};

export const deleteTask = (id) => {
  return apiClient.delete(`/api/tasks/${id}`);
};

export const getCategory = () => {
  return apiClient.get("/api/categories");
};

export const deleteCategory = (id) => {
  return apiClient.delete(`/api/categories/${id}`);
};

export const postCategory = (category) => {
  return apiClient.post("/api/categories", category);
};

export const logout = () => {
  localStorage.removeItem("token");
};
