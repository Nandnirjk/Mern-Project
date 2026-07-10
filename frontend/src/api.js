import axios from 'axios';

// const API = axios.create({
//   baseURL: 'https://mern-project-883z.onrender.com', // Aapke Node.js backend ka URL
// });
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// Yeh middleware har request ke sath JWT token automatic bhej dega (agar login hai toh)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;