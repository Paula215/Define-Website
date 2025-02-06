import Hero from './components/Hero/Hero'
import NosotrosSection from './components/Hero/Us'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Hero/Services'
import Scchedule from './components/Hero/Schedule'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className= "overflow-x-hidden">
      <Navbar />
      <Hero />
      <NosotrosSection /> 
      <Service />
      <Scchedule />
      <Footer />
      
      
    </div>
  )
}

export default App
