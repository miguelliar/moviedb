import { useEffect, useState } from "react"
import { FilmData } from "../utils/types"
import { Link, useParams } from "react-router-dom"
import { mockData, posterFallback } from "../__stubs__/films"
import starLogo from '../assets/star.svg'
import edit from '../assets/edit.svg'
import './Film.scss'

export function Film () {
    const [film, setFilm] = useState<FilmData|null>(null)
    const { id } = useParams()
    useEffect(() => {
        //TODO: substitute this by endpoint call
        if (id) {
            setFilm(mockData[Number.parseInt(id)])
        }
    }, [id])

    return (
    <main>
        <h1 className="title">{film?.name}</h1>
        <Link className="edit" to={`/film/${film?.id}/edit`}>
            <p>Edit</p>
            <img className="edit__logo" src={edit} />
        </Link>
        <section className="film">
            <img 
                className="film__poster"
                src={film?.moviePoster}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=posterFallback;
                  }}
            />
            <div className="film__info">
                <p>Directed by <b>{film?.director}</b></p>
                <p>Released in <b>{film?.year}</b></p>
                <div>
                    <p>Stared by: </p>
                    {
                        film?.actors.map(
                            actor => 
                                <p key={actor.name}>
                                    <b>{actor.name}</b> as <b>{actor.character}</b>
                                </p>
                        )
                    }
                </div>
                <div>
                    {
                      film?.genres.map(
                        genre => <p key={genre}>{genre}</p>
                      )  
                    }
                </div>
                <p>Synopsis: {film?.synopsis}</p>
                <p>Scoring: <img src={starLogo}/>{film?.averageRating}</p>
            </div>
        </section>
    </main>
    )
}