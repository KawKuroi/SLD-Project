import axios from 'axios'

export const getAllObjects = () => {
    return axios.get('http://localhost:8000/testapp/api/')
}