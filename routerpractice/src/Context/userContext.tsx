import { createContext, useContext, useState } from "react";
import { AuthContextUser, AuthUser } from "../types/types";

const AuthContext = createContext<AuthContextUser>({
  user: { id: "", name: "" },
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = () => {
    setUser({ id: "1", name: "vishakha" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
