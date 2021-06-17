function randomizePokemon() {
  var random = pokemons[Math.floor(Math.random() * pokemons.length)];

  if (correctPokemon == random) {
    randomizePokemon();
  }

  return random;
}

function selectedOption(pokemon) {
  if (pokemon == correctPokemon) {
    document.querySelector("#pokemon").classList.remove("silhouette");

    setTimeout(function () {
      swal("Parabéns!", "Você Acertou", "success", {
        buttons: false,
        timer: 1500,
      });
    }, 1000);

    setTimeout(function () {
      startGame();
      document.querySelector("#pokemon").classList.add("silhouette");
    }, 2000);

    acertou += 1;
    document.querySelector("#acertou").textContent = `Acertou ${acertou} vezes`;
  } else {
    document.querySelector("#pokemon").classList.remove("silhouette");
    setTimeout(function () {
      swal("Que Pena!", "Você Errou", "error", {
        buttons: false,
        timer: 1500,
      });
    }, 1000);
    setTimeout(function () {
      startGame();
      document.querySelector("#pokemon").classList.add("silhouette");
    }, 2000);

    errou += 1;
    document.querySelector("#errou").textContent = `Errou ${errou} vezes`;
  }
}

var correctPokemon;
var option1;
var option2;
var option3;
var options;
var acertou = 0;
var errou = 0;

function startGame() {
  correctPokemon = randomizePokemon();
  option1 = randomizePokemon();
  option2 = randomizePokemon();
  options = [correctPokemon, option1, option2].sort(() => 0.5 - Math.random());

  document.querySelector("#option1").textContent = options[0];
  document.querySelector("#option2").textContent = options[1];
  document.querySelector("#option3").textContent = options[2];
  document.querySelector("#pokemon").src = `img/${
    pokemons.indexOf(correctPokemon) + 1
  }.png`;
}

startGame();
