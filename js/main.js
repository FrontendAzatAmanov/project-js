const numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?',''));
if (numberOfFilms > 0 && numberOfFilms <= 10 ) {
  console.log('Просмотрено довольно мало фильмов')
}else if ( numberOfFilms > 10 && numberOfFilms <= 30) {
  console.log('Вы классический зритель')
}else if ( numberOfFilms > 30 ) {
  console.log('Вы киноман!')
}
else (
  console.error('error')
)


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}


for (let i =0; i < 2;i++) {
  let a = prompt('Один из последних просмотренных фильмов?');
  let b = +prompt('На сколько оцените его?');

  if (a != null && b != null && a != '' && b != '' && a.length < 50  ) {
    personalMovieDB.movies[a] = b;
    console.log('done')
  }else {
    console.log('error');
    i--;
  }

}



console.log(personalMovieDB);