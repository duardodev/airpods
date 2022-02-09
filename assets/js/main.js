/* ANIMATE GSAP */
gsap.from('.nav-logo', { opacity: 0, duration: 1.2, delay: 0.5, y: 25 })
gsap.from('.nav-item, .nav-button', { opacity: 0, duration: 1.2, delay: 0.7, y: 25 })
gsap.from('.description-title', { opacity: 0, duration: 1.5, delay: 0.8, y: 50 })
gsap.from('.description-paragraph', { opacity: 0, duration: 1.5, delay: 1.1, y: 50 })
gsap.from('.airpod1', { opacity: 0, duration: 2, delay: 1.2, y: -40 })
gsap.from('.airpod2', { opacity: 0, duration: 2, delay: 1.4, y: 40 })
gsap.from('.scroll-container', { opacity: 0, duration: 1.5, delay: 1.6, y: 30 })

/* ANIMATE SCROLLMAGIC */
let animate = new TimelineMax({ onUpdate: updatePercentage })
let controller = new ScrollMagic.Controller()

animate.from('.details-img', { opacity: 0, y: 25 })
animate.from('.details-box', { opacity: 0, y: 25, duration: 1, ease: 'expo.out', stagger: 0.4 })

let scene = new ScrollMagic.Scene({
  triggerElement: '.details-box'
})
  .setTween(animate)
  .addTo(controller)

function updatePercentage() {
  animate.progress()
}
