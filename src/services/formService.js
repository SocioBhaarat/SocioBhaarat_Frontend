import API from "./api";

export const submitContactForm = async (formData) => {
  try {
    const response = await API.post("/contact", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
