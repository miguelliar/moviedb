from typing import Annotated

from fileReader import add_movie, delete_movie, get_movies, load_movies, modify_movie, save_movies
from fastapi import FastAPI, Response, status, Body
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import os
import uuid

class Actor(BaseModel): 
    name: str
    character: str
class Movie(BaseModel):
    id: str | None
    name: str
    director: str
    year: int
    averageRating: float | None
    genres: list[str]
    actors: list[Actor]
    synopsis: str
    moviePoster: str | None

app = FastAPI()

file_path = "movies.json"
dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, file_path)
movies = []

def load():
    global movies
    if (movies.__len__() == 0):
        movies = load_movies(filename)

@app.get("/peliculas")
async def root(page: int|None = 1, page_size: int|None = 12):
    load()
    start = (page - 1) * page_size
    end = start + page_size

    try:
        return movies[start:end]
    finally:
        return movies[0: 12]

@app.get("/peliculas/{id_pelicula}")
async def read_item(id_pelicula: str):
    load()
    return get_movies(movies, id=id_pelicula)

@app.get("/peliculas/search")
async def search_item(query: str|None = None, page_size: int|None = 12, page: int|None = 1, **kwargs):
    load()
    return get_movies(movies, page, page_size, query, kwargs)

@app.delete("/peliculas/{id}")
async def delete_item(id:str, response: Response):
    load()
    success_delete=delete_movie(movies, id)
    success_save= save_movies(filename, movies)
    if success_delete & success_save:
        save_movies(filename, movies)
        response.status_code = status.HTTP_204_NO_CONTENT
    else : 
        response.status_code = status.HTTP_400_BAD_REQUEST


@app.put("/peliculas")
async def add_item(movie: Annotated[Movie, Body(embed=True)], response: Response):
    id = str(uuid.uuid4())
    load()
    movie.id = id
    add_movie(movies, jsonable_encoder(movie))
    success= save_movies(filename, movies)
    if success:
        save_movies(filename, movies)
        response.status_code = status.HTTP_200_OK
    else : 
        response.status_code = status.HTTP_400_BAD_REQUEST

@app.post("/peliculas/update")
async def update_item(movie: Annotated[Movie, Body(embed=True)]):
    load()
    modify_movie(movies, movie.id, name = movie.name, director = movie.director, actors = jsonable_encoder(movie.actors), year = movie.year, averageRating= movie.averageRating, genres= movie.genres, synopsis = movie.synopsis, moviePoster = movie.moviePoster)
    save_movies(filename, movies)