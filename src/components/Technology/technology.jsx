import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './technology.css';

const cards = [
    {
      image: '/assets/tech.jpg',
      title: 'Automobile Test Chamber',
      description: 'Shanghai Zundar Technology Co., Ltd. has been a leader in the environment test and simulation industry since its establishment in 2000. The company is pioneering work includes the development of advanced climate simulation test chambers, which are critical for automotive manufacturing. These chambers are designed to replicate a wide range of environmental conditions, enabling rigorous testing of vehicles under simulated real-world scenarios. With Zundar’s expertise in refrigeration and air conditioning technologies, combined with a proprietary PLC control system and accurate PID algorithms, these chambers ensure high precision and reliability, helping automotive manufacturers enhance the safety and performance of their vehicles.',
    },
    {
      image: '/assets/tech.jpg',
      title: 'Electronic Technology',
      description: 'Zundar electronic technology portfolio is marked by innovation and integration. The company is products are embedded with advanced control systems, ensuring precise management of environmental variables in test chambers. This includes the integration of high-efficiency refrigeration technology and air cycle systems, making Zundar’s chambers ideal for testing electronic components under extreme conditions. The combination of these technologies ensures that electronic products can withstand various environmental stressors, enhancing their durability and performance.',
    },
    {
      image: '/assets/tech.jpg',
      title: 'Customized Technologies',
      description: 'Understanding the diverse needs of different industries, Zundar offers customized technology solutions that cater to specific testing requirements. The company’s ability to tailor its test chambers to meet unique client specifications is one of its standout features. From custom-sized chambers to specialized environmental simulations, Zundar’s customized technology ensures that clients receive solutions that are not only effective but also precisely aligned with their operational needs. This adaptability makes Zundar a preferred partner for industries requiring bespoke environmental testing solutions.',
    },
    {
        image: '/assets/tech.jpg',
        title: 'Airbag Deployment System',
        description: 'In the realm of automotive safety, Zundar has developed specialized chambers for the testing of airbags. These chambers are designed to simulate various environmental conditions that airbags might encounter throughout their lifecycle, from extreme temperatures to humidity variations. By rigorously testing airbags under these conditions, Zundar helps manufacturers ensure that their products meet the highest safety standards, ultimately contributing to the overall safety of vehicles on the road.',
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

const Technologies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false); 

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                handleNext();
            }, 3000); // Change slide every 2 seconds
        } else if (!isPlaying && interval) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const { description } = cards[currentIndex];
    const maxLength = 200; // Length for truncation
    const showReadMore = description.length > maxLength;

    return (
        <div className="technology-container">
            <h1 className='technology-main-heading'><span className='span-el'>Transforming </span>your Businesses with our Advanced Technologies</h1>
            <div className='technology-image-text-container'>
                <div className='technology-image-container'>
                    <img src={cards[currentIndex].image} alt={cards[currentIndex].title} className='technology-image' />
                </div>
                <div className='technology-text-container'>
                    <h1 className='technology-text-heading'>{cards[currentIndex].title}</h1>
                    <p className={`technology-text-para ${isExpanded ? 'expanded' : 'collapsed'}`}>
                        {isExpanded ? description : truncateText(description, maxLength)}
                    </p>
                    {showReadMore && (
                        <button className='read-more-button' onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>
            </div>
            
            <div className='technology-play-button-container'>
                <button className='technology-play-button' onClick={togglePlay}>
                {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <div className='technology-button-container'>
                    <button onClick={handlePrevious} disabled={currentIndex === 0}> <FaArrowLeft /></button>
                    <button onClick={handleNext}><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
