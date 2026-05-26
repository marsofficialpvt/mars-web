import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="bg-[rgb(253,238,228)] min-h-screen ">
      <Navbar />
      <div className="text-center pt-20">
        <h1 className="text-red-500 text-6xl font-bold">
          Welcome Bharath 🚀
        </h1>
        <p className="text-white">hi this is a new page</p>
      </div>
    </div>
  )
}

export default App