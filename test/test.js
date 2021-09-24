const con = document.querySelector(".container-flex");
const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
document.body.style.textAlign = "center";

btn.addEventListener("click", () => {
  newColor = makeRanColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRanColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
