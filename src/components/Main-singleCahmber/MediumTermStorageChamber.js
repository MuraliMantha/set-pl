import React, { useState } from 'react';
import './SingleProductChamber.css';

const singleProductChamberData = [
  {
    key: 'singlechamber-1',
    title: 'Overview',
    image: '/assets/smallChamber.jpg',
    content: `The MTS10TDH-PR Medium Term Storage Chamber is engineered to deliver consistent environmental conditions for the medium-term preservation of various materials. Featuring precise temperature and humidity control, this chamber is equipped with advanced dehumidification and air regulation systems to ensure optimal storage conditions. Built with durable materials and designed with user-friendly controls, it offers reliable performance and robust security features, making it ideal for applications where maintaining consistent storage conditions is critical..`,
  },
  {
    key: 'singlechamber-2',
    title: 'Key Specifications',
    image: '/assets/mediumChamber.jpg',
    content: `Climate Simulation:
    
   Interior Dimensions: 13.4’L x 9.4’W x 8.8’H
Exterior Dimensions: 14.0’L x 10.0’W x 9.0’H
Temperature Range: 05° - 10°C
Humidity Range: 40% - 50%RH (within temperature range of 05° - 10°C)
Temperature Uniformity: ±2°C
Humidity Uniformity: ±5%RH
Noise Level: Less than 70 dB
Structural Features:

Exterior Shell: Pre-painted plate
Interior Shell: Pre-painted plate
Interior Floor: Puff insulated floor with aluminium chequered plate
Insulation: 4" thick hard polyurethane foam
Door: Single wing door with inner viewing thermal-pane window, movable light cover, lock, and key, fitted with sweeping gasket`,
  },
  {
    key: 'singlechamber-3',
    title: 'Resources',
    image: '/assets/largeChamber.jpg',
    content: `Our Large Chamber offers extensive space and high capacity, catering to large-scale requirements. Engineered for durability and efficiency, it provides optimal performance even under demanding conditions.`,
  },
  {
    key: 'singlechamber-4',
    title: 'Installation & Training',
    content: `Our team offers comprehensive on-site installation and commissioning. Additionally, free training is provided for up to two operators to ensure optimal operation and maintenance of the chamber.

After-Sale Service
We provide a one-year charge-free warranty from the date of equipment delivery. Post-warranty, we offer life-long service with regular inspections and maintenance, available at reasonable charges.

Included Accessories
Warranty Certificate
Operation & Maintenance Manual
Circuit Diagrams.`,
  },
  {
    key: 'singlechamber-5',
    title: 'Working Conditions',
    content: `
Ambient Temperature: 20° - 35°C
Relative Humidity: ≤75%RH
Power Supply: AC 415V ±10%, 50Hz, 3-phase + ground
Max Current: 40A (Air switch, knife-switch not allowed).`,
  },
  {
    key: 'singlechamber-6',
    title: 'Air-conditioning System:',
    content: `Air Regulation: Dual discharge evaporator coils with uniform horizontal air distribution
Heating: Stainless steel sheathed heater
Humidification: Fogging humidification system
Lighting System:
`,
  },
  {
    key: 'singlechamber-7',
    title: 'Lighting System:',
    content: `Lighting: Visibility lighting controlled by an exterior mounted switch
Heat Removal: Lamp heat removed by the refrigeration system

`,
  },
  {
    key: 'singlechamber-8',
    title: 'Control System',
    content: `
Compressor: Single scroll compressor system for maintaining the chamber temperature
Climate Control: Hot gas bypass system for precise control
Refrigerant: CFC-free
Monitoring: Visual and audible alarms for refrigeration function

`,
  },
  {
    key: 'singlechamber-9',
    title: 'Control System:',
    content: `Sensors: PT100 temperature sensor and electronic capacitive humidity sensor
Controller: Single set point (non-programmable) PLC with touch screen
Resolution: 0.1°C for temperature, 0.1%RH for humidity
Alarm: User-defined audible alarms
`,
  },
  {
    key: 'singlechamber-10',
    title: 'Partial Redundancy',
    content: `Units: Indoor and outdoor units are 100% redundant
Dehumidifier: One dehumidifier for the entire unit
Controller: One touch screen controller for managing and switching between outdoor units`,
  },
  {
    key: 'singlechamber-11',
    title: 'Security Features',
    content: `Over-temperature protection
Motor overload protection
High-pressure/low-pressure protection for the compressor
Fuse protection for control and lighting circuits
Flange mount disconnect for power`,
  },
];

const MediumTermStorageChamber = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleAccordionToggle = (key) => {
    setExpandedItem((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="single-product-container">
      <div className="product-container">
        <div className="product-details">
          <h1 className="product-title">MTS10TDH-PR
          </h1>
          <h3 className="product-subtitle">Medium Term Storage Chamber</h3>
          <div className="product-specs">
            <div className="spec">
              <p className="spec-value">
              Interior Dimensions
              </p>
              <p className="spec-label">13.4’L x 9.4’W x 8.8’H</p>
            </div>
            <div className="spec">
              <p className="spec-value">
              Exterior Dimensions
              </p>
              <p className="spec-label">14.0’L x 10.0’W x 9.0’H</p>
            </div>
            <div className="spec">
              <p className="spec-value"> Temperature Range
              </p>
              <p className="spec-label">05° - 10°C </p>
            </div>
          </div>
          <p className="product-description">
          Medium Term Storage Chamber - MTS10TDH-PR
          The MTS10TDH-PR Medium Term Storage Chamber is a robust and efficient solution designed to maintain specific environmental conditions ideal for medium-term storage. With precise climate control, advanced dehumidification, and reliable redundancy features, this chamber ensures the consistent preservation of materials. It’s built with durable materials, features user-friendly controls, and includes comprehensive security systems, making it an excellent choice for both research and industrial applications.
          </p>
        </div>
        <div className="product-image-container">
          <img
            src="https://img.freepik.com/premium-photo/botanist-scientists-working-together-experimental-plant-plots-greenhouses_1235831-64909.jpg?w=826"
            alt="Product Image"
            className="product-image"
          />
        </div>
      </div>

      {/* Carousel starts here */}
      <div className="product-gallery">
        <div className="product-card unique-product-card-1">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 1" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Product 1</h2>
          </div>
        </div>

        <div className="product-card unique-product-card-2">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 2" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Product 2</h2>
          </div>
        </div>

        <div className="product-card unique-product-card-3">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 3" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Product 3</h2>
          </div>
        </div>
      </div>
      {/* Carousel ends here */}

      <div className="single-chamber-accordion-container">
        {singleProductChamberData.map((item) => (
          <div key={item.key} className="single-chamber-accordion-item">
            <button
              className="single-chamber-accordion-title"
              onClick={() => handleAccordionToggle(item.key)}
            >
              {item.title}
              <span
                className={`single-chamber-accordion-icon ${
                  expandedItem === item.key ? 'expanded' : ''
                }`}
              >
                {expandedItem === item.key ? '-' : '+'}
              </span>
            </button>
            {expandedItem === item.key && (
              <div className="single-chamber-accordion-content">
                {/* {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="single-chamber-accordion-image"
                  />
                )} */}
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediumTermStorageChamber;
