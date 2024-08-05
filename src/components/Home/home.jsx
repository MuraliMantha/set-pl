import React from 'react'
import "./home.css"
import Navbar from "../Navbar/navbar"
import Solutions from '../Solutions/solutions'
import Technologies from '../Technology/technology'
import Footer from '../Footer/footer'

const Home = () => {
  return (
    <> <div className='home-container'>
    <div className='scroll-watcher'></div>
   {/* <Navbar /> */}
  

   </div>
   <Solutions />
   <Technologies />
   <Footer />
   </>
  )
}

export default Home