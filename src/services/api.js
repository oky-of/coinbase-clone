export const BASE_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
  return {
    "Content-Type": "application/json",
  };
};

export const api = {
  auth: {
    register: async (userData) => {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Registration failed");
      }
      return response.json();
    },
    login: async (credentials) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Login failed");
      }
      return response.json();
    },
  },
  user: {
    getProfile: async () => {
      const response = await fetch(`${BASE_URL}/user/profile`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to fetch profile");
      }
      return response.json();
    },
  },
  crypto: {
    getAll: async () => {
      const response = await fetch(`${BASE_URL}/crypto`, {
        method: "GET",
      });
      if (!response.ok) throw new Error("Failed to fetch crypto data");
      return response.json();
    },
    getGainers: async () => {
      const response = await fetch(`${BASE_URL}/crypto/gainers`, {
        method: "GET",
      });
      if (!response.ok) throw new Error("Failed to fetch gainers data");
      return response.json();
    },
    getNew: async () => {
      const response = await fetch(`${BASE_URL}/crypto/new`, {
        method: "GET",
      });
      if (!response.ok) throw new Error("Failed to fetch new crypto data");
      return response.json();
    },
    addCrypto: async (cryptoData) => {
      const response = await fetch(`${BASE_URL}/crypto`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(cryptoData),
      });
      if (!response.ok) throw new Error("Failed to add crypto");
      return response.json();
    },
  },
};
