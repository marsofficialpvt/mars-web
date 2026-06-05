import logo from "../assets/logo.png"
import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative bg-[rgba(152,73,46,0.5)] text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full md:w-12 md:h-12"
          />
          <div>
            {/* Desktop Text */}
            <div className="hidden md:block">
              <h1 className="text-base font-bold text-white">
                Multi Architecture & Research Solutions
              </h1>

              <p className="text-2xl font-bold">
                MARS
              </p>
            </div>

            {/* Mobile Text */}
            <div className="block md:hidden">
              <h1 className="text-2xl font-bold">
                MARS
              </h1>
            </div>  
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="cursor-pointer hover:text-red-500">Home</li>
          <li className="cursor-pointer hover:text-red-500">About</li>
          <li className="cursor-pointer hover:text-red-500">Projects</li>
          <li className="cursor-pointer hover:text-red-500">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full md:hidden flex flex-col gap-4 text-center bg-gray-900 p-4 shadow-lg z-50">

          <li className="cursor-pointer hover:text-red-500">
            Home
          </li>

          <li className="cursor-pointer hover:text-red-500">
            About
          </li>

          <li className="cursor-pointer hover:text-red-500">
            Projects
          </li>

          <li className="cursor-pointer hover:text-red-500">
            Contact
          </li>

        </ul>
      )}

    </nav>
  )
}

export default Navbar