import API from "./api";


export const getJobListings = async () => {
  try {
    const response = await API.get("/hiring/jobs");
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const submitApplication = async (applicationData) => {
  try {
    const response = await API.post("/hiring/apply", applicationData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
