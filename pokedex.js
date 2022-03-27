const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    const appNode = document.getElementById('app');
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            document.getElementById('number').textContent = "No: #"+data.id;
            document.getElementById('name').textContent  = "Nombre: "+data.forms[0].name;
            document.getElementById('hp').textContent = "HP: "+ data.stats[0].base_stat;
            document.getElementById('atk').textContent = "Ataque: "+data.stats[1].base_stat;
            document.getElementById('def').textContent = "Defenza: "+data.stats[2].base_stat;
            document.getElementById('spatk').textContent = "Ataque especial: "+ data.stats[3].base_stat;
            document.getElementById('spdef').textContent = "Defenza especial: "+data.stats[4].base_stat;
            document.getElementById('speed').textContent = "velocidad: "+data.stats[5].base_stat;
            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}



