const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-ul");
burger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
