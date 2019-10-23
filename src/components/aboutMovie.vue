<template>
  <div>
    <div>
      <h2>Фильм: {{ movie.name }}</h2>
      <img :src="movie.pictureLink" />
      <p>О фильме: {{ movie.description }}</p>
    </div>
    <div>
      <h3>Купить билет</h3>
      <h4 v-if="dataPOST !== ''">Ваш номер билета {{dataPOST}}</h4>
      <div
        class="row"
        v-for="(row, i) in moviePlaces.places"
        v-bind:key="row._id"
      >
        <p>Ряд {{ i + 1 }}</p>
        <div
          class="place"
          v-for="places in row"
          v-bind:key="places._id"
          :class="{ 'place-red': places.isFree == false }"
        >
          <div>Место {{ places.position + 1 }}</div>
          <button @click="buyTicket(places.position, i)">Купить</button>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutMovie",
  data() {
    return {
      movie: [],
      ids: this.$route.params.id,
      moviePlaces: [],
      params: {},
      dataPOST: "",
    };
  },

  mounted() {
    let ids = this.$route.params.id;
    fetch(`https://cinema-api-test.herokuapp.com/movies?movie_id=${ids}`)
      .then(response => response.json())
      .then(json => (this.movie = json));

    fetch(`https://cinema-api-test.herokuapp.com/movieShows?movie_id=${ids}`)
      .then(response => response.json())
      .then(json => (this.moviePlaces = json));
  },
  methods: {
    buyTicket(e, r) {
      let ids = this.$route.params.id;
      this.params = {
        movieShow_id: ids,
        row_id: r,
        place_position: e,
        isFree: true
      };
      fetch("https://cinema-api-test.herokuapp.com/bookingPlace", {
        method: "POST",
        body: JSON.stringify(this.params)
      })
        .then(res => res.json())
        .then(data => (this.dataPOST = data));
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  margin-bottom: 10px;
}
.place {
  border: 2px solid blue;
  margin: auto;
  width: 50px;
  height: 50px;
}
.place-red {
  border: 2px solid red;
}
</style>
