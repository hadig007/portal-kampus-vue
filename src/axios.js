import axios from "axios";
import './store'

axios.defaults.baseURL = 'http://kampus.hadig.web.id/backend/public/api'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')