import axios from 'axios';

export const registerUser = (data) => {
    return axios.post('/api/user/register', data);
  }; //Change data