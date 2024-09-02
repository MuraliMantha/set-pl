import React from 'react';
import './programmable.css';
// Add more images as necessary

const ProgrammableController = () => {
    return (
        <>
        <div className="programmable-controller-bg-img">
      <h1 className="programmable-controller-bg-heading">Customized Technology</h1>
    </div>
        <div className="programmable-controller-container">
            <div className="programmable-controller-header">
                <img src="./assets/ppi.jpg" alt="Programmable Controller" className="controller-image" />
                <div className="programmable-controller-header-text">
                    <h1 className='programmable-controller-heading'>Single-point Controller</h1>
                    <p className='programmable-controller-para'>
                        The Single Point Controller is designed for precise control in critical applications. 
                        Whether it's managing temperature, pressure, or humidity, our controller offers exceptional accuracy 
                        and reliability. With an intuitive interface and robust functionality, it is ideal for both industrial 
                        and commercial environments.
                    </p>
                </div>
            </div>
            
            <div className="programmable-controller-content">
                <h1 className='programmable-controller-content-heading'>Key Features</h1>
                <ul className='programmable-controller-features-card'>
                <li><strong>Precision Control:</strong> Achieve unmatched accuracy in controlling single parameters like temperature, pressure, or humidity.</li>
                    <li><strong>Easy Integration:</strong> Seamlessly integrates into existing systems with minimal configuration.</li>
                    <li><strong>Flexible Operation:</strong> Offers both manual and automated control modes to suit diverse needs.</li>
                    <li><strong>Real-Time Monitoring:</strong> Monitor real-time data and make adjustments on-the-fly through a user-friendly interface.</li>
                    <li><strong>Durable Design:</strong> Built to withstand industrial environments, ensuring long-lasting performance.</li>
                    <li><strong>High Connectivity:</strong> Supports various communication protocols for integration with external systems.</li>
                </ul>

                <h1 className='programmable-controller-tech-specs-heading'>Technical Specifications</h1>
                <ul className='programmable-controller-tech-specs-card'>
                <li><strong>Analog Inputs:</strong> Configurable inputs for various sensors (temperature, pressure, humidity).</li>
                    <li><strong>Digital Outputs:</strong> Multiple relay-based outputs for controlling external devices.</li>
                    <li><strong>Power Supply:</strong> Operates on 24Vac/dc with low power consumption.</li>
                    <li><strong>Operating Conditions:</strong> Suitable for a wide range of environments, from industrial to commercial settings.</li>
                    <li><strong>Communication:</strong> Includes RS485 ModBUS-RTU and other protocols for system integration.</li>
                </ul>

                <h1 className='programmable-controller-apps'>Applications</h1>
                <div className="programmable-controller-apps-container">
                    <div className="programmable-controller-app-card">
                        <img src="./assets/research.jpg" alt="Greenhouse" className="app-image" />
                        <h2>Laboratories</h2>
                        <p>Ideal for maintaining precise environmental conditions in research labs, ensuring accuracy in experiments.</p>
                    </div>
                    <div className="programmable-controller-app-card">
                        <img src="./assets/research2.jpg" alt="Biotechnology Labs" className="app-image" />
                        <h2>Industrial Automation</h2>
                        <p>Perfect for controlling critical parameters in automated industrial systems, ensuring efficiency and safety.</p>
                    </div>
                    <div className="programmable-controller-app-card">
                        <img src="./assets/research.jpg" alt="Industrial HVAC Systems" className="app-image" />
                        <h2>Commercial HVAC Systems</h2>
                        <p>Provides reliable control over temperature and air quality in commercial HVAC applications.</p>
                    </div>
                    {/* Add more application cards as needed */}
                </div>
            </div>
        </div>
        </>
    );
};

export default ProgrammableController;
