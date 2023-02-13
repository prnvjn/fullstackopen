/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    
  return axios.get(baseUrl)
}


const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deletation = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { 
    getAll:getAll, 
    create:create,
   deletation:deletation
  }