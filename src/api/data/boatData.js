import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getAllBoats = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/boats.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getAllBoats;
