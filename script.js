// Typing effect
const text = "Welcome to my digital world";
let index = 0;
const speed = 100;

function typeText() {
  const element = document.getElementById("typed-text");
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}
typeText();

// Star canvas
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.005
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
    star.alpha += star.speed;
    if (star.alpha <= 0 || star.alpha >= 1) {
      star.speed = -star.speed;
    }
  });
  requestAnimationFrame(drawStars);
}

createStars(150);
drawStars();
