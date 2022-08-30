
export const Homework = ({movies}) => (
    <section>
        <h2>Homework</h2>

        {movies.map(( movie, i ) => (<Movie key={i} {...movie} /> ))}
    </section>
)


const Movie = ({name, genre, year, imdbLink, imageUrl}) => (
    <div>
        <h3>Title: {name}</h3>
        <h4>Genre: {genre}</h4>
        <p>Release year : {year}</p>
        <a href={imdbLink}>IMDB {name}</a>
        <img src={imageUrl} alt={name} />
    </div>
)