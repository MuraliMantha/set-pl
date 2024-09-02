import React, { useState } from 'react';
import "./singleChamberDimensions.css";

const dimensionsData = [
  {
    key: 'singlechamber-1',
    title: 'Overview',
    image: '/assets/smallChamber.jpg',
    content: `The SET8-THL Plant Growth Walk-in Chamber is engineered to simulate a wide range of environmental conditions for optimized plant growth. Designed for precision, this chamber ensures the highest standards in climate control, lighting, and security, making it an ideal solution for research and commercial applications.`
  },
  {
    key: 'singlechamber-2',
    title: 'Key Specifications',
    image: '/assets/mediumChamber.jpg',
    content: `Climate Simulation:
    
    Interior Dimensions: 7.4’L x 7.4’W x 7.8’H
    Exterior Dimensions: 8.0’L x 8.0’W x 8.0’H
    Temperature Range: 15° - 40°C
    Humidity Range: 65% - 85%RH (within temperature range of 21° - 35°C)
    Temperature Accuracy: ≤1°C
    Humidity Accuracy: ±3%RH
    Growth Area: 48 sq.ft
    Growth Height: 20 inches between the light and shelf
    Structural Features:
    
    Exterior Shell: Pre-painted plate
    Interior Shell: Pre-painted plate
    Interior Floor: Epoxy flooring/Concrete floor (provided by customer)
    Insulation: 4" thick hard polyurethane foam
    Door: Single wing door with inner viewing window, lock, and key, fitted with sweeping gasket and light-tight cover`
  },
  {
    key: 'singlechamber-3',
    title: 'Resources',
    image: '/assets/largeChamber.jpg',
    content: `Our Large Chamber offers extensive space and high capacity, catering to large-scale requirements. Engineered for durability and efficiency, it provides optimal performance even under demanding conditions.`
  },
  {
    key: 'singlechamber-4',
    title: 'Installation & Training',
    content: `The SET8-THL comes with a comprehensive installation manual. Our team provides on-site installation and commissioning. Additionally, free training is provided for up to two operators to ensure smooth operation and maintenance.`
  },
  {
    key: 'singlechamber-5',
    title: 'After-Sale Service',
    content: `We offer a one-year charge-free warranty from the date of equipment delivery. Post-warranty, our team provides life-long service at reasonable charges. Regular inspections and maintenance services are also available.`
  },
  {
    key: 'singlechamber-6',
    title: 'Included Accessories',
    content: `Warranty Certificate
    Operation & Maintenance Manual
    Circuit Diagrams`
  },
  {
    key: 'singlechamber-7',
    title: 'Working Conditions',
    content: `Ambient Temperature: 20° - 35°C
    Relative Humidity: ≤75%RH
    Power Supply: AC 415V ±10%, 50Hz, 3-phase + ground
    Water & Air Requirements: Water flux 5l/h, water pressure 0.5-2 bar, air pressure 0-3 bar`
  },
  {
    key: 'singlechamber-8',
    title: 'Air-conditioning System',
    content: `Air Regulation: Dual discharge evaporator coils with uniform horizontal air distribution
    Heating: Stainless steel sheathed heater
    Humidification: Fogging humidification system`
  },
  {
    key: 'singlechamber-9',
    title: 'Lighting System',
    content: `Light Intensity: 300 Micromoles (20,000 lux) per growth area
    Lighting: Nine LED lights per canopy on each tier
    Shelving: Four shelving systems, each with two tiers and individual light canopies
    Lighting Control: Programmable controller with Light/Dark mode, NON DIMMABLE`
  },
  {
    key: 'singlechamber-10',
    title: 'Cooling System',
    content: `Compressor: Single scroll compressor system
    Climate Control: Hot gas bypass system for precision
    Refrigerant: CFC-free
    Monitoring: Visual and audible alarms`
  },
  {
    key: 'singlechamber-11',
    title: 'Control System',
    content: `Sensors: Dual NTC temperature sensors and capacitive humidity sensors
    Controller: Programmable PLC with touch screen
    Resolution: 0.1°C for temperature, 0.1%RH for humidity
    Alarm: User-defined audible alarms`
  }
];

const SingleChamberDimensions = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleAccordionToggle = (key) => {
    setExpandedItem((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="single-chamber-accordion-container">
      {dimensionsData.map((item) => (
        <div key={item.key} className="single-chamber-accordion-item">
          <button
            className="single-chamber-accordion-title"
            onClick={() => handleAccordionToggle(item.key)}
          >
            {item.title}
            <span className={`single-chamber-accordion-icon ${expandedItem === item.key ? 'single-chamber-icon-rotate' : ''}`}>▼</span>
          </button>
          {expandedItem === item.key && (
            <div className="single-chamber-accordion-content">
              {item.image && <img src={item.image} alt={item.title} className="single-chamber-accordion-image" />}
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SingleChamberDimensions;
