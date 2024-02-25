// import the movie data stored in db.json.
const movie = require('./db.json')

// Define an initial ID for new movies.
let updateId = 8;

module.exports = {

    getMovies: (req, res) =>{
        res.status(200).send(movie);
        },

    createMovie: (req, res) =>{
        const { title, rating, imageURL } = req.body;
     
        const newMovie = {
         id: updateId,
         title,
         rating,
         imageURL
        }
     
         movie.push(newMovie);
         res.status(200).json(movie);
     },

     editMovie: (req, res) =>{
        const { identify } = req.params;
        const { type } = req.body;
    
        for(let i = 0; i < movie.length; i++){
            if(movie[i].id === Number(identify)){
    
                if(type === "plus" && movie[i].rating < 5){
                    const newRating = movie[i].rating + 1;
                    movie[i].rating = newRating;
                    res.status(200).json(movie);
                    return;
                }
                if(type === "minus" && movie[i].rating > 0){
                    const newRating = movie[i].rating - 1;
                    movie[i].rating = newRating;
                    res.status(200).json(movie);
                    return;
                }
            }
        }
    },

    deleteMovie: (req, res) => {
        const { identity } = req.params;
    
        for (let i = 0; i < movie.length; i++){
            if(movie[i].id === Number(identity)){
                movie.splice(i, 1)
                res.status(200).json(movie);
            }
        }
    }
}

