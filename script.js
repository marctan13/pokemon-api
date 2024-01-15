document.querySelector("#search").addEventListener("click", getPokemon);

function lowerCaseName(string) {
  return string.toLowerCase();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then(
      (data) =>
        (document.querySelector(".pokemonBox").innerHTML = `
        <div>
            <img src="${
              data.sprites.other["official-artwork"].front_default
            }" alt="${data.name}" /> 
        </div>
        <div class="pokemonInfo">
            <h1>Name: ${capitalizeFirstLetter(data.name)}</h1>
            <p>Type: ${capitalizeFirstLetter(data.types[0].type.name)}</p>
            <p>Weight: ${data.weight} pounds</p>
            <ul>
                <li>${data.moves[Math.floor(Math.random()*data.moves.length)].move.name}</li>
                <li>${data.moves[Math.floor(Math.random()*data.moves.length)].move.name}</li>
                <li>${data.moves[Math.floor(Math.random()*data.moves.length)].move.name}</li>
                <li>${data.moves[Math.floor(Math.random()*data.moves.length)].move.name}</li>
            </ul>
        </div>
    `) //"-" does not work so cover in brackets for img src
    )
    .catch((error) => console.log("Pokemon Not Found"));

  e.preventDefault();
}
