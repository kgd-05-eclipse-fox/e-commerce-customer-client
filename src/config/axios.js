import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-tori.herokuapp.com'
})

export default instance
