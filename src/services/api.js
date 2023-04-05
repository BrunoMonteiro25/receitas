import axios from 'axios'

//para rodar o server da api no navegador: json-server --watch -d 180 --host 192.168.15.2 db.json

const api = axios.create({
  baseURL: 'http://192.168.15.2:3000',
})

export default api
