import { useSearchParams } from "react-router-dom"
import { mockData } from "../__stubs__/films"
import { MiniCard } from "../components/MiniCard"
import { Search } from "../components/Search"
import { useEffect, useState } from "react"
import { FilmData } from "../utils/types"
import { InputFilter } from "../components/filters/FilterInput"
import './Home.scss'
import { FiltersApplied } from "../components/filters/FiltersApplied"

export const Home = () => {
    const [searchParams] = useSearchParams()
    const [films, setFilms] = useState<FilmData[]>([])
    //name search
    const query = searchParams.get('query')

    //filtering
    const director = searchParams.get('director')
    const year = searchParams.get('year')
    const avgRating = searchParams.get('rating')

    useEffect(() => {
        (async () => {
            let filteredFilms;
            if (query) {
                filteredFilms = mockData.filter(
                    film => film.name.toLowerCase()
                    .includes(query.trim().toLocaleLowerCase()))
            } else {
                filteredFilms = mockData
            }

            if (director || year || avgRating) {
                setFilms(filteredFilms.filter(film => 
                    (!director || film.director.toLocaleLowerCase().includes(director.toLocaleLowerCase()))
                    && ( !year || film.year === Number(year))
                    && (!avgRating || film.averageRating >= Number(avgRating))
                ))
            } else {
                setFilms(filteredFilms)
            }

        })()
    }, [avgRating, director, query, year])

    return ( 
    <main className='search-page'>
        <section className='search-filters'>
            <Search />
            <div className="filters">
                <InputFilter filter={{id: 'director', name: 'Director'}} type="text" />
                <InputFilter filter={{id: 'year', name: 'Year'}} type="number" />
                <InputFilter filter={{id: 'rating', name: 'Average Rating' }} type="number" />
            </div>
            <FiltersApplied />
        </section>
        {
            films.length > 0 
            && (query || director || year || avgRating) 
            && <h2>Films found</h2>}
        <section className='search-grid'>
            {films.map((film, index) => {
                return (
                <MiniCard film={film} key={`film-${film.name}-${index}`} />
            )})}
        </section>
    </main>
    )
}