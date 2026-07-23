// Portfolio interactions — kept intentionally tiny.
(function () {
  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // Add a hairline under the nav once the page is scrolled
  var nav = document.querySelector('.site-nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 8) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
