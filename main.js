var page = 1;
var cambio = 0;
var iterator = document
  .getElementById("change")
  .addEventListener("click", function () {
    if (cambio >= 20) {
      page += 1;
      cambio = 0;
    }
    prueba(page, cambio);
    cambio += 1;
  });

function prueba(id, cambio) {
  fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
    .then((response) => response.json())
    .then(function (response) {
      console.log(response.results);
      var conteiner = document.getElementById("img-text");
      conteiner.innerHTML = `
        <img class="img-character" src="${response.results[cambio].image}" />
        <p class="U-params" id="name">Name: ${response.results[cambio].name}</p>
        <p class="U-params" id="location">Location: ${response.results[cambio].location.name}</p>
        <p class="U-params" id="status">Status: ${response.results[cambio].status}</p>
      `;
    });
}
