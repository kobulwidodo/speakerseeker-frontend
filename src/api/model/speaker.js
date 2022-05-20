import { coreApi } from "..";

export const getAllSpeaker = (query = "") => {
  return coreApi.get(`/speakers/?name=${query}`);
};

export const getSpeakerById = (id) => {
  return coreApi.get(`/speakers/${id}`);
};

export const getImage = (path) => {
  return coreApi.getUri() + `/${path}`;
};
