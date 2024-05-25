//QUALITY COUNTER


const countersEl = document.querySelectorAll(".counter");
big();

function big() {
  countersEl.forEach((counterEl) => {

    incrrementCounter();

    function incrrementCounter() {
      let incrrement = +counterEl.innerText;

      if (incrrement < 100) {
        incrrement = incrrement + 5;
        counterEl.innerText = incrrement;
        setTimeout(incrrementCounter, 50)
      }
    }

  });
};

//HANBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navi-container");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

