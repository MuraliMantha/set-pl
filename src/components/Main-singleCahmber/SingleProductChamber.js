import React, { useState } from 'react';
import './SingleProductChamber.css';

const singleProductChamberData = [
  {
    key: 'singlechamber-1',
    title: 'Overview',
    image: '/assets/smallChamber.jpg',
    content: `The SET8-THL Plant Growth Walk-in Chamber is engineered to simulate a wide range of environmental conditions for optimized plant growth. Designed for precision, this chamber ensures the highest standards in climate control, lighting, and security, making it an ideal solution for research and commercial applications.`,
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
    Door: Single wing door with inner viewing window, lock, and key, fitted with sweeping gasket and light-tight cover`,
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
    content: `The SET8-THL comes with a comprehensive installation manual. Our team provides on-site installation and commissioning. Additionally, free training is provided for up to two operators to ensure smooth operation and maintenance.`,
  },
  {
    key: 'singlechamber-5',
    title: 'After-Sale Service',
    content: `We offer a one-year charge-free warranty from the date of equipment delivery. Post-warranty, our team provides life-long service at reasonable charges. Regular inspections and maintenance services are also available.`,
  },
  {
    key: 'singlechamber-6',
    title: 'Included Accessories',
    content: `Warranty Certificate
    Operation & Maintenance Manual
    Circuit Diagrams`,
  },
  {
    key: 'singlechamber-7',
    title: 'Working Conditions',
    content: `Ambient Temperature: 20° - 35°C
    Relative Humidity: ≤75%RH
    Power Supply: AC 415V ±10%, 50Hz, 3-phase + ground
    Water & Air Requirements: Water flux 5l/h, water pressure 0.5-2 bar, air pressure 0-3 bar`,
  },
  {
    key: 'singlechamber-8',
    title: 'Air-conditioning System',
    content: `Air Regulation: Dual discharge evaporator coils with uniform horizontal air distribution
    Heating: Stainless steel sheathed heater
    Humidification: Fogging humidification system`,
  },
  {
    key: 'singlechamber-9',
    title: 'Lighting System',
    content: `Light Intensity: 300 Micromoles (20,000 lux) per growth area
    Lighting: Nine LED lights per canopy on each tier
    Shelving: Four shelving systems, each with two tiers and individual light canopies
    Lighting Control: Programmable controller with Light/Dark mode, NON DIMMABLE`,
  },
  {
    key: 'singlechamber-10',
    title: 'Cooling System',
    content: `Compressor: Single scroll compressor system
    Climate Control: Hot gas bypass system for precision
    Refrigerant: CFC-free
    Monitoring: Visual and audible alarms`,
  },
  {
    key: 'singlechamber-11',
    title: 'Control System',
    content: `Sensors: Dual NTC temperature sensors and capacitive humidity sensors
    Controller: Programmable PLC with touch screen
    Resolution: 0.1°C for temperature, 0.1%RH for humidity
    Alarm: User-defined audible alarms`,
  },
];

const SingleProductChamber = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleAccordionToggle = (key) => {
    setExpandedItem((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="single-product-container">
      <div className="product-container">
        <div className="product-details">
          <h1 className="product-title">SET8-THL</h1>
          <h3 className="product-subtitle">Plant Growth Walk-in Chamber</h3>
          <div className="product-specs">
            <div className="spec">
              <p className="spec-value">9.25 ft²</p>
              <p className="spec-label">Temp Range</p>
            </div>
            <div className="spec">
              <p className="spec-value">48 sq.ft²</p>
              <p className="spec-label">Growth Area</p>
            </div>
            <div className="spec">
              <p className="spec-value">20 inches </p>
              <p className="spec-label">Growth Height </p>
            </div>
          </div>
          <p className="product-description">
            The SET8-THL Plant Growth Walk-in Chamber is a state-of-the-art solution designed to simulate precise environmental conditions for optimal plant growth. With advanced climate control, efficient lighting, and robust security features, this chamber is ideal for both research and commercial applications. It offers a spacious growth area with adjustable shelves, high accuracy in temperature and humidity control, and easy-to-use programmable settings for customized plant growth experiments. Backed by reliable after-sales service and comprehensive training, the SET8-THL ensures exceptional performance and long-term reliability.
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
      {/* <div className="product-gallery">
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
      </div> */}
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
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="single-chamber-accordion-image"
                  />
                )}
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProductChamber;
