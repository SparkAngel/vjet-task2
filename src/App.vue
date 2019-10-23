<template>
  <div id="app">
    <h1>Кинотеатр</h1>
    <router-link to="/movies">Сейчас в кино</router-link>
    <hr>
    <router-view />
  </div>
</template>

<script>


export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
