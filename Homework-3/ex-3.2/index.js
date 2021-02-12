const btn = document.getElementById('acceptCookies');
const banner = document.querySelector('div');

btn.addEventListener('click', () => {
  document.cookie = 'cookiesAccepted=true;max-age=2592000;secure';
  document.body.removeChild(banner);
  console.log(document.cookie);
});