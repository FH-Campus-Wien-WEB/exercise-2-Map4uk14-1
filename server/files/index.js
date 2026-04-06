window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      
      // Task 1.3: Render each movie with an Edit button
      for (const movie of movies) {
        // Create the main movie container
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.id = movie.imdbID;  // Set the imdbID as the element id
        
        // Create the movie title
        const title = document.createElement('h2');
        title.textContent = movie.Title;
        movieDiv.append(title);
        
        // Create the poster image
        const poster = document.createElement('img');
        poster.src = movie.Poster;
        poster.alt = movie.Title;
        poster.style.width = '200px';
        poster.style.marginRight = '20px';
        movieDiv.append(poster);
        
        // Create the runtime
        const runtime = document.createElement('p');
        runtime.textContent = 'Runtime: ' + movie.Runtime + ' min';
        movieDiv.append(runtime);
        
        // Create the release date
        const released = document.createElement('p');
        released.textContent = 'Released: ' + movie.Released;
        movieDiv.append(released);
        
        // Create the genres
        const genresContainer = document.createElement('div');
        for (const genre of movie.Genres) {
          const genreSpan = document.createElement('span');
          genreSpan.className = 'genre';
          genreSpan.textContent = genre;
          genresContainer.append(genreSpan);
        }
        movieDiv.append(genresContainer);
        
        // Create the directors
        const directors = document.createElement('p');
        directors.textContent = 'Directors: ' + movie.Directors.join(', ');
        movieDiv.append(directors);
        
        // Create the actors
        const actors = document.createElement('p');
        actors.textContent = 'Actors: ' + movie.Actors.join(', ');
        movieDiv.append(actors);
        
        // Create the plot
        const plot = document.createElement('p');
        plot.textContent = movie.Plot;
        movieDiv.append(plot);
        
        // Create the rating
        const rating = document.createElement('p');
        rating.textContent = 'IMDB Rating: ' + movie.imdbRating + '/10';
        movieDiv.append(rating);
        
        // Task 1.3: Create the Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.padding = '10px 20px';
        editButton.style.marginTop = '10px';
        
        // Task 2.2: Add click handler to navigate to edit page with imdbID
        editButton.onclick = function() {
          location.href = 'edit.html?imdbID=' + movie.imdbID;
        };
        
        movieDiv.append(editButton);
        
        // Add the movie to the page
        bodyElement.append(movieDiv);
      }
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
