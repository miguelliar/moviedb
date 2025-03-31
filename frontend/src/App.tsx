import { Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import { Film } from "./views/Film"
import { FilmCreate } from "./views/FilmCreate"
import { FilmEdit } from "./views/FilmEdit"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/film/:id" element={<Film />} />
      <Route path="/film/:id/edit" element={<FilmEdit />} />
      <Route path="/film/add" element={<FilmCreate />} />
    </Routes>
  )
}

export default App
