import API from "./api";
export const getAllBlogs = async () => {
  try {
    const response = await API.get("/blogs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await API.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
