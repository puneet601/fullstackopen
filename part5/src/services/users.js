import axios from 'axios'
const baseUrl = '/api/users'
const signin = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
  }
const getBlogs = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  // console.log(response.data)
  return response.data
}
export default { signin,getBlogs }