import axios from "axios";

const getPokemon = async () => {
  const { data } = await axios.get(
    `${process.env.API_POKEMON_URL}/pokemon`
  );

  return data;
};

const getAbility = async (pokemonname ="") => {
    const { data } = await axios.get(
      `${process.env.API_POKEMON_URL}/pokemon/${pokemonname}`
    );
  
    return data;
  };

export { getPokemon, getAbility };