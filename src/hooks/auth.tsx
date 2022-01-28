import {
  IAuthContextData,
  IResponseUser,
  IUser,
} from "interface/user.interface";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import api from "services/api";
import { apiUser } from "services/data";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<IResponseUser>({} as IResponseUser);

  const signIn = useCallback(async ({ email, password }: IUser) => {
    const response = await apiUser.login({ email, password });
    const { token, user, expiresAt } = response.data;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setAuth({ token, user, expiresAt });

    localStorage.setItem("@web1:token", token);
    localStorage.setItem("@web1:expiresAt", expiresAt);
    localStorage.setItem("@web1:user", JSON.stringify(user));
  }, []);

  const removeLocalStorage = useCallback(async () => {
    localStorage.removeItem("@web1:token");
    localStorage.removeItem("@web1:expiresAt");
    localStorage.removeItem("@web1:user");
  }, []);

  const signOut = useCallback(async () => {
    setAuth({} as IResponseUser);
    await removeLocalStorage();
    delete api.defaults.headers.common.Authorization;
  }, [removeLocalStorage]);

  const loadUserStorageData = useCallback(async () => {
    const token = localStorage.getItem("@web1:token");
    const expiresAt = localStorage.getItem("@web1:expiresAt");
    const user = localStorage.getItem("@web1:user");
    if (token && user && expiresAt) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setAuth({ token, user: JSON.parse(user), expiresAt });
    }
  }, []);

  useEffect(() => {
    loadUserStorageData();
  }, [loadUserStorageData]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loadUserStorageData,
        token: auth.token,
        user: auth.user,
        expiresAt: auth.expiresAt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser utilizado com o AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
