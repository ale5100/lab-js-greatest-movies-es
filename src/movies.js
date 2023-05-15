// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.


// How could you "clean" a bit this array and make it unified (without duplicates)?


const getAllDirectors = (moviesArray) => {
  let directorsDuplicate = moviesArray.map((movie) => movie.director);
  let directorsNoDuplicate = directorsDuplicate.filter((director, index) => {
    return directorsDuplicate.indexOf(director) === index;
  });
  return directorsNoDuplicate;
};
let allDirectors = getAllDirectors(movies);
console.log(allDirectors);



// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let dramaSpielbergMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
  });
  return dramaSpielbergMovies.length;
}

let pelisDramaSpielberg = howManyMovies(movies);
console.log(pelisDramaSpielberg);




// // Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScores = moviesArray.reduce((sum, movie) => {
    if (movie.score) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);

  let averageScore = totalScores / moviesArray.length;
  return Number(averageScore.toFixed(2));
}

let average = scoresAverage(movies);
console.log(average);



// // Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
  let totalScore = dramaMovies.reduce((sum, movie) => {
    if (movie.score) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);

  if (dramaMovies.length === 0) {
    return 0;
  }

  let average = totalScore / dramaMovies.length;
  return parseFloat(average.toFixed(2));
}

let dramaScore = dramaMoviesScore(movies);
console.log(dramaScore);


// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(moviesArray) {
  
  const moviesCopy = [...moviesArray];

  moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; 
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return moviesCopy;
}

let moviesOrdered = orderByYear(movies);
console.log(moviesOrdered);


// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title); 

  
  return sortedMovies.slice(0, 20);
}

const first20Titles = orderAlphabetically(movies);
console.log(first20Titles);


// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}



// // The following is required to make unit tests work.
// /* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = {
//     getAllDirectors,
//     howManyMovies,
//     scoresAverage,
//     dramaMoviesScore,
//     orderByYear,
//     orderAlphabetically,
//     turnHoursToMinutes,
//     bestYearAvg,
//   };
// }
