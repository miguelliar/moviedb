import json
import os

def load_movies(file_path, page=1, page_size=10):
    """
    Load movies from a JSON file with pagination.
    :param file_path: Path to the JSON file.
    :param page: Current page number.
    :param page_size: Number of items per page.
    :return: A paginated list of movies.
    """
    try:
        with open(file_path, 'r') as file:
            movies = json.load(file)
            start = (page - 1) * page_size
            end = start + page_size
            return movies[start:end]
    except FileNotFoundError:
        return []

def save_movies(file_path, movies):
    with open(file_path, 'w') as file:
        json.dump(movies, file, indent=2)

def filter_movies(movies, **kwargs):
    filtered = movies
    for key, value in kwargs.items():
        if key not in ['synopsis', 'id']:
            if isinstance(value, list):
                filtered = [movie for movie in filtered if set(value).issubset(set(movie.get(key, [])))]
            else:
                filtered = [movie for movie in filtered if movie.get(key) == value]
    return filtered

def get_movies(movies, page=1, page_size=10, query=None, **kwargs):
    """
    Retrieve movies based on criteria with pagination.
    :param movies: List of all movies.
    :param page: Current page number.
    :param page_size: Number of items per page.
    :param name: Filter by movie name.
    :param actor: Filter by actor name.
    :param director: Filter by director name.
    :return: A paginated list of filtered movies.
    """
    filtered = []
    if query:
        byName = [movie for movie in movies if query.lower() in movie['name'].lower()]
        byActor = [movie for movie in movies if any(query.lower() in a['name'].lower() for a in movie['actors'])]
        byDirector = [movie for movie in movies if query.lower() in movie['director'].lower()]
        filtered.extend(byName)
        filtered.extend(byActor)
        filtered.extend(byDirector)
    else:
        filtered = movies

    filtered = filter_movies(filtered, **kwargs)
    
    # Apply pagination
    start = (page - 1) * page_size
    end = start + page_size
    return filtered[start:end]

def modify_movie(movies, movie_id, **kwargs):
    for movie in movies:
        if movie['id'] == movie_id:
            movie.update(kwargs)
            return True
    return False

def add_movie(movies, new_movie):
    movies.append(new_movie)

def delete_movie(movies, movie_id):
    for i, movie in enumerate(movies):
        if movie['id'] == movie_id:
            del movies[i]
            return True
    return False

# Example usage
if __name__ == "__main__":
    file_path = "movies.json"
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, file_path)
    movies = load_movies(filename)

    # Get movies by name
    print("Movies with 'Pulp' in the name:")
    print(get_movies(movies, query="Pulp"))

    # Get movies by actor
    print("\nMovies with John Travolta:")
    print(get_movies(movies, query="John Travolta"))

    # Get movies by director and year
    print("\nMovies directed by Quentin Tarantino in 1994:")
    print(get_movies(movies, id="4"))

    # Modify a movie
    if modify_movie(movies, "4", averageRating=4.9):
        print("\nMovie rating updated")

    # Add a new movie
    new_movie = {
        "id": "5",
        "name": "Inception",
        "director": "Christopher Nolan",
        "year": 2010,
        "averageRating": 4.8,
        "genres": ["Action", "Sci-Fi"],
        "actors": [
            {"name": "Leonardo DiCaprio", "character": "Cobb"},
            {"name": "Joseph Gordon-Levitt", "character": "Arthur"}
        ],
        "synopsis": "A thief who enters the dreams of others to steal secrets from their subconscious.",
        "moviePoster": "https://example.com/inception-poster.jpg"
    }
    add_movie(movies, new_movie)
    print("\nNew movie added")


    # Delete a movie
    if delete_movie(movies, "5"):
        print("\nMovie deleted")

    # Save changes
    save_movies(filename, movies)
    print("\nChanges saved to file")
