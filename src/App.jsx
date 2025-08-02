import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 

export const  App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  },[]);

  return (
    <main>

      {/* Gradient Image */}
      <img className="absolute top 0 right-0 opacity-70 -z-1" src="/gradient.png" alt="Gradient Background"  />

      {/* Blur Effect*/}
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-1 '>
         </div>

{/* Fixed-height layout */}
      <div className="h-full flex flex-col">

      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* Footer */}
      <Footer/>
    </div>
    </main>
  )
}
export default App
