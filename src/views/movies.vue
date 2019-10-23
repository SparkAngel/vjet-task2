<template>
  <div>
    <input type="text" v-model="search" />
    <select v-model="filterGenres" @click="filters">
      <option value="default">Choose genres</option>
      <option value="0">Action</option>
      <option value="1">Adventures</option>
      <option value="2">Comedy</option>
      <option value="3">Drama</option>
      <option value="4">Horror</option>
      <option value="5">Westerns</option>
    </select>
    <div>
      <div v-for="movie in movies" v-bind:key="movie._id">
        <a @click="goToAbout(movie._id)"> {{ movie.name }}</a>
        <img :src="movie.pictureLink" @click="goToAbout(movie._id)" />
      </div>
    </div>

    <div>
      <p>{{ moviesPlaces }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "movies",
  data() {
    return {
      movies: [],
      moviesPlaces: [],
      search: "",
      filterGenres: "default"
    };
  },

  mounted() {
    fetch("https://cinema-api-test.herokuapp.com/movies")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.movies = json;
        }, 1000);
      });
  },

  methods: {
    goToAbout(ids) {
      this.$router.push({ path: `/movies/${ids}` });
    },
    filters: function() {
      if (this.filterGenres >= 0) {
        return this.movies.filter(e =>
          e.genre_id.includes(Number(this.filterGenres))
        );
      } else {
        return this.movies;
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
a {
  cursor: pointer;
}
</style>
