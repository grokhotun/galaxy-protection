import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.section-01 h1', {
    scrollTrigger: {
      trigger: '.section-01',
      pin: true,
      scrub: true
    },
    scale: 3,
    transformOrigin: 'center center'
  });
  gsap.to('.section-02 h1', {
    scrollTrigger: {
      trigger: '.section-02',
      pin: true,
      scrub: true
    },
    scale: 3,
    transformOrigin: 'center center'
  });
  gsap.to('.section-03 h1', {
    scrollTrigger: {
      trigger: '.section-03',
      pin: true,
      scrub: true
    },
    scale: 3,
    transformOrigin: 'center center'
  });
  gsap.to('.section-04 h1', {
    scrollTrigger: {
      trigger: '.section-04',
      pin: true,
      scrub: true
    },
    scale: 3,
    transformOrigin: 'center center'
  });
  gsap.to('.section-05 h1', {
    scrollTrigger: {
      trigger: '.section-05',
      pin: true,
      scrub: true
    },
    scale: 3,
    transformOrigin: 'center center'
  });
  gsap.to('.section-06 h1', {
    scrollTrigger: {
      trigger: '.section-06',
      pin: true,
      scrub: true
    },
    scale: 3,
    transformOrigin: 'center center'
  });
});
