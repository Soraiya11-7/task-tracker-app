import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <>
    <Navbar></Navbar>
      <div className="min-h-[calc(100vh-124px)] ">
      <h1 className='bg-sky-300 text-center'>Task Tracker</h1>
      </div>
      <Footer></Footer>
    
    </>
   
  )
}

export default App
