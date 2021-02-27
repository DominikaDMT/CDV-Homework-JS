const links = document.getElementsByTagName('li');

const changePage = () => {
  for (const section of document.getElementsByTagName('section')) {
    section.style.display = 'none';
  }

  if (window.location.hash) {
    console.log(window.location.hash.substring(1));
    document.getElementById('page-' + window.location.hash.substring(1)).style.display = 'block';
  }
}

const forward = (e) => {
  window.location.hash = e.target.id
}

for (const link of links) {
  link.addEventListener('click', forward)
}

window.addEventListener('hashchange', changePage)