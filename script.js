const bgin = 3;
const saturation = 70;
let colorPicker;
let root;
let animate = true;
document.addEventListener("DOMContentLoaded", function () {
  colorPicker = document.querySelector("#color");
  root = document.documentElement;
  applyColor();

  colorPicker.addEventListener("input", watchColorPicker, false);

  function watchColorPicker(event) {
    applyColor();
  }
  window.requestAnimationFrame(animation);
});

const fps = 20;
function animation() {
  setTimeout(function () { //throttle requestAnimationFrame to 20fps
    if (colorPicker && animate) {
      colorPicker.value = (colorPicker.value * 1 + 1) % 360;
      applyColor()
    }
    window.requestAnimationFrame(animation)
  }, 1000 / fps)
}

function applyColor() {
  root.style.setProperty('--accent', `hsl(${colorPicker.value},${saturation}%,50%)`);
  root.style.setProperty('--bgdark', `hsl(${colorPicker.value},${saturation}%,${bgin}%)`);
  root.style.setProperty('--bglight', `hsl(${colorPicker.value},${saturation}%,${100 - bgin}%)`);
  root.style.setProperty('--secondary1', `hsl(${colorPicker.value * 1 + 120},${saturation}%,50%)`);
  root.style.setProperty('--secondary2', `hsl(${colorPicker.value * 1 - 120},${saturation}%,50%)`);
}

function save() {
  const text = `
  --accent: hsl(${colorPicker.value},${saturation}%,50%);
  --bgdark: hsl(${colorPicker.value},${saturation}%,${bgin}%);
  --bglight: hsl(${colorPicker.value},${saturation}%,${100 - bgin}%);
  --secondary1: hsl(${colorPicker.value * 1 + 120},${saturation}%,50%);
  --secondary2: hsl(${colorPicker.value * 1 - 120},${saturation}%,50%);`
  console.log(text);
  navigator.clipboard.writeText(text);
}
function play() {
  animate = !animate;
}