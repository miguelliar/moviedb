import { FilmData } from "../utils/types"
import starLogo from '../assets/star.svg'
import './MiniCard.scss'
import { posterFallback } from "../__stubs__/films"
import { Link } from "react-router-dom"

export const MiniCard = ({film}: {film: FilmData}) => {

  return (
    //temporary subtraction until connected to backend
    <Link 
      className="film-minicard"
      style={{ backgroundImage: `url(${film.moviePoster}), url(${posterFallback})` }}
      to={`/film/${Number(film.id)-1}`}
    >
      <div className="film-minicard__description">
        <div className="description__primary">
          <p>{film.name}</p>
          <p className="rating"><img src={starLogo}/>{film.averageRating}</p>
        </div>
        <div className="description__details">
          <p>By {film.director}</p>
          <p>{film.year}</p>
        </div>
      </div>
  </Link>)
}