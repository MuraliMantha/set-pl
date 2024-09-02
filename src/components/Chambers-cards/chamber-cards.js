import React from "react";
import "../ChambarsMainSesstion/ChamberMainsession.css";
import { Link } from "react-router-dom";

const ChamberCards = () => {
  return (
    <>
      <div className="chamber-bg-im">
        <h1 className="chamber-cards-iheading">
          {" "}
          <span className="span-el">Discover</span> our advanced solutions for
          controlled environments
        </h1>
      </div>
      {/* <div className="Product-container"> */}

      <div className="products chamber-cards-con">
        <div className="productCard chamber-single-cards-con">
          <div className="imageContainer">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2020/11/YO/EB/RR/25452958/walk-in-plant-growth-chamber-1000x1000.jpg"
              alt="The SET8-THL Plant Growth Walk-in Chamber"
              className="productImage"
            />
          </div>
          <div className="productContent">
            {/* <Link to="./singleChamber"> */}
            <h3 className="productTitle">
              The SET8-THL Plant Growth Walk-in Chamber
            </h3>
            {/* </Link> */}
            <div className="productDetails">
              <p>
                Temp Range:
                <br /> 9.25 ft²
              </p>
              <p className="product-border">
                Growth Area:
                <br /> 48 sq.ft²
              </p>
              <p>
                Growth Height:
                <br /> 20 inches
              </p>
            </div>
            <Link to="/singleProductChamber">
              <button className="learnMoreBtn">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="productCard chamber-single-cards-con">
          <div className="imageContainer">
            <img
              src="https://5.imimg.com/data5/OO/MA/SN/SELLER-39194065/walk-in-seed-storage-chamber-seed-growth-chamber-1000x1000.jpeg"
              alt="Medium Term Storage Chamber - MTS10TDH-PR"
              className="productImage"
            />
          </div>
          <div className="productContent">
            {/* <Link to="./singleChamber"> */}
            <h3 className="productTitle">
              Medium Term Storage Chamber - MTS10TDH-PR
            </h3>
            {/* </Link> */}
            <div className="productDetails">
              <p>
                Temp Range:
                <br /> 05° - 10°C
              </p>
              <p className="product-border">
                Interior :<br /> 13.4’L x 9.4’W x 8.8’H
              </p>
              <p>
                Exterior :<br /> 14.0’L x 10.0’W x 9.0’H
              </p>
            </div>
            <Link to="/mediumTermStorage">
              <button className="learnMoreBtn">Read More</button>
            </Link>
          </div>
        </div>
        <div className="productCard chamber-single-cards-con">
          <div className="imageContainer">
            <img
              src="https://img.freepik.com/premium-photo/botanist-scientists-working-together-experimental-plant-plots-greenhouses_1235831-64909.jpg?w=826"
              alt="Medium Term Storage Chamber - MTS10TDH-PR"
              className="productImage"
            />
          </div>
          <div className="productContent">
            {/* <Link to="./singleChamber"> */}
            <h3 className="productTitle">Medium term storage redundant</h3>
            {/* </Link> */}
            <div className="productDetails productDetails-p">
              {/* <p>Temp Range:<br/>  05° - 10°C
              </p>
              <p className="product-border">Interior :<br/> 13.4’L x 9.4’W x 8.8’H
              </p>
              <p>Exterior :<br/> 14.0’L x 10.0’W x 9.0’H
              </p> */}
              <p>
                Sreekara EnviroTech Private Limited offers a comprehensive
                refurbishment and upgradation solution for existing plant growth
                chambers.{" "}
              </p>
            </div>
            <Link to="/mediumtermstorageredundant">
              <button className="learnMoreBtn">Read More</button>
            </Link>
          </div>
        </div>
        <div className="productCard chamber-single-cards-con">
          <div className="imageContainer">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/8/337327192/BC/TS/CN/3288250/drosophila-incubator-500x500.jpeg"
              alt="Medium Term Storage Chamber - MTS10TDH-PR"
              className="productImage"
            />
          </div>
          <div className="productContent">
            {/* <Link to="./singleChamber"> */}
            <h3 className="productTitle">Insect Rearing Chamber </h3>
            {/* </Link> */}
            <div className="productDetails productDetails-p">
              {/* <p>Temp Range:<br/>  05° - 10°C
              </p>
              <p className="product-border">Interior :<br/> 13.4’L x 9.4’W x 8.8’H
              </p>
              <p>Exterior :<br/> 14.0’L x 10.0’W x 9.0’H
              </p> */}
              <p>
                Sreekara EnviroTech Private Limited offers a comprehensive
                refurbishment and upgradation solution for existing plant growth
                chambers.{" "}
              </p>
            </div>
            <Link to="/insectRefurbishmentSolution">
              <button className="learnMoreBtn">Read More</button>
            </Link>
          </div>
        </div>

     
      
          <Link className="nav-link1" to="chamberMainsession"><button className=" chamber-single-cards-btn">
            More Products <span className="hero-arrow-2">➔</span>
          </button></Link>
  
      </div>
      {/* </div> */}
    </>
  );
};

export default ChamberCards;
