"use strict" ;

/*let numberOffilms = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);

let personalMovieDB = {
        count: numberOffilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
        };

let a = prompt(`Один из последних просмотренных фильмов`, ``),
    b = prompt(`На сколько оцените его?`, ``),
    c = prompt(`Один из последних просмотренных фильмов`, ``),
    d = prompt(`На сколько оцените его?`, ``);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;*/


let numberOffilms = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);

let personalMovieDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

first: for (let i = 0; i < 2 ; i++) {
           let filmTitle = prompt(`Один из последних просмотренных фильмов`, ``),
                filmRating = prompt(`На сколько оцените его?`, ``);

           if ((filmTitle && filmRating) == false) {
               i--;
               continue first;
           } else if (filmTitle.length > 50 ) {
               i--;
               continue first;
           };

           personalMovieDB.movies[filmTitle] = filmRating;
       };

if (personalMovieDB.count < 10) {
    document.write(`Просмотрено довольно мало фильмов`);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    document.write(`Вы классический зритель`);
} else if ( personalMovieDB.count > 30) {
    document.write(`Вы киноман`);
} else {
    document.write(`Произошла ошибка`);
}

console.log(personalMovieDB);



