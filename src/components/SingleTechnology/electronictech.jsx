import React from 'react';
import './singleTechnology.css';




const data = [
    {
    "category": "Electronic Technology",
    "title": "Integrated Control Systems",
    "content": "Our electronic testing chambers feature integrated control systems that allow for the precise management of environmental variables such as temperature, humidity, and airflow. These systems are essential for creating the exact conditions needed to test electronic components for durability and reliability. The integration of these control systems ensures that the environment inside the chamber can be tailored to meet the specific requirements of each test, providing accurate and reproducible results.",
    "imageurl": "./assets/1.jpg"
  },
  {
    "category": "Electronic Technology",
    "title": "Efficient Air Cycle Systems",
    "content": "The air cycle systems in our chambers are designed to maintain consistent airflow, which is critical for testing the thermal performance of electronic components. By ensuring that air is evenly distributed throughout the chamber, our systems prevent hot spots and ensure that all parts of the component are exposed to the same conditions. This uniform airflow is key to obtaining reliable data on how electronic components will perform under different thermal conditions.",
    "imageurl": "./assets/1.jpg"
  },
  {
    "category": "Electronic Technology",
    "title": "Refrigeration Technology",
    "content": "Our chambers are equipped with high-performance refrigeration technology, capable of maintaining extreme temperature conditions. This technology is vital for testing electronic components that need to operate reliably in both high and low-temperature environments. By subjecting components to these extreme conditions, manufacturers can ensure that their products will perform consistently, regardless of the environmental conditions they may face in the real world.",
    "imageurl": "./assets/1.jpg"
  },
  {
    "category": "Electronic Technology",
    "title": "Independent PLC Control",
    "content": "The independent PLC control units in our chambers provide the flexibility and precision needed to simulate complex environmental conditions. These control units allow for the customization of test parameters, making it possible to replicate a wide range of environmental scenarios. This capability is particularly important for testing electronics that may be exposed to varying conditions during their operational lifetime, ensuring their reliability and durability.",
    "imageurl": "./assets/1.jpg"
  },
]

const ElectronicTech = () => {
    return (
        <>
    <div className="single-technology-bg-img">
      <h1 className="single-technology-bg-heading">Electronic Technology</h1>
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

  export default ElectronicTech;