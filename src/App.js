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
import SingleTechnology from "./components/SingleTechnology/singleTechnology";
import ElectronicTech from "./components/SingleTechnology/electronictech";
import CustomizedTech from "./components/SingleTechnology/customisedtech";
import AirBag from "./components/SingleTechnology/airbag";
import SinglePointController from "./components/Controllers/singlePoint";
import ProgrammableController from "./components/Controllers/programmable";
import Volaya from "./components/voloya/volaya";
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
        <Route path="/valoya-light-system" element={<Volaya />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/chamberMainsession" element={<ChamberMainsession />} />
        <Route path="/mediumTermStorage" element={<MediumTermStorageChamber />} />
        <Route path="/plantgrowthchamberrefurbished" element={<Plantgrowthchamberrefurbished />} />
        <Route path="/insectRefurbishmentSolution" element={<InsectRefurbishmentSolution />} />
        <Route path="/mediumtermstorageredundant" element={<Mediumtermstorageredundant />} />
        <Route path="/automobile-test-chamber" element={<SingleTechnology />} />
        <Route path="/electronic-technology" element={<ElectronicTech />} />
        <Route path="/customized-technology" element={<CustomizedTech />} />
        <Route path="/air-bags" element={<AirBag />} />
        <Route path="/single-point-controller" element={<SinglePointController />} />
        <Route path="/programmable-controller" element={<ProgrammableController/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;