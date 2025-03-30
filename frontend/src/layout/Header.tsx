import { Link } from 'react-router-dom'
import home from '../assets/home.svg'
import plus from '../assets/plus.svg'
import './Header.scss'

export function Header() {
    return (
    <header className="header">
        <Link className='home' to={'/'} >
            <img className='home__logo' src={home}/>
            <b>Home</b>
        </Link>
        <Link className='add' to="/film/add">
            <img className='add__logo' src={plus}/>
            <b>Create film</b>
        </Link>
    </header>
    )
}
