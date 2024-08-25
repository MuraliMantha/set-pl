import React from 'react';
import Slider from 'react-slick';
import './controller.css';

const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

const SinglePointController = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    <div className="single-point-controller-container">
      {/* Slick Carousel */}
      <div className="single-point-carousel">
      
      </div>

      {/* Header Container */}
      <div className="single-point-controller-header-container">
        <h1 className="single-point-header-title">Single Point Controller</h1>
        <p className="single-point-header-subtitle">Precision Control for Essential Parameters</p>
      </div>

      {/* Bibox Container */}
      <div className="bibox-container">
        <div className="bibox-box">
          <div className="bibox-box-content">
            <h3>Precision Control</h3>
            <p>High accuracy for maintaining a single parameter.</p>
          </div>
        </div>
        <div className="bibox-box">
          <div className="bibox-box-content">
            <h3>Simple Setup</h3>
            <p>Easy to configure and deploy.</p>
          </div>
        </div>
        <div className="bibox-box">
          <div className="bibox-box-content">
            <h3>Reliable Operation</h3>
            <p>Consistent performance with minimal maintenance.</p>
          </div>
        </div>
      </div>

      {/* What is a Single Point Controller Section */}
      <div className="single-point-section">
        <h2 className="single-point-section-title">What is a Single Point Controller?</h2>
        <p className="single-point-section-content">
          Our Single Point Controllers are designed for precision control of essential parameters like temperature
          or humidity. They operate by turning on or off specific output devices based on a single sensor input.
          Perfect for straightforward applications where maintaining a specific condition is critical.
        </p>
        <p className="single-point-section-content"><strong>Example Use Case:</strong> Imagine a refrigeration unit where maintaining a precise temperature is crucial to preserving goods. Our Single Point Controller ensures that the temperature stays within the desired range by activating the cooling system only when necessary.</p>
      </div>

      {/* Key Features Section */}
      <div className="single-point-section">
        <h2 className="single-point-section-title">Key Features</h2>
        <ul className="single-point-section-list">
          <li className="single-point-section-list-item"><strong>Precision Control:</strong> High accuracy for maintaining a single parameter.</li>
          <li className="single-point-section-list-item"><strong>Simple Setup:</strong> Easy to configure and deploy.</li>
          <li className="single-point-section-list-item"><strong>Reliable Operation:</strong> Consistent performance with minimal maintenance.</li>
          <li className="single-point-section-list-item"><strong>Compact Design:</strong> Fits seamlessly into various small-scale systems.</li>
        </ul>
      </div>

      {/* Applications Section */}
      <div className="single-point-section">
        <h2 className="single-point-section-title">Ideal for Various Applications</h2>
        <p className="single-point-applications-text">
          <strong>Temperature Control:</strong> Ensure precise temperature management in refrigeration units.<br />
          <strong>Humidity Regulation:</strong> Maintain optimal humidity levels in storage facilities.<br />
          <strong>Process Control:</strong> Suitable for controlling single processes in industrial environments.
        </p>
      </div>

      {/* Technical Specifications Section */}
      <div className="single-point-section">
        <h2 className="single-point-section-title">Technical Specifications</h2>
        <p className="single-point-specifications-text">
          <strong>Power Supply:</strong> [Specifications]<br />
          <strong>Control Type:</strong> On/Off based on sensor input<br />
          <strong>Sensor Compatibility:</strong> [Details on compatible sensors]
        </p>
      </div>
    </div>
    </>
  );
};

export default SinglePointController;
