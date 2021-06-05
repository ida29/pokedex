<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <h1>Pokedex</h1>

        <PokemonList :imageUrl="imageUrl" :apiUrl="apiUrl"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PokemonList from "./components/PokemonList";

export default {
  name: "App",

  components: {
    PokemonList,
  },

  data: () => {
    return {
      //imageUrl: 'https://pokeres.bastionbot.org/images/pokemon/',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      //imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
      apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
    };
  },
};
</script>
