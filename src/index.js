import './style.css';
import axios from 'axios';
const submit = document.querySelector('#submit');
const signupForm = document.querySelector('#signupForm');
const email = document.querySelector('#useremail');
const userName = document.querySelector('#userfullname');
const msg = document.querySelector('#message');

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
    const { data } = await axios.post('https://glacial-bastion-79508.herokuapp.com/post', { val });
    if (data.msg === 'ok') {
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
