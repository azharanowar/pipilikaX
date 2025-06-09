



window.addEventListener('scroll', function () {
    const header = document.getElementById('headerSection');
    const logo = document.getElementById('logoImage');
    const spans = document.querySelectorAll('.menu-toggle span');

    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
      logo.src = 'assets/images/pipilika-logo-main-white.png'; // Change to white version
      document.querySelector('.menu-toggle span').style.color = 'white !important';

      spans.forEach(span => {
        span.classList.add('hamburger-white');
      });
    } else {
      header.classList.remove('header-scrolled');
      logo.src = 'assets/images/pipilika-logo.png'; // Original logo

      spans.forEach(span => {
        span.classList.remove('hamburger-white');
      });
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


  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

// Disable on mobile or tablet
if (window.innerWidth > 768) {
  document.addEventListener('mousemove', e => {
    dot.style.top = ring.style.top = `${e.clientY}px`;
    dot.style.left = ring.style.left = `${e.clientX}px`;
  });
} else {
  // Optionally hide cursor on mobile
  dot.style.display = 'none';
  ring.style.display = 'none';
}