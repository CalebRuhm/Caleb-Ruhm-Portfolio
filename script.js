(function () {
  const contact = document.querySelector("#contact");
  const close = document.querySelector("#button");
  const form = document.querySelector(".form")
  const navBar = document.querySelector(".navcontainer");

  const nameInput = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const success = document.querySelector("#success");
  const errorNodes = document.querySelectorAll(".error");
  const submit = document.querySelector(".center");

// Opens and closes contact page.
  contact.addEventListener("click", () => {
    form.classList.remove("hidden");
    form.classList.add("fade-in");
    navBar.classList.add("hidden");
  })

  close.addEventListener("click", () => {
    form.classList.add("hidden");
    navBar.classList.remove("hidden");
  })

  // Checks if inputs are filled out.
 submit.addEventListener("click", () => {

    clearMessages();
  let errorFlag = false;

    if(nameInput.value.length < 1) {
      errorNodes[0].innerHTML = "Name cannot be blank";
      nameInput.classList.add("error-border");
      errorFlag = true;
    }

    if(!emailIsValid(email.value)){
      errorNodes[1].innerHTML = "Invalid email address";
      email.classList.add("error-border");
      errorFlag = true;
    }

    if(message.value.length < 1) {
      errorNodes[2].innerHTML = "Please write a message!";
      message.classList.add("error-border");
      errorFlag = true;
    }

    if(!errorFlag) {
      success.innerHTML =`Thank you!`;
    }

  })

  // Clears error messages if input conditions are met
  function clearMessages() {
    for(let i = 0; i < errorNodes.length; i++) {
      errorNodes[i].innerHTML = "";
    }
    success.innerHTML = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");

  }

// Checks if email is a valid email address
  function emailIsValid(email) {
    let symbols = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return symbols.test(email);
  }

  // Submits Form
const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

form.addEventListener("submit", handleSubmit);

})();