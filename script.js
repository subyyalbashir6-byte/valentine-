const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const funnyTexts = [
  "Are you sure? 😜",
  "Think again 👀",
  "You can’t escape love 💘",
  "No is not an option 😏",
  "Try harder 😆"
];

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*20 - 10}deg)`;
  noBtn.style.opacity = Math.random() * 0.5 + 0.5;

  message.textContent =
    funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
}

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yaaay! 💕 You just made my day!<br>Happy Valentine’s Day 💐";
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}
