import axios from "axios";

const api = axios.create({
  baseURL: "https://web1adonisjs.herokuapp.com",
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api