const langSections = {
  ge: document.getElementById('content_ge'),
  en: document.getElementById('content_en'),
  ru: document.getElementById('content_ru'),
};

function showLang(lang) {
  for (let key in langSections) {
    langSections[key].style.display = key === lang ? 'block' : 'none';
  }
}

document.getElementById('btn_ge').addEventListener('click', () => showLang('ge'));
document.getElementById('btn_en').addEventListener('click', () => showLang('en'));
document.getElementById('btn_ru').addEventListener('click', () => showLang('ru'));

// По умолчанию показываем английский
showLang('en');
