//CHEF CARDS

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');

    } else {
      entry.target.classList.remove('show');
    }
  });
});

const chefCard1 = document.querySelectorAll('.chef');
chefCard1.forEach((el) =>
  observer.observe(el));

const chefCard2 = document.querySelectorAll('.chef2');
chefCard2.forEach((el) =>
  observer.observe(el));

const chefCard3 = document.querySelectorAll('.chef3');
chefCard3.forEach((el) =>
  observer.observe(el));