import axios from "axios";
const baseURL = "http://localhost:3003/persons";
//const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then(response => response.data);
};
const create = newObject =>{
    const req=axios
    .post(baseURL,newObject)
    .then(response => response.data)
    return req.then(response => response.data)
}
const update = (id, newObject) => {
  return axios.put(`${baseURL}/${id}`, newObject)
}
const deletePerson = id => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request.then(response => response.data);
  };
  
export default {
    getAll:getAll,
    create:create,
    deletePerson:deletePerson,
    update:update
};