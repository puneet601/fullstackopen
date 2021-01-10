import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
const config = { headers: { Authorization: token } }

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newObject, auth) => {
  setToken(auth)
  const config = { headers: { Authorization: token } }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}
const update = async (id, newObject, auth) => {
 const response = await axios.put(`${baseUrl}/${id}`, newObject,config)
  return  response.data
}

export default {
  getAll, create, setToken,update}