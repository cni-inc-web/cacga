// Put a No Wrap Span around "local online!"
const h1 = Array.from(document.querySelectorAll('h1')).find(el =>
  el.textContent.trim() === "Experience a curated collection of handmade goods from local artisans"
);

if (h1) {
  h1.innerHTML = h1.textContent.replace(
    /local online!$/,
    '<span style="text-wrap: nowrap;">local artisans</span>'
  );
}
