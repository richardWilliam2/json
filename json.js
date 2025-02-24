
var descricao;
const selectElement = document.getElementById('personagem');
 
selectElement.addEventListener('click', function () {
    var personagem = selectElement.value;
 
    exibirPokemon(personagem);
 
    async function exibirPokemon(nomePokemon) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
            if (!response.ok) {
                throw new Error(`Pokemon não encontrado ou erro de API.`);
            }
            const data = await response.json();
            const nome = data.name;
            const imagem = data.sprites.front_default;
            const habilidade = data.abilities.map(ability => ability.ability.name);
            const pokemonDiv = document.getElementById('pokemon');
            pokemonDiv.innerHTML = `<h2>${nome}</h2><img src="${imagem}" width="300px" height="300px" alt="${nome}"><br><p>${habilidade}</p>`;
        } catch (error) {
            console.error('Erro:', error);
            const pokemonDiv = document.getElementById('pokemon');
            pokemonDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
        }
    }
});