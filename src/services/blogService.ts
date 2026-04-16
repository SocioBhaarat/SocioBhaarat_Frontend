import API from "./api";

// Get all blogs
export const getAllBlogs = () => {
  return API.get("/blogs").then(res => res.data);
};

// Get single blog
export const getBlogByID = (id) => {
  return API.get(`/blogs/${id}`).then(res => res.data);
};