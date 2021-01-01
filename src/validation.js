import axios from 'axios';
import validator from 'validator';

import './style.css';

const submit = document.querySelector('#submit');
const loading = document.querySelector('#loading');
const signupForm = document.querySelector('#signupForm');
const email = document.querySelector('#useremail');
const userName = document.querySelector('#userfullname');
const msg = document.querySelector('#message');
const success = document.querySelector('.success');

loading.style.display = 'none';
success.style.display = 'none';
// https://glacial-bastion-79508.herokuapp.com/

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
    const { data } = await axios.post('http://localhost:8080/', { val });
    console.log(data);

    console.log(validator.isEmail(useremail));
    console.log(validator.isEmpty(userfullname));
    console.log(validator.isEmpty(message));

    if (data.msg !== 'ok') {
      email.value = '';
      userName.value = '';
      msg.value = '';
    } else {
      success.style.display = 'flex';
      setTimeout(function () {
        success.style.display = 'none';
      }, 6000);
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

window.addEventListener('scroll', function () {
  let nav = document.querySelector('.nav');
  let windowPosition = window.scrollY > 2;
  nav.classList.toggle('scrolling-active', windowPosition);
});
