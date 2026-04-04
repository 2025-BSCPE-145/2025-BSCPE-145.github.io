// DARK MODE
function toggleMode() {
  document.body.classList.toggle("light");
}

// TYPING EFFECT
const text = "Engineering Student | Web Developer | Blogger";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();
