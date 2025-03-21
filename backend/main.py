from fastapi import FastAPI

app = FastAPI()


@app.get("/peliculas")
async def root():
    return {"message": "Hello World"}

@app.get("/peliculas/{id_pelicula}")
async def read_item(id_pelicula: str):
    return {"id": id_pelicula}