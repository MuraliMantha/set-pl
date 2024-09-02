import React from 'react';

const AboutCarousel = () => {
  return (

    <div>
        <div className="about-carousel__container">
          <div className="about-carousel-heading">
            <h2 className="">Our Products and Services</h2>
            <p className="container__p">
            At SET, we take pride in our ability to design, fabricate, and assemble a wide range of environmental chambers, including Walk-in Chambers, Plant Growth Chambers, and Humidity Chambers. Our products are built in-house and can be customized with various controllers and features to match specific test processes, ensuring reliability and precision.
            </p>
          </div>
        </div>
    <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="4"></button>
      </div>
      <div className="carousel-inner">
        
        <div className="carousel-item active">
          <div className="about-carousel__card">
          <div className="chamber-section">
            <div>
            <img src="https://img.freepik.com/free-vector/gardening-home-concept_23-2148532085.jpg?t=st=1723398954~exp=1723402554~hmac=efb4c979b0ce8fa68600eccc4663b8a214bf8749629c81fb685e03f22403fe45&w=740" alt="Sreekara EnviroTech" className="chamber-image"/>
            </div>
       

        <div className="about-carosel-content">
        <h2 className="about-carousel__heading">Environmental Commitment</h2>

          <p>We recognize the importance of reducing the environmental impact of our operations. As a company specializing in environmental technologies, SET integrates eco-friendly practices in our manufacturing processes. Our chambers are designed to minimize energy consumption and utilize environmentally responsible materials. We are constantly researching and adopting the latest sustainable technologies to ensure that our products not only meet your testing needs but also align with global environmental standards.</p>
        </div>
      </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="about-carousel__card">
          <div className="chamber-section">
        <img src="https://img.freepik.com/free-vector/gardening-home-concept_23-2148532085.jpg?t=st=1723398954~exp=1723402554~hmac=efb4c979b0ce8fa68600eccc4663b8a214bf8749629c81fb685e03f22403fe45&w=740" alt="Sreekara EnviroTech" className="chamber-image"/>

        <div className="about-carosel-content">
        <h2 className="about-carousel__heading">Partnerships and Collaborations
        </h2>

          <p>We believe in the power of collaboration. Over the years, SET has developed strong partnerships with leading technology providers, academic institutions, and research organizations across the globe. These collaborations allow us to stay at the forefront of technological advancements and continuously improve our product offerings. By working closely with our partners, we ensure that our solutions are both cutting-edge and robust, capable of addressing even the most complex environmental testing challenges.</p>
        </div>
      </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="about-carousel__card">
          <div className="chamber-section">
        <img src="https://img.freepik.com/free-vector/gardening-home-concept_23-2148532085.jpg?t=st=1723398954~exp=1723402554~hmac=efb4c979b0ce8fa68600eccc4663b8a214bf8749629c81fb685e03f22403fe45&w=740" alt="Sreekara EnviroTech" className="chamber-image"/>

        <div className="about-carosel-content">
        <h2 className="about-carousel__heading">Commitment to Quality

        </h2>

          <p>Quality is at the heart of everything we do at SET. From the initial design concept to the final assembly and testing, we adhere to strict quality control protocols to ensure that our products meet international standards. Our in-house team of engineers, technicians, and quality specialists works tirelessly to guarantee that every environmental chamber we deliver is built to perform reliably and consistently. We believe that our dedication to quality is one of the reasons why clients choose us as their trusted partner.</p>
        </div>
      </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="about-carousel__card">
          <div className="chamber-section">
        <img src="https://img.freepik.com/free-vector/gardening-home-concept_23-2148532085.jpg?t=st=1723398954~exp=1723402554~hmac=efb4c979b0ce8fa68600eccc4663b8a214bf8749629c81fb685e03f22403fe45&w=740" alt="Sreekara EnviroTech" className="chamber-image"/>

        <div className="about-carosel-content">
        <h2 className="about-carousel__heading">Client Success Stories

        </h2>

          <p>Our environmental test chambers have supported some of the most groundbreaking projects in research and industry. From enabling the development of new pharmaceutical drugs to helping automotive manufacturers optimize the safety of their vehicles, our chambers are an integral part of our clients' success. We are proud to have contributed to numerous projects that have had a positive impact on industries and communities worldwide.</p>
        </div>
      </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="about-carousel__card">
          <div className="chamber-section">
        <img src="https://img.freepik.com/free-vector/gardening-home-concept_23-2148532085.jpg?t=st=1723398954~exp=1723402554~hmac=efb4c979b0ce8fa68600eccc4663b8a214bf8749629c81fb685e03f22403fe45&w=740" alt="Sreekara EnviroTech" className="chamber-image"/>

        <div className="about-carosel-content">
        <h2 className="about-carousel__heading">Your Trusted Partner

        </h2>

          <p>At Sreekara Envirotech Private Limited, we don't just provide products—we provide solutions. Our team is passionate about working with you every step of the way, from concept to installation, ensuring that your environmental test chambers are perfectly suited to your needs. With decades of experience and a customer-first approach, we are confident that SET is the right choice for your environmental testing solutions.</p>
        </div>
      </div>
          </div>
        </div>
       
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default AboutCarousel;
