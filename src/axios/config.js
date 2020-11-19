import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://a-mong-us.herokuapp.com/'
})

export default instance
