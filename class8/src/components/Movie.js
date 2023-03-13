export const Movie = () => {
    const movies = [{
        id: 1,
        name: 'Leon The Professional',
        genre: 'Action',
        rating: 8.5
    },
    {
        id: 2,
        name: 'Memento',
        genre: 'Mystery',
        rating: 8.4
    },
    {
        id: 3,
        name: 'Cry-Baby',
        genre: 'Drama',
        rating: 8.3
    }]
    console.log(movies);

    return (
        <div>
            <h1>These are my top 3 movies:</h1>

        </div>
    )
};