const btnGe = document.getElementById('btn_ge');
const btnEn = document.getElementById('btn_en');
const ge = document.getElementById('content_ge');
const en = document.getElementById('content_en');

btnGe.addEventListener('click', () => { ge.style.display = 'block'; en.style.display = 'none'; });
btnEn.addEventListener('click', () => { ge.style.display = 'none'; en.style.display = 'block'; });

// По умолчанию — English
en.style.display = 'block';
