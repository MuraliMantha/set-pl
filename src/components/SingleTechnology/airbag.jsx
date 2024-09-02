import React from 'react';
import './singleTechnology.css';




const data = [
    {
        "category": "Air Bag",
        "title": "Environmental Simulation Technology",
        "content": "Our airbag testing chambers are equipped with advanced environmental simulation technology that allows for the accurate replication of a wide range of environmental conditions. This technology is essential for testing airbags under various conditions, including temperature extremes, humidity variations, and more. By simulating these conditions, manufacturers can ensure that airbags will perform reliably, no matter the environment in which they are deployed.",
        "imageurl": "./assets/1.jpg"
      },
      {
        "category": "Air Bag",
        "title": "Safety Compliance Systems",
        "content": "Safety is paramount in airbag testing, and our chambers are designed with specialized safety compliance systems. These systems ensure that airbags are tested according to industry safety standards, validating their performance under a variety of conditions. By adhering to these rigorous standards, we help manufacturers produce airbags that meet or exceed safety requirements, providing peace of mind to both manufacturers and consumers.",
        "imageurl": "./assets/1.jpg"
      },
      {
        "category": "Air Bag",
        "title": "Precision Control Systems",
        "content": "Our airbag testing chambers are equipped with precision control systems that enable the accurate simulation of the environmental conditions an airbag might encounter throughout its lifecycle. These control systems allow for fine-tuning of temperature, humidity, and other variables, ensuring that the airbag is tested under the most exacting conditions possible. The precision provided by these systems is crucial for ensuring that airbags perform reliably when they are needed most.",
        "imageurl": "./assets/1.jpg"
      },
      {
        "category": "Air Bag",
        "title": "Advanced Air Cycle Systems",
        "content": "The advanced air cycle systems in our chambers are designed to maintain controlled airflow, which is essential for accurate and consistent airbag testing results. These systems ensure that air is evenly distributed throughout the chamber, preventing uneven conditions that could affect test outcomes. By maintaining a stable environment, our air cycle systems help manufacturers obtain reliable data on airbag performance, contributing to safer vehicles on the road.",
        "imageurl": "./assets/1.jpg"
      }
]

const AirBag = () => {
    return (
        <>
        <div className="single-technology-bg-img">
      <h1 className="single-technology-bg-heading">Air Bags</h1>
    </div>
      <div className="single-technology-container">
        {data.map((item, index) => (
          <div key={index} className="single-technology-card">
            <div className="single-image-wrapper">
              <img src={item.imageurl} alt={item.title} className="single-technology-image" />
            </div>
            <div className="single-technology-content">
              <h3 className="single-technology-title">{item.title}</h3>
              <p className="single-technology-category">{item.category}</p>
              <p className="single-technology-description">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  };

  export default AirBag;