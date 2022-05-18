import { coreApi } from "..";

export const getAllSpeaker = () => {
  return coreApi.get("/speakers/");
};

export const getSpeakerById = (id) => {
  return coreApi.get(`/speakers/${id}`);
};
