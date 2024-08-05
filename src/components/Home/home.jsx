import React from 'react'
import "./home.css"
import Navbar from "../Navbar/navbar"
import Solutions from '../Solutions/solutions'
import Technologies from '../Technology/technology'

const Home = () => {
  return (
    <> <div className='home-container'>
    <div className='scroll-watcher'></div>
   {/* <Navbar /> */}
  

   </div>
   <Solutions />
   <Technologies />
   </>
  )
}

export default Home