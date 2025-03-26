import { FilmData } from "../utils/types";

export const mockData: FilmData[] = [
  {
    id: "1",
    name: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    averageRating: 5,
    genres: ["Drama", "Thriller", "Mystery"],
    actors: [
      { name: "Tim Robbins", character: "Andy Dufresne" },
      { name: "Morgan Freeman", character: "Ellis Boyd 'Red' Redding" }
    ],
    synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    moviePoster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
  },
  {
    id: "2",
    name: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    averageRating: 5,
    genres: ["Action", "Thriller", "Drama"],
    actors: [
      { name: "Christian Bale", character: "Bruce Wayne / Batman" },
      { name: "Heath Ledger", character: "Joker" }
    ],
    synopsis: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on Gotham.",
    moviePoster: "https://m.media-amazon.com/images/I/51EbJjlH+IL._AC_.jpg"
  },
  {
    id: "3",
    name: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    averageRating: 5,
    genres: ["Action", "Thriller", "Drama"],
    actors: [
      { name: "Leonardo DiCaprio", character: "Dom Cobb" },
      { name: "Joseph Gordon-Levitt", character: "Arthur" }
    ],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into a target's subconscious.",
    moviePoster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
  },
  {
    id: "4",
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    averageRating: 5,
    genres: ["Comedy", "Drama"],
    actors: [
      { name: "John Travolta", character: "Vincent Vega" },
      { name: "Samuel L. Jackson", character: "Jules Winnfield" }
    ],
    synopsis: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    moviePoster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
  },
  {
    id: "5",
    name: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    averageRating: 5,
    genres: ["Comedy", "Romance", "Drama"],
    actors: [
      { name: "Tom Hanks", character: "Forrest Gump" },
      { name: "Robin Wright", character: "Jenny Curran" }
    ],
    synopsis:
      "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    moviePoster:
      "https://m.media-amazon.com/images/I/61Kc5m2eKYL._AC_SY679_.jpg"
  },
  {
    id: "6",
    name: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    averageRating: 5,
    genres: ["Crime", "Drama"],
    actors: [
      { name: "Marlon Brando", character: "Don Vito Corleone" },
      { name: "Al Pacino", character: "Michael Corleone" }
    ],
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    moviePoster: "https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg"
  },
  {
    id: "7",
    name: "Jurassic Park",
    director: "Steven Spielberg",
    year: 1993,
    averageRating: 5,
    genres: ["Adventure", "Sci-Fi"],
    actors: [
      { name: "Sam Neill", character: "Dr. Alan Grant" },
      { name: "Laura Dern", character: "Dr. Ellie Sattler" }
    ],
    synopsis: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    moviePoster: "https://m.media-amazon.com/images/I/81F+X8+FbRL._AC_SY679_.jpg"
  },
  {
    id: "8",
    name: "The Silence of the Lambs",
    director: "Jonathan Demme",
    year: 1991,
    averageRating: 5,
    genres: ["Crime", "Thriller"],
    actors: [
      { name: "Jodie Foster", character: "Clarice Starling" },
      { name: "Anthony Hopkins", character: "Dr. Hannibal Lecter" }
    ],
    synopsis: "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer.",
    moviePoster: "https://m.media-amazon.com/images/I/51I3c1kBzRL._AC_.jpg"
  },
  {
    id: "9",
    name: "Crouching Tiger, Hidden Dragon",
    director: "Ang Lee",
    year: 2000,
    averageRating: 5,
    genres: ["Action", "Martial Arts"],
    actors: [
      { name: "Chow Yun-Fat", character: "Master Li Mu Bai" },
      { name: "Michelle Yeoh", character: "Yu Shu Lien" }
    ],
    synopsis:
      "A young Chinese warrior steals a sword from a famed swordsman and escapes into a world of romantic adventure.",
    moviePoster:
      "https://m.media-amazon.com/images/I/51+9qKpZ3yL._AC_SY679_.jpg"
  },
  {
    id: "10",
    name: "La La Land",
    director: "Damien Chazelle",
    year: 2016,
    averageRating: 4,
    genres: ["Musical", "Romance"],
    actors: [
      { name: "Ryan Gosling", character: "Sebastian Wilder" },
      { name: "Emma Stone", character: "Mia Dolan" }
    ],
    synopsis:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    moviePoster:
      "https://m.media-amazon.com/images/I/71QxO7y2aPL._AC_SY679_.jpg"
  },
  {
    id: "11",
    name: "Psycho",
    director: "Alfred Hitchcock",
    year: 1960,
    averageRating: 5,
    genres: ["Horror", "Thriller"],
    actors: [
      { name: "Anthony Perkins", character: "Norman Bates" },
      { name: "Janet Leigh", character: "Marion Crane" }
    ],
    synopsis: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    moviePoster: "https://m.media-amazon.com/images/I/51Ew7nKVlFL._AC_.jpg"
  },
  {
    id: "12",
    name: "Back to the Future",
    director: "Robert Zemeckis",
    year: 1985,
    averageRating: 5,
    genres: ["Sci-Fi", "Adventure", "Comedy"],
    actors: [
      { name: "Michael J. Fox", character: "Marty McFly" },
      { name: "Christopher Lloyd", character: "Dr. Emmett Brown" }
    ],
    synopsis: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    moviePoster: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY679_.jpg"
  },
  {
    id: "13",
    name: "Casablanca",
    director: "Michael Curtiz",
    year: 1942,
    averageRating: 5,
    genres: ["Drama", "Romance", "War"],
    actors: [
      { name: "Humphrey Bogart", character: "Rick Blaine" },
      { name: "Ingrid Bergman", character: "Ilsa Lund" }
    ],
    synopsis: "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    moviePoster: "https://m.media-amazon.com/images/I/51UXrGODnmL._AC_.jpg"
  },
  {
    id: "14",
    name: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    year: 2001,
    averageRating: 5,
    genres: ["Fantasy", "Adventure", "Drama"],
    actors: [
      { name: "Elijah Wood", character: "Frodo Baggins" },
      { name: "Ian McKellen", character: "Gandalf" }
    ],
    synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    moviePoster: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY679_.jpg"
  },
  {
    id: "15",
    name: "Alien",
    director: "Ridley Scott",
    year: 1979,
    averageRating: 5,
    genres: ["Sci-Fi", "Horror"],
    actors: [
      { name: "Sigourney Weaver", character: "Ellen Ripley" },
      { name: "Tom Skerritt", character: "Dallas" }
    ],
    synopsis: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
    moviePoster: "https://m.media-amazon.com/images/I/71S7+AVaVRL._AC_SY679_.jpg"
  },
  {
    id: "16",
    name: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    averageRating: 5,
    genres: ["Sci-Fi", "Action"],
    actors: [
      { name: "Keanu Reeves", character: "Neo" },
      { name: "Laurence Fishburne", character: "Morpheus" }
    ],
    synopsis: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to overthrow them.",
    moviePoster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"
  },
  {
    id: "17",
    name: "Spirited Away",
    director: "Hayao Miyazaki",
    year: 2001,
    averageRating: 5,
    genres: ["Animation", "Fantasy", "Adventure"],
    actors: [
      { name: "Rumi Hiiragi", character: "Chihiro Ogino" },
      { name: "Miyu Irino", character: "Haku" }
    ],
    synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    moviePoster: "https://m.media-amazon.com/images/I/51J0X8VM8YL._AC_.jpg"
  },
  {
    id: "18",
    name: "The Shining",
    director: "Stanley Kubrick",
    year: 1980,
    averageRating: 5,
    genres: ["Horror", "Psychological Thriller"],
    actors: [
      { name: "Jack Nicholson", character: "Jack Torrance" },
      { name: "Shelley Duvall", character: "Wendy Torrance" }
    ],
    synopsis: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    moviePoster: "https://m.media-amazon.com/images/I/51+5kVQjNtL._AC_.jpg"
  },
  {
    id: "19",
    name: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    year: 2014,
    averageRating: 4,
    genres: ["Comedy", "Drama"],
    actors: [
      { name: "Ralph Fiennes", character: "M. Gustave" },
      { name: "Tony Revolori", character: "Zero Moustafa" }
    ],
    synopsis: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    moviePoster: "https://m.media-amazon.com/images/I/91jrKX9xjQL._AC_SY679_.jpg"
  },
  {
    id: "20",
    name: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    averageRating: 5,
    genres: ["Thriller", "Drama", "Dark Comedy"],
    actors: [
      { name: "Song Kang-ho", character: "Ki-taek" },
      { name: "Cho Yeo-jeong", character: "Chung-sook" }
    ],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    moviePoster: "https://m.media-amazon.com/images/I/91sustfojBL._AC_SL1500_.jpg"
  },
  {
    id: "21",
    name: "Apocalypse Now",
    director: "Francis Ford Coppola",
    year: 1979,
    averageRating: 5,
    genres: ["War", "Drama"],
    actors: [
      { name: "Martin Sheen", character: "Captain Benjamin Willard" },
      { name: "Marlon Brando", character: "Colonel Walter Kurtz" }
    ],
    synopsis: "During the Vietnam War, a U.S. Army officer is sent on a mission to assassinate a renegade Special Forces Colonel who has gone rogue.",
    moviePoster: "https://m.media-amazon.com/images/I/51A8l+FxFNL._AC_.jpg"
  },
  {
    id: "22",
    name: "The Wolf of Wall Street",
    director: "Martin Scorsese",
    year: 2013,
    averageRating: 5,
    genres: ["Biography", "Comedy", "Crime"],
    actors: [
      { name: "Leonardo DiCaprio", character: "Jordan Belfort" },
      { name: "Jonah Hill", character: "Donnie Azoff" }
    ],
    synopsis: "Based on the true story of Jordan Belfort, a stockbroker who rises to wealth and power but falls into crime and corruption.",
    moviePoster: "https://m.media-amazon.com/images/I/81c9ZKb1JPL._AC_SY679_.jpg"
  },
  {
    id: "23",
    name: "Eternal Sunshine of the Spotless Mind",
    director: "Michel Gondry",
    year: 2004,
    averageRating: 5,
    genres: ["Romance", "Drama", "Sci-Fi"],
    actors: [
      { name: "Jim Carrey", character: "Joel Barish" },
      { name: "Kate Winslet", character: "Clementine Kruczynski" }
    ],
    synopsis:
      "When a couple's relationship turns sour, they undergo a procedure to have their memories of each other erased, only to realize their deep connection.",
    moviePoster:
      "https://m.media-amazon.com/images/I/71p8G+3hE1L._AC_SY679_.jpg"
  },
  {
    id: "24",
    name: "The Green Mile",
    director: "Frank Darabont",
    year: 1999,
    averageRating: 5,
    genres: ["Drama", "Fantasy"],
    actors: [
      { name: "Tom Hanks", character: "Paul Edgecomb" },
      { name: "Michael Clarke Duncan", character: "John Coffey" }
    ],
    synopsis:
      "A death row prison guard discovers that one of his inmates possesses a mysterious gift that changes their lives forever.",
    moviePoster:
      "https://m.media-amazon.com/images/I/91XQ7gX6ySL._AC_SY679_.jpg"
  },
  {
    id: "25",
    name: "Life of Pi",
    director: "Ang Lee",
    year: 2012,
    averageRating: 4,
    genres: ["Adventure", "Drama"],
    actors: [
      { name: "Suraj Sharma", character: "Pi Patel" },
      { name: "Irrfan Khan", character: "Adult Pi Patel" }
    ],
    synopsis:
      "A young man survives a shipwreck and forms an unexpected bond with a Bengal tiger while stranded on a lifeboat in the Pacific Ocean.",
    moviePoster:
      "https://m.media-amazon.com/images/I/71xZx0dUeKL._AC_SY679_.jpg"
  },
  {
    id: "26",
    name: "The Silence of the Lambs",
    director: "Jonathan Demme",
    year: 1991,
    averageRating: 5,
    genres: ["Crime", "Drama", "Thriller"],
    actors: [
      { name: "Jodie Foster", character: "Clarice Starling" },
      { name: "Anthony Hopkins", character: "Dr. Hannibal Lecter" }
    ],
    synopsis: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    moviePoster: "https://m.media-amazon.com/images/I/51I3c1kBzRL._AC_.jpg"
  },
  {
    id: "27",
    name: "Whiplash",
    director: "Damien Chazelle",
    year: 2014,
    averageRating: 5,
    genres: ["Drama", "Music"],
    actors: [
      { name: "Miles Teller", character: "Andrew Neiman" },
      { name: "J.K. Simmons", character: "Terence Fletcher" }
    ],
    synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    moviePoster: "https://m.media-amazon.com/images/I/71Nk9LKNiRL._AC_SY679_.jpg"
  },
  {
    id: "28",
    name: "The Departed",
    director: "Martin Scorsese",
    year: 2006,
    averageRating: 5,
    genres: ["Crime", "Drama", "Thriller"],
    actors: [
      { name: "Leonardo DiCaprio", character: "Billy Costigan" },
      { name: "Matt Damon", character: "Colin Sullivan" }
    ],
    synopsis: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    moviePoster: "https://m.media-amazon.com/images/I/51BXmPPsVzL._AC_.jpg"
  },
  {
    id: "29",
    name: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    averageRating: 5,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    actors: [
      { name: "Matthew McConaughey", character: "Cooper" },
      { name: "Anne Hathaway", character: "Amelia Brand" }
    ],
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    moviePoster: "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_SY679_.jpg"
  }
];

export const posterFallback = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mcHVzLjjPjJNNYOT8v2f0rYU2C5wzvf_BnvhayR8N6ENCTXSP9quG0ejpmJ2w6EBWYw&usqp=CAU";
