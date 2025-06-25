import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
})

export const fetchProducts = () => API.get('/products')
export const fetchProductById = (id) => API.get(`/products/${id}`)
export const updateUserProfile = (id, data) => API.patch(`/users/${id}`, data)
export const fetchUserProfile = (id) => API.get(`/users/${id}`)