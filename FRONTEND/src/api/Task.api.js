import axios from 'axios'

export const createMail = (mail) => {
    return axios.post('http://localhost:8000/send_email/',mail)
}