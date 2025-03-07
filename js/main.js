const numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?',''));

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}
let a = prompt('Один из последних просмотренных фильмов?');
let b = +prompt('На сколько оцените его?');
let c = prompt('Один из последних просмотренных фильмов?');
let d = +prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);