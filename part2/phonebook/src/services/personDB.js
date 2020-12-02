import axios from "axios";
const baseURL = '/api/persons';

const getAll = () => {
  const request = Person.find({}).then(person => {
    response.json(person);
  })
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
    getAll,create,deletePerson,update
}