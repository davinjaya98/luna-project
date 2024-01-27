import http from "@utils/axios";

export const me = () => {
  return http.get("/users/me")
}