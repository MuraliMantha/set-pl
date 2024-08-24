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
  


const SingleTechnology = () => {
  return (
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
  );
};

export default SingleTechnology;
