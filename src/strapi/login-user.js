import axios from 'axios';
import { URL } from '../utils/url';

async function loginUser({ email, password }) {
  const response = await axios
    .post(`${URL}/auth/local`, {
      identifier: email,
      password,
    })
    .catch((error) => console.log(error.response));
  return response;
}

export default loginUser;
