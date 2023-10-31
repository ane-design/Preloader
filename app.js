const body = document.querySelector('body');
const preLoader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preLoader.classList.add('hidden');
    body.classList.remove('loading');
});