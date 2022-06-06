
// VARIABLES

let activateBtn = document.getElementById("themeSwitch");
let wholePage = document.querySelector("body");
let navBar = document.getElementById("navPrimar");
let headOne = document.querySelector("h1");

// BODY + NAVBAR

activateBtn.addEventListener('click', function () {
  wholePage.classList.toggle("bg-dark");
  navBar.classList.toggle("bg-dark");
  navBar.classList.toggle("navbar-dark");

});

// BUTTON NAME CHANGE

activateBtn.addEventListener('click', function () {
  if (activateBtn.innerText === "Activate Dark Theme") {
    activateBtn.innerText = "Activate Light Theme";
  } else {
    activateBtn.innerText = "Activate Dark Theme";
  };

});

// HEADER <H1>

activateBtn.addEventListener('click', function () {
  headOne.classList.toggle("text-white");
  if (headOne.innerText === "This is the Light theme") {
    headOne.innerText = "This is the Dark theme";
  } else {
    headOne.innerText = "This is the Light theme";
  };

});

//CARDS

let myCardBody = document.querySelectorAll(".card-body");
activateBtn.addEventListener('click', function () {
  for (let index = 0; index < myCardBody.length; index = index + 1) {
    myCardBody[index].classList.toggle("bg-dark")
  };
  for (let index = 0; index < myCardBody.length; index = index + 1) {
    myCardBody[index].classList.toggle("text-white")
  };
});

// TABLE

let myTrs = document.querySelectorAll("tr");
activateBtn.addEventListener('click', function () {

  for (let index = 0; index < myTrs.length; index = index + 1) {
    myTrs[index].classList.toggle("text-light")
  };

  document.getElementsByTagName("thead")[0].classList.toggle("text-light");
  document.getElementsByTagName("tbody")[0].classList.toggle("text-light");

});

//FOOTER

activateBtn.addEventListener('click', function () {
  document.getElementsByClassName("container-fluid")[1].classList.toggle("justify-content-end")
  document.getElementsByClassName("container-fluid")[1].classList.toggle("text-light")

});

//COLUMN ALIGNMENT

activateBtn.addEventListener('click', function () {
  document.getElementsByClassName("row")[0].classList.toggle("flex-column")
});

//REGULAR AND DOUBLE COLUMN

activateBtn.addEventListener('click', function () {
  document.getElementById("doublewd").classList.toggle("text-light");
  document.getElementById("regclm").classList.toggle("text-light");
});

//TEXT-MUTED

let myMutedText = document.querySelectorAll("#jos")
activateBtn.addEventListener('click', function () {
  for (let index = 0; index < myMutedText.length; index = index + 1) {
    myMutedText[index].classList.toggle("text-light")
  }
});