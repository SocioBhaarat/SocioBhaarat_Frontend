import API from "./api";

export const getJobListings = () => {
  return API.get("/hiring/jobs").then(res => res.data);
};

export const submitApplication = (data) => {
  return API.post("/hiring/apply", data).then(res => res.data);
};