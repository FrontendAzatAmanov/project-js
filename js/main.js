const numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?',''));


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}


for (let i =0; i < 2;i++) {
  let a = prompt('Один из последних просмотренных фильмов?');
  let b = +prompt('На сколько оцените его? от 0 до 10');

  // if (a != null && b != null && a != '' && b != '' && a.length < 50 && b < 11) {
  //   personalMovieDB.movies[a] = b;
  //   console.log('done')
  // }else {
  //   console.error('error');
  //   i--;
  // }
  a != null && b != null && a != '' && b != '' && a.length < 50 ? (personalMovieDB.movies[a] = b, console.log('done')): 
  (console.error('error'), i--);
} 
personalMovieDB.count > 0 && personalMovieDB.count <= 10 ? console.log('Вы посмотрели довольно мало фильмов') :
personalMovieDB.count >10 && personalMovieDB.count <= 30 ? console.log('Вы классический киноман') : 
console.log('Вы киноман');


console.log(personalMovieDB);