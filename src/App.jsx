import './App.css'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Model from './components/Model'
import Navbar from './components/Navbar'

function App() {

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
    </main>
  )
}

export default App
