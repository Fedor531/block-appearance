//  NodeList с баннерами
const banners = document.querySelectorAll('.banner');

function setBannersInStorage() {
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

  // Когда все баннеры просмотрены - удаляем слушатель
  if (
    [...banners].every((b) => {
      return Object.keys(localStorage).some((localBannerKey) => {
        return localBannerKey === b.id;
      });
    })
  ) {
    window.removeEventListener('scroll', setBannersInStorage);
  }
}

// Добавление слушателя
window.addEventListener('scroll', setBannersInStorage);

// Для тестов / Отчистка localStorage при перезагрузке страницы
/* window.onbeforeunload = function () {
  localStorage.clear();
}; */
