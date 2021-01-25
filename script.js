const banners = document.querySelectorAll('.banner');

window.addEventListener('scroll', () => setBannersInStorage(banners));

function setBannersInStorage(banners) {
  banners.forEach((b) => {
    if (
      window.innerHeight + window.scrollY >=
        b.getBoundingClientRect().bottom + window.scrollY &&
      b.getBoundingClientRect().top + window.scrollY >= window.scrollY &&
      !localStorage.getItem(`${b.id}`)
    ) {
      localStorage.setItem(`${b.id}`, 'ok');
      console.log(`Баннер с id - ${b.id} записан в localStorage`);
    }
  });
}
