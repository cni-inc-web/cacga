document.addEventListener("DOMContentLoaded", function () {

  const nav = document.querySelector("#classicNav");
  if (!nav) return;

  // --- Remove Events from megamenu ---
  const eventLink = nav.querySelector('a[href="/store/category/Events"]');
  if (eventLink) {
    const h6 = eventLink.closest("h6");
    if (h6) h6.remove();
  }

  // --- Find insertion point ---
  const target = nav.querySelector(".nav-item.dropdown.position-static");
  if (!target) return;

  const parent = target.parentNode;

  // --- Create Return To Main Site link ---
  const newItem = document.createElement("li");
  newItem.className = "nav-item";
  newItem.innerHTML = `<a class="nav-link" href="https://www.artsglenallen.com/">Return To Main Site</a>`;

  // --- Create Events link ---
  const newItem2 = document.createElement("li");
  newItem2.className = "nav-item";
  newItem2.innerHTML = `<a class="nav-link" href="https://culturalartscenteratglenallen.ricoconsign.com/store/category/Events">Events</a>`;

  // --- Insert after dropdown.position-static ---
  parent.insertBefore(newItem, target.nextSibling);
  parent.insertBefore(newItem2, newItem.nextSibling);

});