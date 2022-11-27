
const MOVIES_ENDPOINT = "https://63540cf4ccce2f8c020237cf.mockapi.io/Promineo_Tech_API/moviesApi"
// class movieAPI use REST API to get, put, post, and delete movies from the server
class MovieApi {
    // retrieve movie information from the server
    get = async () => {
        try {
            const resp = await fetch(MOVIES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log("Oops, looks like fetchMovies had an issue.", e);
        }

    }
    // update movie information from the server
    put = async(movie) => {
        try {
            const resp = await fetch(`${MOVIES_ENDPOINT}/${movie.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie)
            });
            return await resp.json();
        } catch(e) {
            console.log("Oops, looks like updating movies had an issue.", e);
        }
    }

    // add a new movie to the server
    post = async(movieName, synopsis) => {
        try {
            const resp = await fetch(`${MOVIES_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: `${movieName}`, synopsis: `${synopsis}`})
            });
            return await resp.json();
        } catch(e) {
            console.log("Oops, looks like adding movie had an issue.", e);
        }
    }

    // delete a movie information from the server
    delete = async(movieId) => {
        try {
            const resp = await fetch(`${MOVIES_ENDPOINT}/${movieId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }                
            });
            return await resp.json();
        } catch(e) {
            console.log("Oops, looks like delete movie had an issue.", e);
        }
    }
}

export const movieApi = new MovieApi();