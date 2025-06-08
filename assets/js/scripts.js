const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let W, H;

function resize() {
  W = canvas.width = canvas.clientWidth;
  H = canvas.height = canvas.clientHeight;
}
window.addEventListener('resize', resize);
resize();

// const xOffset = W * 0.9; // 55% of the canvas width

class Star {
  constructor(initial = false) {
    this.reset(initial);
  }

  reset(initial = false) {
    this.angle = Math.random() * 2 * Math.PI;
    this.radius = initial ? Math.random() * Math.max(W, H) : 0;
    this.speed = 0.5 + Math.random() * 2.5;
    this.length = 2 + Math.random() * 3;
    this.size = 0.7 + Math.random() * 1.3;
    this.baseOpacity = 0.2 + Math.random() * 0.5;
  }

  update() {
    this.radius += this.speed;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
      this.reset();
    }
  }

  get x() {
  const xOffset = W * 0.75; // 55% from left (center + 5%)
  return xOffset + this.radius * Math.cos(this.angle);
}


  get y() {
    return H / 2 + this.radius * Math.sin(this.angle);
  }

  get distance() {
    return this.radius;
  }

  draw() {
    const fadeRadius = 250;
    let fadeFactor = this.distance / fadeRadius;
    if (fadeFactor > 1) fadeFactor = 1;

    const opacity = this.baseOpacity * fadeFactor * fadeFactor;
    const size = this.size * fadeFactor;

    const tailX = this.x - Math.cos(this.angle) * this.length * this.speed;
    const tailY = this.y - Math.sin(this.angle) * this.length * this.speed;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.lineWidth = size;
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}

const stars = [];
const maxStars = 600;

for (let i = 0; i < 100; i++) {
  stars.push(new Star(true));
}

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, W, H);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  if (stars.length < maxStars) {
    stars.push(new Star());
  }

  requestAnimationFrame(animate);
}

animate();


// Hero text typing animation

const phrases = [
  "Explore our world.",
  "Discover new horizons.",
  "Unleash your curiosity.",
  "Journey into the unknown.",
  "Experience the extraordinary."
];

const typedTextSpan = document.getElementById("typed-text");
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500; // Delay between current and next text
let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typedTextSpan.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    phraseIndex++;
    if (phraseIndex >= phrases.length) phraseIndex = 0;
    setTimeout(type, typingDelay);
  }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", function () {
  if (phrases.length) setTimeout(type, newTextDelay + 250);
});



window.addEventListener('scroll', function () {
    const header = document.getElementById('headerSection');
    const logo = document.getElementById('logoImage');

    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
      logo.src = 'assets/images/pipilika-logo-main-white.png'; // Change to white version
    } else {
      header.classList.remove('header-scrolled');
      logo.src = 'assets/images/pipilika-logo.png'; // Original logo
    }
  });

  // Menu open/close
  const menuToggle = document.getElementById('menuToggle');
  const fullScreenMenu = document.getElementById('fullScreenMenu');
  const closeMenu = document.getElementById('closeMenu');

  menuToggle.addEventListener('click', function () {
    fullScreenMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', function () {
    fullScreenMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });