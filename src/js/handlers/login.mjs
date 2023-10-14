import {login} from "../api/auth/login.mjs"

export function setLoginFormListener() {
    const form = document.querySelector('#login-form');

    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
  
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
       
        //Send it to the API
        login(profile); 
      })
    }
}








/*const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

async function doFetch(url, customOptions = {}) {
  try{
    const options = {
      headers: {
        "Content-Type": "application/json",
  },
  ...customOptions,
};
const response = await fetch(url, options);
const json = await response.json();
return json;
  } catch(error) {
    console.log(error);
  }
} 

async function handleSubmit(event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  const userData = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
  };

  const data = await doFetch(API_SIGNUP_URL, options);
  console.log(data);
}

loginForm.addEventListener('submit', handleSubmit);*/


/*//---------------- Registers user

/**
 * API call that registers the user
 * @param {string} url 
 * @param {any} userData
 * ```js
 * registerUser(registerUrl, userToRegister);
 
async function registerUser(url, userData) {
  try{
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch(error) {
    console.log(error);
  }
}

const userToRegister = {
  name: 'test_user_2',
  email: 'test_user_2@noroff.no',
  password: 'silver987',
};

const registerUrl = `${API_BASE_URL}/social/auth/register`;


//registerUser(registerUrl, userToRegister);*/