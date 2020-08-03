var Cambio_page = 1;
var cambio_character = 0;
var iterator_back = document.getElementById("change-back");
var iterator = document.getElementById("change");

// iterator_back.addEventListener("click", function () {
//   if (Cambio_page == 1 && cambio_character == 0) {
//     Cambio_page = 30;
//     cambio_character = 10;
//     MyDates(Cambio_page, cambio_character);
//   }
// });
iterator_back.addEventListener("click", function () {
  if (cambio_character === 0 && Cambio_page === 1) {
    cambio_character = 10;
    Cambio_page = 30;
  }
  if (cambio_character <= 0) {
    cambio_character = 19;
    Cambio_page = Cambio_page - 1;
  }

  MyDates(Cambio_page, cambio_character - 1);
  console.log(cambio_character, "antes de disminuir");
  cambio_character -= 1;
  console.log(cambio_character, "despues de disminuir");
});

iterator.addEventListener("click", function () {
  if (cambio_character >= 19) {
    Cambio_page += 1;
    cambio_character = 0;
  }
  //si ya es la ultima pagina y ademas el ultio personaje regresara a la pagina 1 y caracter 0
  if (Cambio_page === 30 && cambio_character === 10) {
    Cambio_page = 1;
    cambio_character = 0;
  }
  MyDates(Cambio_page, cambio_character + 1);
  console.log(cambio_character, "antes de aumentr");

  cambio_character += 1;
  console.log(cambio_character, "despues de aumenar");
});

function MyDates(id, cambio) {
  fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
    .then((response) => response.json())
    .then(function (response) {
      console.log(response.results);
      var conteiner = document.getElementById("img-text");
      conteiner.innerHTML = `
        <img class="img-character" src="${response.results[cambio].image}" />
        <div class="ScreenBig">
        <p class="U-params" id="name">Name: ${response.results[cambio].name}</p>
        <p class="U-params" id="location">Location: ${response.results[cambio].location.name}</p>
        <p class="U-params" id="status">Status: ${response.results[cambio].status}</p>
        <div/>
      `;
    });
}
