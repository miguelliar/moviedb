import json
import os

def load_movies(file_path):
    """
    Load movies from a JSON file with pagination.
    :param file_path: Path to the JSON file.
    :return: A list of movies.
    """
    try:
        with open(file_path, 'r') as file:
            movies = json.load(file)
            return movies
    except FileNotFoundError:
        return []

def save_movies(file_path, movies):
    try:
        # Attempt to write movies to a temporary file first
        temp_file_path = file_path + ".tmp"
        with open(temp_file_path, 'w') as temp_file:
            json.dump(movies, temp_file, indent=2)
        os.replace(temp_file_path, file_path)
        return True
    except Exception as e:
        print(f"An error occurred while saving movies: {e}")
        # Ensure the temporary file is removed if something goes wrong
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)
        return False

def filter_movies(movies, **kwargs):
    filtered = movies
    for key, value in kwargs.items():
        if key not in ['synopsis', 'id']:
            if isinstance(value, list):
                filtered = [movie for movie in filtered if set(value).issubset(set(movie.get(key, [])))]
            else:
                filtered = [movie for movie in filtered if movie.get(key) == value]
        elif key in ['id']: 
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
