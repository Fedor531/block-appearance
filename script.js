const banners = document.querySelectorAll('.banner')

banners.forEach(b => {
  if (!localStorage.getItem(`${b.id}`)) {
    window.addEventListener('scroll', () => setBannerInStorage(b));
  }
})


function setBannerInStorage(banner) {
  if (
    window.innerHeight + window.scrollY >=
    banner.getBoundingClientRect().bottom + window.scrollY &&
    banner.getBoundingClientRect().top + window.scrollY >= window.scrollY
  ) {
    localStorage.setItem(`${banner.id}`, 'ok');
    console.log(`Баннер с id - ${banner.id} записан в localStorage`);
    window.removeEventListener('scroll', setBannerInStorage);
  }
}

// Отчистка localstorage перед уходом со страницы
window.onbeforeunload = function () {
  localStorage.removeItem('banner-1');
};