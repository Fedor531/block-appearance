//  NodeList с баннерами
const banners = document.querySelectorAll('.banner');

function setBannersInStorage() {
  banners.forEach((node) => {
    if (
      window.innerHeight + window.scrollY >=
      node.getBoundingClientRect().bottom + window.scrollY &&
      node.getBoundingClientRect().top + window.scrollY >= window.scrollY &&
      !localStorage.getItem(`${node.id}`)
    ) {
      localStorage.setItem(`${node.id}`, 'ok');
      console.log(`Баннер с id - ${node.id} записан в localStorage`);
    }
  });
}

// Добавление слушателя
if (banners.length > 0) {
  window.addEventListener('scroll', setBannersInStorage);
}

// Для тестов / Отчистка localStorage при перезагрузке страницы
window.onbeforeunload = function () {
  localStorage.clear();
};
