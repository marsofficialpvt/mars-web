import Navbar from "./components/Navbar"
import Foter from "./components/Foter" 
import Formfill from "./components/Formfill"
function App() {
  return (
    <div className="bg-[rgb(253,238,228)] min-h-screen ">
      <Navbar />
      <div className="text-center pt-20">
        <h1 className="text-red-500 text-6xl font-bold">
          main body 🚀
          <Formfill />
        </h1>
        {/*<p className="text-white">hi this is a new page</p>*/}
      </div>
      <Foter />
    </div>
  )
}

export default App