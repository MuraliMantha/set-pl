import React, { useState } from 'react';
import './SingleProductChamber.css';

// Updated data for Insect Rearing Chamber Refurbishment & Upgradation Solution
const insectRearingChamberData = [
  {
    key: 'insectchamber-1',
    title: 'Description',
    content: `Sreekara EnviroTech Private Limited offers a comprehensive refurbishment and upgradation solution for existing insect rearing chambers. With over 18 years of expertise and training from global leaders in Canada, this service transforms outdated chambers into modern, efficient systems. The solution includes a state-of-the-art control system, advanced refrigeration components, and precise environmental controls, all designed to enhance the performance, reliability, and lifespan of your equipment.`,
  },
  {
    key: 'insectchamber-2',
    title: 'Overview',
    content: `The Insect Rearing Chamber Refurbishment & Upgradation Solution is perfect for organizations aiming to upgrade their existing chambers without the need for entirely new systems. This service incorporates cutting-edge technology, including a touch screen controller with Prologic PLC, ensuring precise control of temperature and humidity. The upgrade features energy-efficient, environmentally friendly refrigeration systems. Sreekara EnviroTech provides a cost-effective way to modernize your insect rearing chambers, focusing on reliability and safety.`,
  },
  {
    key: 'insectchamber-3',
    title: 'Key Specifications',
    content: `Control System:
    - Controller: Touch screen controller with Prologic PLC for user-friendly operation.
    - Alarm Systems: Programmable and user-defined alarms, with auto data storage and audible alerts.
    - Startup Delay: Includes a startup delay for major outputs like compressors and heaters to ensure long-term reliability.
    - Data Logging: Automatic data storage with alarms for continuous monitoring and easy access to historical data.
    
    Refrigeration System:
    - Refrigerant: CFC-free R404A refrigerant, both environmentally safe and efficient.
    - Compressor: Emerson/Tecumseh compressor with a 2-year warranty.
    - Safety Features: High/Low pressure switches, crankcase regulating valve, and hot gas bypass valve system to protect and extend compressor life.
    - Defrost System: Auto-programmed defrost system for compressor safety and reliability.
    
    Temperature & Humidity Control: Precision control up to ±0.5°C for temperature and ±2%RH for humidity.`,
  },
  {
    key: 'insectchamber-4',
    title: 'Installation Manual',
    content: `Installation Process:
    - Initial Assessment: Inspect the existing chamber and refrigeration system to determine compatibility and identify components needing replacement.
    - Component Replacement: Install the new touch screen controller with Prologic PLC, replacing outdated control systems.
    - Refrigeration Upgrade: Replace refrigerant with CFC-free R404A and install a new Emerson/Tecumseh compressor along with safety features like pressure switches and crankcase regulating valve.
    - System Configuration: Set up the defrost system and hot gas bypass valve system for reliable refrigeration unit operation.
    - Environmental Controls: Calibrate the system to maintain precise temperature and humidity, ensuring optimal conditions for insect rearing.
    - Testing & Validation: Conduct thorough testing to ensure all systems function correctly and meet specified tolerances for temperature and humidity.
    - Training: Provide comprehensive training to operators on the new system’s controls, alarm management, and routine maintenance procedures.`,
  },
  {
    key: 'insectchamber-5',
    title: 'Maintenance Tips',
    content: `- Regularly monitor compressor and refrigeration system operations to ensure they function within safe parameters.
    - Perform routine checks on the control system and alarms to ensure they work correctly and update the system’s software as needed.
    - Replace any worn components promptly to avoid downtime and ensure continuous, reliable operation.`,
  },
  {
    key: 'insectchamber-6',
    title: 'Working Principle',
    content: `- Air Circulation: Uniform horizontal airflow from the roof-suspended/backside plenum through perforated holes.
    - Heating: Heaters provided to maintain higher temperatures with minimized radiation effects on the process.
    - Humidification: Ultrasonic foggers used to mix humidity through air supply/plenum for even conditions.
    - Dehumidification: Desiccant dryers/dehumidification coil in the cooling coil unit to maintain lower humidity.
    - Shelving: Non-corrosive shelves with variable height and lights on top/side for uniform distribution.`,
  },
  {
    key: 'insectchamber-7',
    title: 'Humidifier',
    content: `- Eco Mode Humidifier: Low power consumption.
    - Highly Productive: Low water consumption.
    - Trouble-Free Operation: Maintenance-free.
    - Compact Unit: Minimal connections.`,
  },
  {
    key: 'insectchamber-8',
    title: 'Refrigeration and Air Conditioning',
    content: `- Refrigerant: CFC-Free R404A.
    - Compressor: Emerson/Tecumseh with a 2-year warranty.
    - Safety Features: High/Low pressure switches and crankcase regulating valve.`,
  },
];

const InsectRefurbishmentSolution = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleAccordionToggle = (key) => {
    setExpandedItem((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="single-product-container">
      {/* Product details section */}
      <div className="product-container">
        <div className="product-details">
          <h1 className="products-title">Insect Rearing Chamber</h1>
          <h3 className="product-subtitle">Refurbishment & Upgradation Solution</h3>
          <p className="product-description">
            Sreekara EnviroTech Private Limited offers a comprehensive refurbishment and upgradation solution for existing insect rearing chambers. This service transforms outdated chambers into modern, efficient systems.
            
          </p>
          <p className="product-description">
          The Insect Rearing Chamber Refurbishment & Upgradation Solution is perfect for organizations aiming to upgrade their existing chambers without the need for entirely new systems. This service incorporates cutting-edge technology, including a touch screen controller with Prologic PLC, ensuring precise control of temperature and humidity. The upgrade features energy-efficient, environmentally friendly refrigeration systems. Sreekara EnviroTech provides a cost-effective way to modernize your insect rearing chambers, focusing on reliability and safety.

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

        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="product-gallery">
        <div className="product-card unique-product-card-1">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 1" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Product 1</h2>
          </div>
        </div>


     
      </div>    </div>
    <div class="carousel-item">
    <div className="product-gallery">
        <div className="product-card unique-product-card-1">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 1" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Product 1</h2>
          </div>
        </div>

    
      </div>    </div>
    <div class="carousel-item">
    <div className="product-gallery">
        <div className="product-card unique-product-card-1">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Product 1" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Product 1</h2>
          </div>
        </div>



      </div>    </div>
  </div>
 
</div>

      {/* Carousel ends here */}

      {/* Accordion section */}
      <div className="single-chamber-accordion-container">
        {insectRearingChamberData.map((item) => (
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
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsectRefurbishmentSolution;
