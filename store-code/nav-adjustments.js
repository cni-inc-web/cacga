document.addEventListener("DOMContentLoaded", function () {

  const target = document.querySelector('#classicNav .nav-item.dropdown.position-static');

  if (!target) return;

  const links = [
    {text:"Return To Main Site", url:"https://www.artsglenallen.com/"},
    {text:"Events", url:"https://culturalartscenteratglenallen.ricoconsign.com/store/category/Events"}
  ];

  links.reverse().forEach(link => {
    const li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = `<a class="nav-link" href="${link.url}">${link.text}</a>`;
    target.insertAdjacentElement('afterend', li);
  });

});