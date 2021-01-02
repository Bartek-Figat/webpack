import axios from 'axios';
import validator from 'validator';

import './style.css';

const submit = document.querySelector('#submit');
const signupForm = document.querySelector('#signupForm');
const email = document.querySelector('#useremail');
const userName = document.querySelector('#userfullname');
const msg = document.querySelector('#message');
const success = document.querySelector('.success');
const errorEmail = document.querySelector('.useremail');
const errorUserFullname = document.querySelector('.userfullname');
const errorMessage = document.querySelector('.message');

success.style.display = 'none';
errorEmail.style.display = 'none';
errorUserFullname.style.display = 'none';
errorMessage.style.display = 'none';

submit.addEventListener('click', async (e) => {
  try {
    const formDataEntries = new FormData(signupForm).entries();
    const { userfullname, useremail, message } = Object.fromEntries(formDataEntries);
    const val = {
      userfullname,
      useremail,
      message,
    };
    e.preventDefault();

    const emailErrorMessage = validateEmail(email.value);
    const userNameErrorMessage = validateName(userName.value);
    const errorMessage = validateMessage(msg.value);

    if (emailErrorMessage || userNameErrorMessage || errorMessage) {
      return true;
    }
    const { data } = await axios.post('https://glacial-bastion-79508.herokuapp.com/', { val });

    if (data.status === 422) {
      email.value = '';
      userName.value = '';
      msg.value = '';
    } else {
      success.style.display = 'flex';
      setTimeout(function () {
        success.style.display = 'none';
      }, 5000);
      email.value = '';
      userName.value = '';
      msg.value = '';
    }
  } catch (error) {
    if (error) {
      email.value = '';
      userName.value = '';
      msg.value = '';
    }
  }
});

function validateEmail(useremail) {
  if (validator.isEmail(useremail)) {
    errorEmail.style.display = 'none';
  } else {
    errorEmail.style.display = 'block';
  }
  return '';
}

function validateName(name) {
  if (validator.isEmpty(name)) {
    errorUserFullname.style.display = 'block';
  } else {
    errorUserFullname.style.display = 'none';
  }
  return '';
}

function validateMessage(message) {
  if (validator.isEmpty(message)) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
  return '';
}

window.addEventListener('scroll', function () {
  let nav = document.querySelector('.nav');
  let windowPosition = window.scrollY > 2;
  nav.classList.toggle('scrolling-active', windowPosition);
});
