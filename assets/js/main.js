/* SHOW MENU MOBILE */
const toggleBtn = document.getElementById('toggle');
const navElement = document.getElementById('nav');

toggleBtn.addEventListener('click', function () {
  navElement.classList.toggle('show');
});

/* HIDE MENU MOBILE */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    navElement.classList.remove('show');
    scrollSmooth(link);
  });
}

/* SCROLL SMOOTH */
function scrollSmooth(link) {
  const sectionId = link.getAttribute('href');
  document.querySelector(sectionId).scrollIntoView({
    behavior: 'smooth',
  });
}

/* ANIMATE GSAP */
gsap.from('.nav-logo', { opacity: 0, duration: 1, delay: 0.5, y: 25 });
gsap.from('.nav-item, .nav-toggle, .nav-button', { opacity: 0, duration: 1, delay: 0.5, y: 25 });
gsap.from('.description-title', { opacity: 0, duration: 1, delay: 0.5, y: 50 });
gsap.from('.description-paragraph', { opacity: 0, duration: 1, delay: 0.5, y: 50 });
gsap.from('.headphones', { opacity: 0, duration: 1, delay: 0.5, y: -40 });
gsap.from('.scroll-container', { opacity: 0, duration: 1, delay: 0.5, y: -25 });

/* ANIMATE SCROLLMAGIC */
const animate = new TimelineMax({ onUpdate: updatePercentage });

animate.from('.specification-title', {
  opacity: 0,
  y: 25,
  duration: 0.8,
  ease: 'expo.out',
  stagger: 0.4,
});
animate.from('.details-box', { opacity: 0, y: 25, duration: 0.6, ease: 'expo.out', stagger: 0.2 });
animate.from('.secondary-specifications-box', {
  opacity: 0,
  y: 25,
  duration: 0.8,
  ease: 'expo.out',
  stagger: 0.4,
});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: '.specification-title, .details-box, .secondary-specifications-box',
})
  .setTween(animate)
  .addTo(controller);

function updatePercentage() {
  animate.progress();
}
