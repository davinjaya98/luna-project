import http from "@utils/axios";

export const logout = () => {
  return http.post("/auth/logout");
}

export const login = (email:string, password:string) => {
  return http.post("/auth/login", { email, password }, { isPublic:true });
}