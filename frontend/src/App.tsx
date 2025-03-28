import { Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import { Film } from "./views/Film"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/film/:id" element={<Film />} />
    </Routes>
  )
}

export default App
