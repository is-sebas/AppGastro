import axios from 'axios';

const ApiGastro = axios.create({
    
    //192.168.100.6 wifihome
    baseURL: 'http://192.168.100.6:3000/api',    //ip del server del backend
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

})

export { ApiGastro}








