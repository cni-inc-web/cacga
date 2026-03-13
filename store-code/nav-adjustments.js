document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#classicNav");

  if (!nav) return;

  const links = [
    { text: "Return To Main Site", url: "https://www.artsglenallen.com/" },
    { text: "Events", url: "https://culturalartscenteratglenallen.ricoconsign.com/store/category/Events" }
  ];

  links.forEach(link => {
    const li = document.createElement("li");
    li.className = "nav-item";

    const a = document.createElement("a");
    a.className = "nav-link";
    a.href = link.url;
    a.textContent = link.text;

    li.appendChild(a);
    nav.appendChild(li);
  });
});