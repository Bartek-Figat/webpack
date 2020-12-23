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
