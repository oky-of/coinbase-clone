const rawBaseUrl =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const normalizedBaseUrl = rawBaseUrl.replace(/\/+$/, "");

export const BASE_URL = /\/api$/.test(normalizedBaseUrl)
  ? normalizedBaseUrl
  : `${normalizedBaseUrl}/api`;

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return token
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-Type": "application/json",
      };
};

const handleResponse = async (response, errorMessage) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || errorMessage);
  }
  return response.json();
};

export const api = {
  auth: {
    register: async (userData) => {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(userData),
      });

      return handleResponse(response, "Registration failed");
    },

    login: async (credentials) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(credentials),
      });

      return handleResponse(response, "Login failed");
    },
  },

  user: {
    getProfile: async () => {
      const response = await fetch(`${BASE_URL}/user/profile`, {
        method: "GET",
        headers: getAuthHeaders(),
      });

      return handleResponse(response, "Failed to fetch profile");
    },
  },

  crypto: {
    getAll: async () => {
      const response = await fetch(`${BASE_URL}/crypto`);
      return handleResponse(response, "Failed to fetch crypto data");
    },

    getGainers: async () => {
      const response = await fetch(`${BASE_URL}/crypto/gainers`);
      return handleResponse(response, "Failed to fetch gainers data");
    },

    getNew: async () => {
      const response = await fetch(`${BASE_URL}/crypto/new`);
      return handleResponse(response, "Failed to fetch new crypto data");
    },

    addCrypto: async (cryptoData) => {
      const response = await fetch(`${BASE_URL}/crypto`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(cryptoData),
      });

      return handleResponse(response, "Failed to add crypto");
    },
  },
};
