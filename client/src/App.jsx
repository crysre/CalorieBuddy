import { Navbar } from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
import { Tracker } from "./routes/Tracker"
import { FoodLibrary } from "./routes/FoodLibrary"
import { Auth } from "./routes/Auth"
import { Example } from "./routes/Example"
import { Progress } from "./routes/Progress"

function App() {

  return (
    <>
    <Navbar/>
     <div className=" max-w-7xl mx-auto pt-5 px-6">
    <Routes>
      <Route path="/" element={<Tracker/>} />
      <Route path="/foodlibrary" element={<FoodLibrary/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/progress" element={<Progress/>} />

      <Route path="/example" element={<Example/>} />
    </Routes>
    </div>

    </>
  )
}

export default App
