import {
  IAuthContextData,
  IResponseUser,
  IUser,
} from "interface/user.interface";
import React, { createContext, useContext, useState, useCallback } from "react";
import api from "services/api";
import { apiUser } from "services/data";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<IResponseUser>({} as IResponseUser);

  const signIn = useCallback(async ({ email, password }: IUser) => {
    const response = await apiUser.login({ email, password });
    const { token, user } = response.data;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setAuth({ token, user });

    localStorage.setItem("@web1:token", token);
    localStorage.setItem("@web1:user", JSON.stringify(user));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
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
