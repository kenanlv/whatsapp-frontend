import axios from 'axios';

const instance = axios.create({
    baseURL:'https://whatsapp-backend-hero.herokuapp.com/'
});

export default instance;