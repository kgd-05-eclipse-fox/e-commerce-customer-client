import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-ykp.herokuapp.com'
})

export default instance
