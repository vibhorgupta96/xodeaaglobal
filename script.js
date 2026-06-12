/* ============================================================
   Xodeaa Global — Interactions
   ============================================================ */
(function () {
  'use strict';

  var header = document.getElementById('header');
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  var backToTop = document.getElementById('backToTop');

  /* --- Sticky header state --- */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (backToTop) backToTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile nav --- */
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Scroll reveal --- */
  var revealTargets = document.querySelectorAll(
    '.section-head, .about-copy, .why-card, .service-card, .step, .industry-col, .reach-card, .vm-card, .trust-item, .contact-info, .contact-form'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- Animated counters --- */
  var counters = document.querySelectorAll('.stat-num');
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var dur = 1400, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); co.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* --- Footer year --- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
