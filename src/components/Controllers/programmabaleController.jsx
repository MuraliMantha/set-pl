// ProgrammableController.js
import React from 'react';
import './controller.css';

const ProgrammableController = () => {
  return (
    <div className="controller-page">
      {/* Header Section */}
      <header className="controller-header">
        <h1>Programmable Controller</h1>
        <p>Advanced Control for Multi-Parameter Systems</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src="your-image-path.jpg" alt="Programmable Controller" className="hero-image" />
        <div className="hero-text">Flexible, Automated, and Highly Connected Solutions.</div>
      </section>

      {/* Overview Section */}
      <section className="overview">
        <h2>What is a Programmable Controller?</h2>
        <p>
          Our Programmable Controllers offer flexibility and control over multiple parameters. With advanced
          features like multi-variable control, automated sequences, and remote monitoring, these controllers are
          ideal for complex environments.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Multi-variable Control:</strong> Manage temperature, humidity, lighting, and more.</li>
          <li><strong>Programmable Sequences:</strong> Automate control sequences for specific needs.</li>
          <li><strong>Advanced Monitoring:</strong> Real-time data logging and alarms.</li>
          <li><strong>High Connectivity:</strong> RS485, ModBUS, and other communication options.</li>
        </ul>
      </section>

      {/* Applications Section */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          <strong>Environmental Control:</strong> Ideal for plant growth chambers.<br />
          <strong>Industrial Processes:</strong> Suitable for complex multi-parameter control.<br />
          <strong>Building Automation:</strong> Perfect for large facilities like hospitals and shopping centers.
        </p>
      </section>

      {/* Technical Specifications Section */}
      <section className="specifications">
        <h2>Technical Specifications</h2>
        <p>
          <strong>Power Supply:</strong> [Specifications]<br />
          <strong>Input/Output:</strong> [Details]<br />
          <strong>Programming Interface:</strong> Schneider Touch Screen
        </p>
      </section>
    </div>
  );
};

export default ProgrammableController;
