import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://sainapa-store.herokuapp.com'
})

export default instance
