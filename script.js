const slider = document.getElementById("slider");
const root = document.documentElement;
  
slider.addEventListener("input", (e)=> {
  root.style.setProperty("--card-height", e.target.value + "px");
  document.getElementById("value").innerText = e.target.value + " px";
})

const perks = document.querySelectorAll(".ctn-perk");
const mainLayer = document.querySelector("#main-layer");

perks.forEach((e) => {
  e.addEventListener("mouseover", function (event) {
    mainLayer.classList.add("is-hovered");
    mainLayer.classList.add(e.dataset.perk);
  })
  e.addEventListener("mouseout", function (event) {
    mainLayer.classList.remove("is-hovered");
    mainLayer.classList.remove(e.dataset.perk);
  })
});

  