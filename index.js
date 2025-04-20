const initalizeDataBase = require("./db/db.connect");
const Movie = require("./models/movies.models");

initalizeDataBase();

// Get all movies
async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
  } catch (err) {
    console.log(err);
  }
}
// readAllMovies();

//  Find Movie by id

async function movieToUpdate(movieID, dataToUpdate) {
  try {
    const newMovieData = await Movie.findByIdAndUpdate(movieID, dataToUpdate, {
      new: true,
    });
    console.log(newMovieData);
  } catch (err) {
    console.log(err);
  }
}

// movieToUpdate("68052f74c0d1fe53166513b5", { releaseYear: 2090 });

async function updateMovieDetails(movieName, dataToUp) {
  try {
    const getNewMovieDetails = await Movie.findOneAndUpdate(
      movieName,
      dataToUp,
      {
        new: true,
      }
    );
    console.log(getNewMovieDetails);
  } catch (err) {
    console.log(err);
  }
}

updateMovieDetails({ title: "Kabhi Khushi Kabhie Gham" }, { releaseYear: 209 });
