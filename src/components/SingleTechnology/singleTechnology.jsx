import React from 'react';
import './singleTechnology.css';




const data = [
    {
      "category": "Automobile Test Chamber",
      "title": "High-Efficiency Refrigeration Systems",
      "content": "Our automobile test chambers are equipped with high-efficiency refrigeration systems that are essential for maintaining stable and precise temperature control. This advanced technology allows us to simulate a wide range of extreme environmental conditions, ensuring that vehicles can be tested for performance and durability in any climate. Whether it's simulating the scorching heat of a desert or the freezing cold of arctic environments, our refrigeration systems ensure reliable and consistent results.",
      "imageurl": "./assets/1.jpg"
    },
    {
      "category": "Automobile Test Chamber",
      "title": "PLC Control Systems",
      "content": "The backbone of our test chambers is our proprietary Programmable Logic Controller (PLC) systems. These systems are designed to offer unparalleled precision in managing environmental parameters, such as temperature, humidity, and pressure. The PLC systems allow for real-time monitoring and adjustments, ensuring that every test condition is accurately simulated. This precision is crucial for replicating the exact conditions a vehicle might face in real-world scenarios, providing valuable data for manufacturers.",
      "imageurl": "./assets/1.jpg"
    },
    {
      "category": "Automobile Test Chamber",
      "title": "Accurate PID Algorithms",
      "content": "Our test chambers utilize sophisticated Proportional-Integral-Derivative (PID) algorithms to maintain consistent environmental conditions. These algorithms are essential for fine-tuning the chamber’s environment, ensuring that temperature and humidity levels remain stable throughout the testing process. The accuracy of our PID algorithms ensures that the data collected during testing is reliable, which is critical for making informed decisions about vehicle safety and performance.",
      "imageurl": "./assets/1.jpg"
    },
    {
      "category": "Automobile Test Chamber",
      "title": "Air Conditioning Technology",
      "content": "To complement our refrigeration systems, we have integrated advanced air conditioning technology into our test chambers. This technology is crucial for creating controlled environments that can simulate a range of humidity and temperature conditions. By precisely controlling these variables, we can replicate various climate conditions, from humid tropics to dry deserts, allowing for comprehensive testing of vehicle components under different environmental stresses.",
      "imageurl": "./assets/1.jpg"
    },
  ]
  


const SingleTechnology = () => {
  return (
    <>
    <div className="single-technology-bg-img">
      <h1 className="single-technology-bg-heading">Automobile Test Chamber</h1>
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

export default SingleTechnology;
