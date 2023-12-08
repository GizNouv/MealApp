import { DiscountCart, Hero, Nav } from './components'
import FeaturedRestaurants from './components/sections/FeaturedRestaurants'
import Features from './components/sections/Features'
import Footer from './components/sections/Footer'
import Guid from './components/sections/Guid'
import Image from './components/sections/Image'
import InstallTheApp from './components/sections/InstallTheApp'
import MealCartSection from './components/sections/MealCartSection'
import PopularItems from './components/sections/PopularItems'
import SearchByFood from './components/sections/SearchByFood'

function App() {

  return (
    <main className='relative'>
      <Nav/>
      <section className='bg-hero pt-[6rem] bg-cover'>
        <Hero/>
      </section>
      <section className='max-container py-[5rem] grid grid-cols-4 gap-4'>
        <DiscountCart/>
      </section>
      <section className='bg-guid'>
        <Guid/>
      </section>
      <section className=''>
       <PopularItems/>
      </section>
      <section className='max-container'>
        <FeaturedRestaurants/>
      </section>
      <section className='bg-[#FEFAF1] mt-[5rem]'>
        <SearchByFood/>
      </section>
      <section className='bg-[#FEEFD0] pt-[8.125rem] pb-20'>
        <Features/>
      </section>
      <section className='bg-[#FEEFD0]'>
        <InstallTheApp/>
      </section>
      <section className='py-20'>
        <MealCartSection/>
      </section>
      <section className='bg-footer flex-center flex-col bg-cover bg-center'>
        <Image/>
      </section>
      <footer className='bg-[#212121] pt-[91px] pb-[69px]'>
        <Footer/>
      </footer>
    </main>
  )
}

export default App
