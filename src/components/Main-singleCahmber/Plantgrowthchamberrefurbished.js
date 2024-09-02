import React, { useState } from 'react';
import './SingleProductChamber.css';

const singleProductChamberData = [
    {
      key: 'singlechamber-1',
      title: 'Overview',
      image: '/assets/smallChamber.jpg',
      content: `The Plant Growth Chamber Refurbishment & Upgradation Solution is ideal for organizations looking to enhance the functionality of their existing chambers without investing in entirely new systems. This solution utilizes cutting-edge technology, including a touch screen controller with Prologic PLC, and ensures precise control of temperature and humidity. The upgrade also features advanced refrigeration systems that are energy-efficient and environmentally friendly. With a focus on reliability and safety, Sreekara EnviroTech provides a cost-effective way to modernize your plant growth chambers.`,
    },
    {
      key: 'singlechamber-2',
      title: 'Key Specifications',
      content: `Control System:
  
  Controller: Touch screen controller with Prologic PLC for easy operation.
  Alarm Systems: Programmable and user-defined alarms, with auto data storage and audible alerts.
  Startup Delay: Major outputs like compressors and heaters are designed with a startup delay to ensure long-term reliability.
  Data Logging: Automatic data storage with alarms ensures continuous monitoring and easy access to historical data.
  
  Refrigeration System:
  
  Refrigerant: CFC-free R404A refrigerant, environmentally safe and efficient.
  Compressor: Emerson/Tecumseh compressor with a 2-year warranty.
  Safety Features: High/Low pressure switches, crankcase regulating valve, and hot gas bypass valve system to protect and extend compressor life.
  Defrost System: Auto-programmed defrost system to ensure compressor safety and reliability.
  Temperature & Humidity Control: Precision control up to ±0.5°C for temperature and ±2%RH for humidity.`,
    },
    {
      key: 'singlechamber-3',
      title: 'Security Features',
      content: `Compressor Safety: High/Low pressure switches and crankcase regulating valve.
  Environmental Control: Precise temperature and humidity regulation to ±0.5°C and ±2%RH, respectively.`,
    },
    {
      key: 'singlechamber-4',
      title: 'Installation Manual',
      content: `Installation Process:
  
  Initial Assessment: Inspect the existing chamber and refrigeration system to determine compatibility and identify components that need replacement.
  Component Replacement: Install the new touch screen controller with Prologic PLC, replacing outdated control systems.
  Refrigeration Upgrade: Replace the refrigerant with CFC-free R404A and install the new Emerson/Tecumseh compressor along with safety features like pressure switches and crankcase regulating valve.
  System Configuration: Set up the defrost system and hot gas bypass valve system to ensure reliable operation of the refrigeration unit.
  Environmental Controls: Calibrate the system to maintain precise temperature and humidity control, ensuring optimal conditions for plant growth.
  Testing & Validation: Conduct thorough testing to ensure all systems are functioning correctly and meet the specified tolerances for temperature and humidity.
  Training: Provide comprehensive training to operators on the new system’s controls, alarm management, and routine maintenance procedures.`,
    },

    {
        key: 'singlechamber-5',
        title: 'Maintenance Tips',
        content: `Regularly monitor the operation of the compressor and refrigeration system to ensure they are functioning within safe parameters.
  Perform routine checks on the control system and alarms to ensure they are functioning correctly and updating the system’s software as needed.
  Replace any worn components promptly to prevent downtime and ensure continuous, reliable operation.`,
      },
    {
        key: 'singlechamber-6',
        title: 'Environmental Controls:',
        content: `   Calibrate the system to maintain precise temperature and humidity control, ensuring optimal conditions for plant growth.
  Testing & Validation: Conduct thorough testing to ensure all systems are functioning correctly and meet the specified tolerances for temperature and humidity.
  Training: Provide comprehensive training to operators on the new system’s controls, alarm management, and routine maintenance procedures.`,
      },
  ];
  
  

const Plantgrowthchamberrefurbished = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleAccordionToggle = (key) => {
    setExpandedItem((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="single-product-container">
      <div className="product-container">
        <div className="product-details">
          <h1 className="product-title">Plant growth chamber refurbished</h1>
          <h3 className="product-subtitle">Plant growth chamber refurbished</h3>
          {/* <div className="product-specs">
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
          </div> */}
          <p className="product-description">
          The refurbishment solution for old Plant Growth Chambers offered by Sreekara EnviroTech Private Limited revitalizes existing equipment, enhancing performance and extending the chamber's life. By utilizing the existing structure and refrigeration system, this retrofit kit replaces all other components with modern, efficient alternatives. The upgrade includes a programmable touch screen controller with PLC, enabling easy programming and precise control of temperature, humidity, and lighting conditions. Additional features such as ultrasonic humidifiers, foggers, and dehumidifiers can be integrated based on application needs. The refurbishment ensures enhanced safety, reliability, and cost-efficiency, making it an economical choice for upgrading older chambers.
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

export default Plantgrowthchamberrefurbished;
