<template>
  <div class="PokemonList">
    <v-row>
      <v-col
        xs="6"
        sm="4"
        md="3"
        lg="2"
        xl="2"
        v-for="(pokemon, index) in pokemons"
        :key="'poke' + index"
        >
        <v-card
          v-if="pokemon.id <= 151"
          rounded
          class="text-center"
          height="100%"
          width="100%"
          >
          <v-responsive aspect-ratio="1">
            <v-layout justify-center>
              <v-img 
                      max-height="130"
                      max-width="130"
                      :src="imageUrl + pokemon.id + '.png'"
                      />
            </v-layout>
          <v-layout justify-center>
            <v-card-title>No.{{ pokemon.id }} {{ pokemon.name }}</v-card-title>
          </v-layout>
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "PokemonList",
  components: {},
  data() {
    return {
      nextUrl: "",
      detailUrl: "",
      pokemons: [],
      cnt: 0
    };
  },
  props: ["imageUrl", "apiUrl"],
  methods: {
    fetchData: async function () {
      let req = new Request(this.nextUrl);
      try {
        const res = await fetch(req);
        const json = await res.json();
        this.nextUrl = json.next;
        json.results.forEach(async (pokemon) => {
          this.detailUrl = pokemon.url;
          pokemon.id = pokemon.url
            .split("/")
            .filter((e) => {
              return !!e;
            })
            .pop();
          if(this.pokemons.length < 151) {
              this.pokemons.push(pokemon);
          }
        });
      } catch (e) {
        console.log("error!");
      }
    },
    firstTime: async function () {
      this.nextUrl = this.apiUrl;
      await this.fetchData();
      await this.fetchData();
      await this.fetchData();
    },
    getNextData: function () {
      window.onscroll = async () => {
        if (
          Math.abs(
            document.documentElement.scrollTop +
            document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
          ) < 1 &&
          this.pokemons.length < 151
        ) {
          await this.fetchData();
        }
      };
    },
  },
  created() {
    this.nextUrl = this.apiUrl;
    this.firstTime();
  },
  mounted() {
    this.getNextData();
  },
};
</script>
