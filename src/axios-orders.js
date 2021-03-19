import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-661ad-default-rtdb.firebaseio.com/',

})

export default instance;