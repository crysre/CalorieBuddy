import { Navbar } from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
import { Tracker } from "./routes/Tracker"

function App() {

  return (
    <>
    <Navbar/>
     <div className=" max-w-7xl mx-auto pt-5 px-6">
    <Routes>
      <Route path="/" element={<Tracker/>} />
    </Routes>
    </div>

    </>
  )
}

export default App
