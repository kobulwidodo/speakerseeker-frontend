import { coreApi } from "..";

export const getUser = () => {
  return coreApi.get(`/me`);
};

export const loginUser = (email, password) => {
  const param = {
    email: email,
    password: password,
  };
  return coreApi.post("/auth/signin", param);
};

export const registerUser = (organization_name, email, password) => {
  const param = {
    email: email,
    organization_name: organization_name,
    password: password,
  };
  return coreApi.post("/auth/signup", param);
};
