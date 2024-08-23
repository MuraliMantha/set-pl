// import React from 'react'
// import "./home.css"
// import Navbar from "../Navbar/navbar"
// import Solutions from '../Solutions/solutions'
// import Technologies from '../Technology/technology'
// import Footer from '../Footer/footer'

// const Home = () => {
//   return (
//     <> <div className='home-container'>
//     <div className='scroll-watcher'></div>
//    <Navbar />
  

//    </div>
//    <Solutions />
//    <Technologies />
//    <Footer />
//    </>
//   )
// }

// export default Home

import React from 'react'
import "./home.css"
import Navbar from "../Navbar/navbar"
import Solutions from '../Solutions/solutions'
import Technologies from '../Technology/technology'
import Hero from '../Hero/hero'
import Cards from '../Cards.js/cards'
import Footer from '../Footer/footer'
import CustomizedConepy from '../CustomizedConepy/customizedConepy'
import Chambers from '../Chambers/chambers'
import SingleChamber from '../Chambers/SingleCamber/singleChamber'

const Home = () => {
  return (
    <> <div>
    <div className='scroll-watcher'></div>
   <Navbar />

   

   </div>
   <Hero />
   <Solutions />
   <Cards />

   <Technologies />
   {/* <CustomizedConepy /> */}
   <Footer /> 
   {/* <Chambers/>
 <SingleChamber /> */}
   </>
  )
}

export default Home