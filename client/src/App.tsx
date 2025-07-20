import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Reference from "./pages/reference/Reference"
import Socials from "./pages/socials/Socials"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </Router>
  )
}