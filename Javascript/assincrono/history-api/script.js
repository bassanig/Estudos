console.log(window.history);

async function fetchPage(url) {
  const pageReponse = await fetch(url);
  const pageText = await pageReponse.text();
  window.history.pushState(null, null, url);
}
