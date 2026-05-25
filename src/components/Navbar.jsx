function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Bharath
      </h1>

      <ul className="flex gap-6">
        <li className="hover:text-red-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">About</li>
        <li className="hover:text-red-500 cursor-pointer">Projects</li>
        <li className="hover:text-red-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar