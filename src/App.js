import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import ServicesPage from "./Components/SecondPage"
import About from "./Components/ThirdPage"
import Contact from "./Components/LastPage"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Home />
        <div className="mt-14">
          <ServicesPage />
        </div>
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}