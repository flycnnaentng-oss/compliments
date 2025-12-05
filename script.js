const compliments = [
  "You're an amazing human being! 🌟",
  "Your smile can brighten anyone's day! 😊",
  "You have a brilliant mind! 🧠",
  "Your creativity is inspiring! 🎨",
  "You are capable of achieving great things! 💪"
];

const btn = document.getElementById("generateBtn");
const display = document.getElementById("compliment");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  display.textContent = compliments[randomIndex];
});
