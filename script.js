const text = "Web Developer | Student | Designer";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector("p").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();
