# Movie Sagas App

Welcome to my Movie Sagas App! This is a web application designed to showcase a list of movies and their details. Users can browse through the list of movies, view details about each movie, add new movies to the database, as well as delete unwanted movies.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)

## Features

- Display a list of movies with their titles and posters.
- Click on a movie to view more details (title, genres, poster, and description)
- AddMovie page allows user to enter a new movie, select the genre, add a poster and a description of the movie

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/RyanOlson86/weekend-movie-sagas.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weekend-movie-sagas
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a database named saga_movies_weekend.

5. Run the queries from database.sql on the saga_movies_weekend database.

6. Start the server:

   ```bash
   npm run server
   ```

7. In a separate terminal tab, start the client:

   ```bash
   npm run client
   ```

8. Open your web browser and go to `http://localhost:5173` to view the application.

## Technologies Used

- React
- Redux
- Node.js
- Express.js
- Axios
- PostgreSQL
- Material UI
- SweetAlert2
