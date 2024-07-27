

async function fetchData(service) {
    let url = `/api/${service}`;
    let query = {};

    switch (service) {
        case 'github':
            const username = await Swal.fire({
                title: 'Ingrese GitHub Username',
                input: 'text',
                inputPlaceholder: 'Username'
            }).then(result => result.value);
            if (username) query.username = username;
            break;
        case 'weather':
            const location = await Swal.fire({
                title: 'Ingrese ciudad',
                input: 'text',
                inputPlaceholder: 'Ciudad'
            }).then(result => result.value);
            if (location) query.location = location;
            break;
        case 'pokemon':
            const pokemonList = await fetch('/api/pokemon-list')
                .then(response => response.json())
                .catch(error => {
                    console.error('Error Pokémon list:', error);
                    return [];
                });

            const pokemonOptions = pokemonList.reduce((acc, name) => {
                acc[name] = name;
                return acc;
            }, {});

            const { value: selectedPokemon } = await Swal.fire({
                title: 'Selecciona un Pokémon',
                input: 'select',
                inputOptions: pokemonOptions,
                inputPlaceholder: 'Selecciona un Pokémon',
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        if (value) {
                            resolve();
                        } else {
                            resolve('¡Necesitas seleccionar un Pokémon!');
                        }
                    });
                }
            });
            if (selectedPokemon) {
                query.name = selectedPokemon;
            }
            break;
        case 'rickandmorty-character':
            const characterList = await fetch('/api/rickandmorty-list')
                .then(response => response.json())
                .catch(error => {
                    console.error('Error Rick and Morty character list:', error);
                    return [];
            });

            const characterOptions = {};
                characterList.forEach(character => {
                    characterOptions[character.id] = character.name; 
            });

            const { value: selectedCharacterId } = await Swal.fire({
                title: 'Selecciona un Personaje',
                input: 'select',
                inputOptions: characterOptions,
                inputPlaceholder: 'Selecciona un Personaje',
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        if (value) {
                            resolve();
                        } else {
                            resolve('¡Necesitas seleccionar un Personaje!');
                        }
                    });
                }
            });

            if (selectedCharacterId) {
                query.id = selectedCharacterId; 
            }
            break;
        case 'photos':
            const { value: formValues } = await Swal.fire({
                title: 'Ingrese consulta de foto y tamaño',
                html: `
                    <input id="swal-input-keyword" class="swal2-input" placeholder="Keyword" />
                    <input id="swal-input-width" class="swal2-input" placeholder="Ancho" type="number" />
                    <input id="swal-input-height" class="swal2-input" placeholder="Alto" type="number" />
                `,
                focusConfirm: false,
                preConfirm: () => {
                    const keyword = document.getElementById('swal-input-keyword').value;
                    const width = document.getElementById('swal-input-width').value;
                    const height = document.getElementById('swal-input-height').value;
        
                    if (!keyword || keyword.includes(' ')) {
                        Swal.showValidationMessage('¡Debes ingresar una Keyword!');
                    } 
                    if (!width || !height) {
                        Swal.showValidationMessage('¡Necesitas ingresar el width y height!');
                    }
                    return { keyword, width, height };
                }
            });
        
            if (formValues) {
                query.keyword = formValues.keyword;
                query.width = formValues.width;
                query.height = formValues.height;
            }
            break;
        case 'movie':
            const movieList = await fetch('/api/movie-list')
                .then(response => response.json())
                .catch(error => {
                    console.error('Error Rick and Morty character list:', error);
                    return [];
            });

            const movieOptions = {};
                movieList.forEach(movie => {
                    movieOptions[movie.id] = movie.name; 
            });

            const { value: selectedMovieId } = await Swal.fire({
                title: 'Selecciona una Película',
                input: 'select',
                inputOptions: movieOptions,
                inputPlaceholder: 'Selecciona una Película',
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        if (value) {
                            resolve();
                        } else {
                            resolve('¡Necesitas seleccionar una Película!');
                        }
                    });
                }
            });

            if (selectedMovieId) {
                query.id = selectedMovieId; 
            }
            break;
        default:
            break;
    }

    url += '?' + new URLSearchParams(query).toString();

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('output').innerText = 'Error: ' + error.message;
    }
}
