import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/home";
// import SingleChamber from "./components/Chambers/SingleCamber/singleChamber";
import Navbar from "./components/Navbar/navbar";
import CustomizedConepy from "./components/CustomizedConepy/customizedConepy";
import ConepyPage from "./components/CustomizedConepy/conepyPage";
import Footer from "./components/Footer/footer";
import ChamberMainsession from "./components/ChambarsMainSesstion/chamberMainsession";
import SingleProductChamber from "./components/Main-singleCahmber/SingleProductChamber";
import MediumTermStorageChamber from "./components/Main-singleCahmber/MediumTermStorageChamber";
import Plantgrowthchamberrefurbished from "./components/Main-singleCahmber/Plantgrowthchamberrefurbished";
import InsectRefurbishmentSolution from "./components/Main-singleCahmber/InsectRefurbishmentSolution";
import Mediumtermstorageredundant from "./components/Main-singleCahmber/mediumtermstorageredundant";
import About from "./components/About/about";
import ContactUs from "./components/Contact/contact";
// import About from "./components/About/About";

function App() {

  return (
    <Router>
              <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/singleProductChamber" element={<SingleProductChamber />} />
        <Route path="/light-canopi-system" element={<ConepyPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/chamberMainsession" element={<ChamberMainsession />} />
        <Route path="/mediumTermStorage" element={<MediumTermStorageChamber />} />
        <Route path="/plantgrowthchamberrefurbished" element={<Plantgrowthchamberrefurbished />} />
        <Route path="/insectRefurbishmentSolution" element={<InsectRefurbishmentSolution />} />
        <Route path="/mediumtermstorageredundant" element={<Mediumtermstorageredundant />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;