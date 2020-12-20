import { axios } from './axios';
//www.iana.org/assignments/media-types/application/vnd.api+json
const getData = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/photos');
};

getData().then((data) => console.log(data));
