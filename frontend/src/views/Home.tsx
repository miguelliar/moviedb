import { useSearchParams } from "react-router-dom"
import { mockData } from "../__stubs__/films"
import { MiniCard } from "../components/MiniCard"
import { Search } from "../components/Search"
import './Home.scss'
import { useEffect, useState } from "react"
import { FilmData } from "../utils/types"

export const Home = () => {
    const [searchParams] = useSearchParams()
    const [films, setFilms] = useState<FilmData[]>([])
    const query = searchParams.get('query')

    useEffect(() => {
        (async () => {
            if (query) {
                setFilms(mockData.filter(film => film.name.toLowerCase().includes(query)))
            } else {
                setFilms(mockData)
            }
        })()
    }, [query])

    return ( 
    <main className='search-page'>
        <section className='search-filters'>
            <Search />
            Filtros
        </section>
        <section className='search-grid'>
        {films.map((film, index) => {
            return (
            <MiniCard film={film} key={`film-${film.name}-${index}`} />
        )})}
        </section>
    </main>
    )
}