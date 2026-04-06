// Store movies as an object, keyed by their imdbID
const movies = {
  tt1396484: {
    imdbID: 'tt1396484',
    Title: 'It',
    Released: '2017-09-08',
    Runtime: 135,
    Genres: ['Horror'],
    Directors: ['Andy Muschietti'],
    Writers: ['Chase Palmer', 'Cary Joji Fukunaga', 'Gary Dauberman'],
    Actors: ['Bill Skarsgård', 'Jaeden Martell', 'Finn Wolfhard'],
    Plot: 'In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_SX300.jpg',
    Metascore: 69,
    imdbRating: 7.3
  },
  tt0499549: {
    imdbID: 'tt0499549',
    Title: 'Avatar',
    Released: '2009-12-18',
    Runtime: 162,
    Genres: ['Action', 'Adventure', 'Fantasy'],
    Directors: ['James Cameron'],
    Writers: ['James Cameron'],
    Actors: ['Sam Worthington', 'Zoe Saldaña', 'Sigourney Weaver'],
    Plot: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg',
    Metascore: 83,
    imdbRating: 7.9
  },
  tt0468569: {
    imdbID: 'tt0468569',
    Title: 'The Dark Knight',
    Released: '2008-07-18',
    Runtime: 152,
    Genres: ['Action', 'Crime', 'Drama'],
    Directors: ['Christopher Nolan'],
    Writers: ['Jonathan Nolan', 'Christopher Nolan', 'David S. Goyer'],
    Actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    Plot: 'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: 85,
    imdbRating: 9.1
  }
};

// Export the movies object so server.js can use it
module.exports = movies;
