import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = `http://localhost:5000`
//https://instruo-backend.onrender.com

axios.defaults.withCredentials = true;

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});

// export const loginAuth = (payload) => api.get("./auth/google", payload);
export const getEvents = () => api.get('/api/event');
export const createEvent = (payload) => api.post('/api/event', payload);
export const googleAuth = (code) => api.get(`/api/v1/auth/google?code=${code}`);
export const googleLogout = () => api.get(`/api/v1/auth/logout`);
export const googleStatus = () => api.get(`/user/status`);

export const getUsers = (email) => api.get('/user?email=' + email);