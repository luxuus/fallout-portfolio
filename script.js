const slider = document.getElementById("slider");
const root = document.documentElement;
  
slider.addEventListener("input", (e)=> {
  root.style.setProperty("--card-height", e.target.value + "px");
  document.getElementById("value").innerText = e.target.value + " px";
})

  