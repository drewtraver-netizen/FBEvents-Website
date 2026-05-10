// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
    if (!wasOpen) { item.classList.add('open'); btn.classList.add('open'); }
  });
});
