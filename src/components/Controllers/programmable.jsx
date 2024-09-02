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
                    <h1 className='programmable-controller-heading'>Programmable Controller</h1>
                    <p className='programmable-controller-para'>
                        Our advanced Programmable Controller is designed to optimize environmental conditions 
                        in plant growth chambers, ensuring precise control over temperature, humidity, and lighting. 
                        Equipped with a user-friendly Schneider touchscreen display, this controller offers both auto 
                        and manual modes to cater to varying needs, making it suitable for research facilities and industrial applications.
                    </p>
                </div>
            </div>
            
            <div className="programmable-controller-content">
                <h1 className='programmable-controller-content-heading'>Key Features</h1>
                <ul className='programmable-controller-features-card'>
                    <li><strong>Dual Operating Modes:</strong> Switch between auto and manual modes, with fixed and programmable sub-modes.</li>
                    <li><strong>Comprehensive Environmental Control:</strong> Manage temperature, humidity, and lighting with precise setpoints.</li>
                    <li><strong>Advanced Programming Capabilities:</strong> Set up complex environmental cycles with an easy scheduling system.</li>
                    <li><strong>Real-Time Monitoring:</strong> Track all critical parameters directly from the main display page.</li>
                    <li><strong>User-Friendly Interface:</strong> Navigate easily through settings, I/O status, and alarms.</li>
                    <li><strong>High Connectivity:</strong> USB ports for data logging and RS485 ModBUS-RTU for system integration.</li>
                </ul>

                <h1 className='programmable-controller-tech-specs-heading'>Technical Specifications</h1>
                <ul className='programmable-controller-tech-specs-card'>
                    <li><strong>Analog Inputs:</strong> 10 configurable inputs supporting various sensors (NTC, PTC, voltage, current).</li>
                    <li><strong>Digital Inputs and Outputs:</strong> 20 digital inputs and 15 relay-based outputs.</li>
                    <li><strong>Analog Outputs:</strong> 6 analog outputs for precise control of devices.</li>
                    <li><strong>Power Supply:</strong> Operates on 24Vac/dc with low power consumption.</li>
                    <li><strong>Operating Conditions:</strong> Suitable for environments ranging from -10°C to 60°C with humidity below 90%.</li>
                </ul>

                <h1 className='programmable-controller-apps'>Applications</h1>
                <div className="programmable-controller-apps-container">
                    <div className="programmable-controller-app-card">
                        <img src="./assets/research.jpg" alt="Greenhouse" className="app-image" />
                        <h2>Greenhouses and Indoor Farming</h2>
                        <p>The Programmable Controller ensures optimal conditions for plant growth, helping maximize crop yield and quality.</p>
                    </div>
                    <div className="programmable-controller-app-card">
                        <img src="./assets/research2.jpg" alt="Biotechnology Labs" className="app-image" />
                        <h2>Biotechnology Labs</h2>
                        <p>Provides unmatched precision in environmental control for experiments, ideal for plant genetics, tissue culture, and more.</p>
                    </div>
                    <div className="programmable-controller-app-card">
                        <img src="./assets/research.jpg" alt="Industrial HVAC Systems" className="app-image" />
                        <h2>Industrial HVAC Systems</h2>
                        <p>Integrated into HVAC systems to control temperature and humidity, ensuring optimal conditions across large facilities.</p>
                    </div>
                    {/* Add more application cards as needed */}
                </div>
            </div>
        </div>
        </>
    );
};

export default ProgrammableController;
