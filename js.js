const text = "Master Your Typing Skills.";
let index = 0;
const typingSpeed = 100;
const target = document.getElementById("typing-text");

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  }
}

window.onload = type;
