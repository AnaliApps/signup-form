const form = document.querySelector("#form");
const email = document.getElementById("mail");
const fname = document.querySelector("#firstname");
const lname = document.querySelector("#lastname");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const emailError = email.nextElementSibling;
const fnameError = fname.nextElementSibling;
const lnameError = lname.nextElementSibling;
const phoneError = phone.nextElementSibling;
const passError = password.nextElementSibling;
const confirmPassError = confirmPassword.nextElementSibling;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegExp = /^(?:\d{10}|(?:\d{3}[-. ])(?:\d{3}[-. ])\d{4})$/;
const passRegExp = /^(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?=.*[@$!&])(?!.*\s).{9,15}$/;
// alert("Hello")
window.addEventListener("load", () => {
    // Here, we test if the field is empty (remember, the field is not required)
    // If it is not, we check if its content is a well-formed email address.
    const isEmailValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isEmailValid ? "valid" : "invalid";
  });

email.addEventListener("input", () => {
    const isEmailValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isEmailValid) {
      email.className = "valid";
      emailError.textContent = "";
      emailError.className = "error";
    } else {
      email.className = "invalid";
    }
  });
fname.addEventListener("input",()=>{
    const isFnameValid = fname.value.length >= 2;
       if(isFnameValid){
           fname.className = "valid";
           fnameError.textContent = "";
           fnameError.className = "error";
       }else{
           fname.className = "invalid";
       }
})

lname.addEventListener("input",()=>{
  const isLnameValid = lname.value.length >= 3;
  if(isLnameValid){
    lname.className = "valid";
    lnameError.textContent = "";
    lnameError.className = "error";
  }else{
    lname.className = "invalid";
  }
})

phone.addEventListener("input",()=>{
  const isPhoneValid = phoneRegExp.test(phone.value);
  if(isPhoneValid){
    phone.className = "valid";
    phoneError.textContent = "Expected 0708345678 or 070-834-5678";
    phoneError.className = "error";
  }else{
    phone.className="invalid";
  }
})
password.addEventListener("input",()=>{
  const isPassValid = passRegExp.test(password.value);
  if(isPassValid){
    password.className = "valid";
    passError.textContent = ""
    passError.className = "error"
  }else{
    password.className = "invalid";
  }
})
confirmPassword.addEventListener("input",()=>{
  const isPassValid = passRegExp.test(confirmPassword.value);
  if(isPassValid){
    confirmPassword.className = "valid";
    confirmPassError.textContent = ""
    confirmPassError.className = "error"
  }else{
    confirmPassword.className = "invalid";
  }
})
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isEmailValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (!isEmailValid) {
      email.className = "invalid";
      emailError.textContent = "I expect an email, address";
      emailError.className = "error active";
    } else {
      email.className = "valid";
      emailError.textContent = "";
      emailError.className = "error";
    }

    const isFnameValid = fname.value.length >= 2;
    if (!isFnameValid) {
      fname.className = "invalid";
      fnameError.textContent = "I expected a name > 4";
      fnameError.className = "error active";
    } else {
      fname.className = "valid";
      fnameError.textContent = "";
      fnameError.className = "error";
    }

    const isLnameValid = lname.value.length >= 3;
    if(!isLnameValid){
      lname.className = "invalid";
      lnameError.textContent = "I expected name  of > 3 chars."
      lnameError.className = "error active";
    }else{
      lname.className = "valid";
      lnameError.textContent="";
      lnameError.className = "error";
    }

    const isPhoneValid = phoneRegExp.test(phone.value);
    if(!isPhoneValid){
      phone.className = "invalid";
      phoneError.textContent = "Expected 0708345678 or 070-834-5678";
      phoneError.className = "error active";
    }else{
      phone.className="valid";
      phoneError.textContent="";
      phoneError.className="error";
    }

    const isPassValid = passRegExp.test(password.value)
    if(!isPassValid){
      password.className = "invalid";
      passError.textContent = "Password should be > 9 and < 15 characters and should include capital letter,special characters like !";
      passError.className = "error active";
    }else{
      password.className = "valid";
      passError.textContent = "";
      passError.className = "error";
    }

    const isConfirmPassValid = passRegExp.test(confirmPassword.value);
    if(!isConfirmPassValid){
      confirmPassword.className = "invalid";
      confirmPassError.textContent = "Password should be > 9 and < 15 characters and should include capital letter,special characters like !";
      confirmPassError.className = "error active";
    }else{
      confirmPassword.className = "valid";
      confirmPassError.textContent = "";
      confirmPassError.className = "error";
    }
    if(password.value !== confirmPassword.value){
      confirmPassError.textContent="Password mismatch";
      confirmPassError.className = "error active";
    }
  });
  
