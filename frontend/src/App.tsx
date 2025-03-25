import { mockData } from './__stubs__/films'
import './App.scss'
import { MiniCard } from './components/MiniCard'

function App() {

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

export default App
