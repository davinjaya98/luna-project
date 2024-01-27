import http from "@utils/axios";

export const me = () => {
  return http.get("/users/me")
}

export const register = (email:string, password:string, passwordConfirm:string) => {
  return http.post("/users", {
    email, password, passwordConfirm
  }, { isPublic:true })
}