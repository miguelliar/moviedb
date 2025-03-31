import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FilmForm } from "../components/FilmForm"
import { FilmData } from "../utils/types"
import { mockData } from "../__stubs__/films"

export function FilmEdit() {

    const [film, setFilm] = useState<FilmData|null>(null)
    const { id } = useParams()
    useEffect(() => {
        //TODO: substitute this by endpoint call
        if (id) {
            setFilm(mockData[Number.parseInt(id) - 1])
        }
    }, [id])

    const onSubmit = (film: FilmData) => {
        //TODO: connect with endpoint
        console.log("film updated: " + JSON.stringify(film))
    }

    return <main>
        {
            film &&
            <FilmForm defaultFilm={film} onSubmit={onSubmit} submitText="Update film" />
        }
    </main>
}