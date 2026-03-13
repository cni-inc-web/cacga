// Add return to main site link in nav 
  document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('#classicNav');
    if (nav) {
      const newItem = document.createElement('li');
      newItem.className = 'nav-item';
      newItem.innerHTML = `<a class="nav-link" href="https://www.artsglenallen.com/">Return To Main Site</a>`;
      nav.appendChild(newItem);
      const newItem2 = document.createElement('li');
      newItem2.className = 'nav-item';
      newItem2.innerHTML = '<a class="nav-link" href="https://culturalartscenteratglenallen.ricoconsign.com/store/category/Events">Events</a>'
    }
  });