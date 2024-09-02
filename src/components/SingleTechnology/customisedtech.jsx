import React from 'react';
import './singleTechnology.css';




const data = [
    {
        "category": "Customized Technology",
        "title": "Bespoke Environmental Chambers",
        "content": "At Zundar, we understand that one size does not fit all. That’s why we offer bespoke environmental chambers designed specifically to meet the unique requirements of your industry. Whether you need a chamber for automotive, aerospace, or electronics testing, we can create a solution tailored to your exact specifications. Our bespoke chambers are engineered to provide precise environmental control, ensuring that you can simulate any condition necessary for your testing needs.",
        "imageurl": "./assets/1.jpg"
      },
      {
        "category": "Customized Technology",
        "title": "Modular Design Technology",
        "content": "Our test chambers are built using modular design technology, allowing for flexibility in size, configuration, and functionality. This modular approach means that our chambers can be easily adapted to different testing requirements, making them ideal for industries that require a variety of testing scenarios. Whether you need to expand the chamber size or add specific features, our modular design ensures that your testing equipment can grow and evolve with your needs.",
        "imageurl": "./assets/1.jpg"
      },
      {
        "category": "Customized Technology",
        "title": "Advanced Simulation Software",
        "content": "Our proprietary simulation software is at the heart of our customized technology solutions. This software allows for the creation of detailed and accurate simulation scenarios, ensuring that your test chamber can replicate any environmental condition required. Whether you need to simulate extreme temperatures, humidity levels, or other environmental factors, our advanced software provides the tools you need to design and execute complex testing protocols with confidence.",
        "imageurl": "./assets/1.jpg"
      },
      {
        "category": "Customized Technology",
        "title": "Specialized Control Systems",
        "content": "We develop specialized control systems that are tailored to manage the specific environmental conditions required by your testing protocols. These control systems provide precise monitoring and adjustment capabilities, ensuring that your customized chamber operates exactly as needed. Whether you’re testing automotive components, aerospace materials, or electronic devices, our specialized control systems ensure that your tests are conducted under the most accurate and reliable conditions possible.",
        "imageurl": "./assets/1.jpg"
      },
]

const CustomizedTech = () => {
    return (
        <>
        <div className="single-technology-bg-img">
      <h1 className="single-technology-bg-heading">Customized Technology</h1>
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

  export default CustomizedTech;