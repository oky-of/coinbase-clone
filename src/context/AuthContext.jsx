import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import { AuthContext } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAuthenticatedUser = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return null;
    }

    try {
      return await api.user.getProfile();
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      localStorage.removeItem("token");
      return null;
    }
  }, []);

  const checkAuth = useCallback(async () => {
    const nextUser = await fetchAuthenticatedUser();
    setUser(nextUser);
    setLoading(false);
    return nextUser;
  }, [fetchAuthenticatedUser]);

  useEffect(() => {
    let isActive = true;

    const syncAuth = async () => {
      const nextUser = await fetchAuthenticatedUser();

      if (!isActive) {
        return;
      }

      setUser(nextUser);
      setLoading(false);
    };

    syncAuth();

    return () => {
      isActive = false;
    };
  }, [fetchAuthenticatedUser]);

  const login = async (email, password) => {
    const data = await api.auth.login({ email, password });
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data;
  };

  const register = async (name, email, password) => {
    const data = await api.auth.register({ name, email, password });
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
