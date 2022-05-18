import axios from "axios";

const BASE_URL = "https://speakerseeker.herokuapp.com/api";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("tg_token")}` || "",
  },
});
