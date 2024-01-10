async function getPokemons(){
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error){
        console.log(error);
    }
}

async function renderPokemons(){
    let pokemons = await getPokemons();

    let app = document.querySelector("#app");


    pokemons.forEach(pokemon => {
        let pokename = `${pokemon.name}`
        let poketype = `${pokemon.type}`
        
        let text = pokename + " est de type " + poketype + '.';
        let p = document.createElement("p");
        p.textContent = text;
        app.appendChild(p);

    });



}

renderPokemons();