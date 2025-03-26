export type FilmData = {
    id: string
    name: string
    director: string
    year: number
    averageRating: number
    genres: string[]
    actors: {
        name: string
        character: string
    }[]
    synopsis: string
    moviePoster: string
}