# vue-task2
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```

Хотел сделать все с vuetify но когда начал компелировать все стили слетели и вебпак выдавал ошибки.
Я позже разберусь с этим.

При сортировке сначало все работало, но потом что то сломалось и не успел с этим разобраться.
до начлала поломки было так:
```
 computed: {
    filteredMovies() {
     if (this.filterGenres >= 0) {
       return this.movies.filter(e => e.genre_id.includes(Number(this.filterGenres)))
     } else if (this.search.length > 0) {
      return this.movies.filter(e => e.name.includes(this.search)) 
     } else {
       return this.movies
    }
```
потом же перепробывал кучу способов и так сортировка и не работала.

Мне очень понравился Vue думаю буду дальше продолжать изучать его.
на реакте я бы сделал это быстрее=)
