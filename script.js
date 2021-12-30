(function () {
  const contact = document.querySelector("#contact");
  const close = document.querySelector("#button");

  console.log(contact);

  const form = document.querySelector(".form")
  const nameInput = document.querySelector("#entry\\.244138998");
  const email = document.querySelector("#entry\\.1893553492");
  const message = document.querySelector("#entry\\.304084745");
  const success = document.querySelector("#success");
  const errorNodes = document.querySelectorAll(".error");
  const submit = document.querySelector(".center");


// Opens and closes contact page.
  contact.addEventListener("click", () => {
    form.classList.remove("hidden");
  })

  close.addEventListener("click", () => {
    form.classList.add("hidden");
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


})();