let opt = document.querySelector(".hamburger");
let menu = document.querySelector(".ham");
let res = document.querySelectorAll(".li");

opt.addEventListener("click", () => {
  opt.classList.toggle("active");
  menu.classList.toggle("active");
});
res.forEach((n) =>
  n.addEventListener("click", () => {
    opt.classList.remove("active");
    menu.classList.remove("active");
  })
);
