import store from './store';
import { incremented, decremented } from './type';
import { axios } from './axios';
import './style.css';

const state = store.getState();
console.log(state);

const imgContainer = document.querySelector('.img_container');
const next = document.querySelector('.left');
const prev = document.querySelector('.right');

const images = [
  'https://images.unsplash.com/photo-1560414239-dcdf7d8d0226?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1560419450-b7878dd01a24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1561969451-a51b1034d762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1525002304794-70f63a9a011a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1561119331-236e3bcf921c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1560720910-9eb473034a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1538745988171-000787dc77cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
];

function btnSlider(element) {
  const { clientWidth } = document.getElementById('container');
  element === next ? store.dispatch({ type: incremented }) : store.dispatch({ type: decremented });
  imgContainer.style.transform = `translate(${state.counter * clientWidth}px)`;
  next.style.display = state.counter < 0 ? 'flex' : 'none';
  prev.style.display = state.counter > 3 - images.length ? 'flex' : 'none';
}

next.addEventListener('click', () => {
  btnSlider(next);
});

prev.addEventListener('click', () => {
  btnSlider(prev);
});

const allIamges = images
  .map((item) => {
    return `<img class="container" id="container" src=${item} alt="images">`;
  })
  .join('');

imgContainer.innerHTML = allIamges;
