import { FilmData } from "../utils/types"
import starLogo from '../assets/star.svg'
import './MiniCard.scss'

export const MiniCard = ({film}: {film: FilmData}) => {
    return (<div
            className='film-minicard'
          >
            <p>Titulo: {film.name}</p>
            <p>Director: {film.director}</p>
            <p>Año: {film.year}</p>
            <p><img src={starLogo}/>{film.averageRating}</p>
          </div>)
}