import { useSearchParams } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"
import magnifyingGlass from '../assets/magnifyingGlass.svg'
import './Search.scss'

export function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams ?? "")
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }

        setSearchParams(params.toString())
    }, 500)
    const query = new URLSearchParams(searchParams ?? "").get('query') ?? ''

    return (
    <div className="search">
            <label>
                <p className="search__label">Busca una pelicula</p>
                <input 
                    className="search__input"
                    type="text"
                    placeholder='Search any film...'
                    defaultValue={query}
                    onChange={
                        (event) => 
                            handleSearch(event.target.value)
                    }
                />
            </label>
            <img className='search__icon' src={magnifyingGlass} />
        </div>
    )
}