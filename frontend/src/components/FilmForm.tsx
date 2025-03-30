import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { FilmData } from "../utils/types";
import cross from "../assets/cross.svg";
import './FilmForm.scss';

const EMPTY_FILM: FilmData = {
    id: "",
    name: "",
    director: "",
    year: 0,
    averageRating: 0,
    genres: [],
    actors: [],
    synopsis: "",
    moviePoster: ""
}

export type FilmFormProps = {
    onSubmit: (film: FilmData) => void
    submitText: string
    defaultFilm?: FilmData
}

export function FilmForm(
      {
        defaultFilm = EMPTY_FILM, 
        onSubmit,
        submitText
      } : FilmFormProps
    ) {
    const [film, setFilm] = useState<FilmData>(defaultFilm)
    const [addedGenre, setAddedGenre] = useState<string>('')
    const [actorToAdd, setActorToAdd] = useState<{character: string, name: string}>({character: '', name: ''})
    
    const handleUpdateSimpleInput = useDebouncedCallback(
        function handleUpdate<F extends keyof FilmData>(
            property: F,
            value: FilmData[F]
        ){
                const filterCopy = {...film}
                filterCopy[property] = value
                setFilm(filterCopy)
        }, 500)

    const addGenre = () => {
        setFilm({...film, genres: [...film.genres, addedGenre]})
        setAddedGenre('')
    }

    const removeGenre = (genreToRemove: string) => {
        setFilm({...film, genres: film.genres.filter(genre => genre !== genreToRemove)})
    }

    const addActor = () => {
        setFilm({...film, actors: [...film.actors, actorToAdd]})
        setActorToAdd({character: '', name: ''})
    }

    const removeActor = (actorToRemove: {character: string, name: string}) => {
        setFilm({...film, actors: film.actors.filter(actor =>
            actor.name !== actorToRemove.name
        ) })
    }

    return (
    <form className="film-form">
        <label htmlFor="name">
            <p>Name</p>
            <input
                required
                type="text"
                placeholder="Insert Name of the film"
                id="name"
                name="name"
                onChange={
                    (e) => 
                        handleUpdateSimpleInput(
                            "name", 
                            e.target.value)
                    }
            />
        </label>
        <label htmlFor="director">
            <p>Director</p>
            <input
                required
                type="text"
                placeholder="Insert Director"
                id="director"
                name="director"
                onChange={
                    (e) => 
                        handleUpdateSimpleInput(
                            "director", 
                            e.target.value)
                    }
            />
        </label>
        <label htmlFor="year">
            <p>Year</p>
            <input
                required
                type="number"
                placeholder="Insert year"
                id="year"
                name="year"
                onChange={
                    (e) => 
                        handleUpdateSimpleInput(
                            "year", 
                            Number(e.target.value))
                    }
            />
        </label>
        <div className="genres">
            <label htmlFor="genre">
                <p>Genre to add:</p>
                <input
                    className="genres__input" 
                    type="genre"
                    placeholder="Add genre"
                    id="genre"
                    name="year"
                    onChange={(e) => setAddedGenre(e.target.value)}
                />
                <button
                    className="genres__input__btn"
                    role="button"
                    onClick={addGenre}
                >
                    Add Genre
                </button>
            </label>
            <p>Genres:</p>
            <ul className="genres__list">
                {film.genres.map(genre => (
                    <li className="genre" key={`${genre}`}>
                        <p>{genre}</p>
                        <button
                            className="genre__remove_btn"
                            role="button"
                            aria-label={`Remove ${genre} genre`}
                            onClick={() => removeGenre(genre)}
                            disabled={!addedGenre}
                        >
                            <img className="cross" src={cross}/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        <div className="actors">
            <div>
                <p>Character to add:</p>
                <label className="actors__label" htmlFor="actorCharacter">
                    <p>Character interpreted</p>
                    <input
                        className="actors__input"
                        type="actorCharacter"
                        placeholder="Add Character interpreted"
                        id="actorCharacter"
                        name="actorCharacter"
                        onChange={(e) => setActorToAdd({...actorToAdd, character: e.target.value})}
                    />
                </label>
                <label className="actors__label" htmlFor="actorName">
                    <p>Actor name</p>
                    <input
                        className="actors__input"
                        type="actorName"
                        placeholder="Add Actor name"
                        id="actorName"
                        name="actorName"
                        onChange={(e) => setActorToAdd({...actorToAdd, name: e.target.value})}
                    />
                </label>
                <button
                    className="actors__add-input"
                    role="button"
                    onClick={addActor}
                    aria-label="Add actor to the film"
                >
                    Add
                </button>
            </div>
            <div>
                <p>Characters:</p>
                <ul>
                    {film.actors.map(actor => (
                        <li className="actor" key={`${actor.name}`}>
                            <p>
                                <b>{actor.character}</b> interpreted by <b>{actor.name}</b>
                            </p>
                            <button
                                className="actor__remove_btn"
                                role="button"
                                aria-label={`Remove ${actor.character} character interpreted by ${actor.name}`}
                                onClick={() => removeActor(actor)}
                            >
                                <img className="cross" src={cross}/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <label htmlFor="synopsis">
            <p>Synopsis</p>
            <textarea
                required
                placeholder="Insert Synopsis"
                id="synopsis"
                name="synopsis"
                onChange={
                    (e) => 
                        handleUpdateSimpleInput(
                            "synopsis", 
                            e.target.value)
                    }
            />
        </label>
        <label htmlFor="averageRating">
            <p>Average Rating</p>
            <input
                required
                type="number"
                placeholder="Insert Average Rating"
                id="averageRating"
                name="averageRating"
                onChange={
                    (e) => 
                        handleUpdateSimpleInput(
                            "averageRating", 
                            Number(e.target.value))
                    }
            />
        </label>
        <label htmlFor="moviePoster">
            <p>URL of the Movie Poster</p>
            <input
                required
                type="text"
                placeholder="Insert URL of the movie poster"
                id="moviePoster"
                name="moviePoster"
                onChange={
                    (e) => 
                        handleUpdateSimpleInput(
                            "moviePoster", 
                            e.target.value)
                    }
            />
        </label>
        <button 
            type="submit"
            onSubmit={() => onSubmit(film)}
        >
            {submitText}
        </button>
    </form>
    )
}