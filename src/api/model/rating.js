import { coreApi } from "..";

export const addRating = (text, rating, id) => {
  const params = {
    text: text,
    rating: rating,
  };
  return coreApi.post(`/rating/${id}`, params);
};
