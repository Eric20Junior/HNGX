import { Routes, Route } from "react-router-dom"

import { Popup } from "./pages"

function App() {

  return (
    <div>
      <Routes>
        <Route path="" element={ <Popup /> } />
      </Routes>
    </div>
  )
}

export default App
