import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Routes/Home"
import HomeBody from "./Routes/Home/HomeBody"
import Promotion from "./Routes/Home/Promotion"
import Subscription from "./Routes/Home/Subscription"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeBody />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="sub" element={<Subscription />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
