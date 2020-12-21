import { axios } from './axios';
import './style.css';

const getData = async (element) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return response.map((data) => {
      const image = document.createElement('img');
      image.classList.add('container-images');
      console.log(data.url);
      image.src = `${data.url}`;
      element.appendChild(image);
    });
  } catch (error) {
    console.log(error);
  }
};

function component() {
  const element = document.createElement('div');
  element.classList.add('container');
  const header = document.createElement('h1');
  header.classList.add('container-header');
  header.innerHTML = `Loading...`;
  element.appendChild(header);
  // getData(element);
  return element;
}

document.body.appendChild(component());
