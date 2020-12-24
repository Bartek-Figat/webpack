function handleSignupFormSubmit(e) {
  e.preventDefault();
  const formDataEntries = new FormData(signupForm).entries();
  const { email, password } = Object.fromEntries(formDataEntries);
  const emailErrorMessage = validateEmail(email);
  const passowrdErrorMessage = validatePassword(password);
  if (!emailErrorMessage) {
    const emailErrorMessageElement = document.querySelector('.email .dkh-form-field__messages');
    emailErrorMessageElement.innerText = emailErrorMessage;
  }
  if (passowrdErrorMessage) {
    const passwordErrorMessageElement = document.querySelector(
      '.password .dkh-form-field__messages'
    );
    passwordErrorMessageElement.innerText = passowrdErrorMessage;
  }
}
function validatePassword(password, minlength) {
  if (!password) return 'Password is required';
  if (password.length < minlength) {
    return `Please enter a password that's at least ${minlength} characters long`;
  }
  const hasCapitalLetter = /[A-Z]/g;
  if (!hasCapitalLetter.test(password)) {
    return 'Please use at least one capital letter.';
  }
  const hasNumber = /\d/g;
  if (!hasNumber.test(password)) {
    return 'Please use at least one number.';
  }
  return '';
}
function validateEmail(email) {
  if (!email) return 'Email is required';
  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return 'Please enter a valid email';
  }
  return '';
}

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
  element.appendChild(header);
  getData(element);
  return element;
}

document.body.appendChild(component());

// import store from './store';
// import { inc, dec } from './action';

// const state = store.getState();
// console.log(state.counter);

// const imgContainer = document.querySelector('.img_container');
// const next = document.querySelector('.left');
// const prev = document.querySelector('.right');

// const images = [
//   'https://images.unsplash.com/photo-1560414239-dcdf7d8d0226?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1560419450-b7878dd01a24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1561969451-a51b1034d762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1525002304794-70f63a9a011a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1561119331-236e3bcf921c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1560720910-9eb473034a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1538745988171-000787dc77cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// ];

// function btnSlider(element) {
//   const { clientWidth } = document.getElementById('container');
//   element === next ? store.dispatch(inc()) : store.dispatch(dec());
//   imgContainer.style.transform = `translate(${state.counter * clientWidth}px)`;
//   next.style.display = state.counter < 0 ? 'flex' : 'none';
//   prev.style.display = state.counter > 3 - images.length ? 'flex' : 'none';
// }

// next.addEventListener('click', () => {
//   btnSlider(next);
// });

// prev.addEventListener('click', () => {
//   btnSlider(prev);
// });

// const allIamges = images
//   .map((item) => {
//     return `<img class="container" id="container" src=${item} alt="images">`;
//   })
//   .join('');

// imgContainer.innerHTML = allIamges;
