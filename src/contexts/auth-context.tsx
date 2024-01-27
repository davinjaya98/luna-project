import React, { useContext, useState, type PropsWithChildren, useEffect } from "react";
import { logout } from "../components/rest-api/auth";
import { me } from "../components/rest-api/users";

export interface User {
  _id: string;
  email: string;
  fullName: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
  balance: number;
}

interface Auth {
  isAuthenticated:boolean,
  user:User|undefined,
  unauthenticate:()=>void,
  authenticate:()=>void
}

const authContextDefaultValue:Auth = {
  isAuthenticated: false,
  user: undefined,
  unauthenticate: () => {},
  authenticate: () => {}
}

const AuthContext = React.createContext<Auth>(authContextDefaultValue);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User|undefined>(undefined);

  const unauthenticate = async () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      await logout();
    }
    setAuthenticated(false)
  }

  const authenticate = async() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      setAuthenticated(false);
      setUser(undefined);
      return;
    }
    const meResponse = await me();
    if (meResponse.status != 200) {
      setUser(undefined);
      setAuthenticated(false);
      return;
    } 
    const user = meResponse.data.data as User;
    setUser(user);
    setAuthenticated(true);
  }

  useEffect(()=>{
    authenticate();
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, unauthenticate, authenticate}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ():Auth => useContext(AuthContext);