// src/Context/UserContext.tsx
import React, { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  username: string;
}

interface UserContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  login: () => false,
  logout: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // ✅ Dummy login check
    if (username && password) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
