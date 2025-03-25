import { mockData } from "../__stubs__/films"
import { MiniCard } from "../components/MiniCard"
import './Home.scss'

export const Home = () => {
    return ( 
    <main className='search-page'>
        <section className='search-filters'>
        Filtros
        </section>
        <section className='search-grid'>
        {mockData.map((film, index) => {
            return (
            <MiniCard film={film} key={`film-${film.name}-${index}`} />
        )})}
        </section>
    </main>
    )
}