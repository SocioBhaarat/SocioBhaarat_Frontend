import API from "./api";

export const submitContactForm = (data) => {
  return API.post("/contact", data).then(res => res.data);
};