import magnifyingGlass from '../assets/magnifyingGlass.svg'
import './Header.scss'

export function Header() {
    return (
    <header className="header">
        <div className="search">
            <label>
                <p className="search__label">Busca una pelicula</p>
                <input className="search__input" type="text"/>
            </label>
            <img className='search__icon' src={magnifyingGlass} />
        </div>
    </header>
    )
}