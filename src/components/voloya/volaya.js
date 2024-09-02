import React from "react";
import "../CustomizedConepy/ConepyPage.css";
// import plantLED from '../../../public/assets/plantLED.webp'

function Volaya() {
  return (
    <div className="conapy-app">
      {/* Header Section */}
      <header className="conapy-header">
        <h1 className="canopy-bg-text">Volaya LED Lights</h1>
        <span>L Series</span> {"|"} <span>BX-Series</span> {"|"}{" "}
        <span>RX-Series
        </span>
      </header>

      <div>
        <div className="product-gallery">
          <div className="product-card unique-product-card-1">
            <img
              src="https://www.valoya.com/wp-content/uploads/elementor/thumbs/vertical-farming-carousel-3-min-opsatt5os9ioqbj4vf20dfk6rv3d64sppqx5fea04g.jpg"
              className="product-image"
            />
            {/* <div className="product-info">
            <h2 className="product-title">Product 1</h2>
          </div> */}
          </div>

          <div className="product-card unique-product-card-2">
            <img
              src="https://www.valoya.com/wp-content/uploads/elementor/thumbs/Vertical-farming-carousel-min-opsaukf0agk030fjg8u6vqok01d0dcsxhhu8cf5l40.jpg"
              alt="Product 2"
              className="product-image"
            />
            {/* <div className="product-info">
            <h2 className="product-title">Product 2</h2>
          </div> */}
          </div>

          <div className="product-card unique-product-card-3">
            <img
              src="https://www.valoya.com/wp-content/uploads/elementor/thumbs/SGL_P07_SelectaKlemm1-o8v2y5vf2ib9g1jgl3qvl13ueuy3pvdabq7454fzfk.jpg"
              alt="Product 3"
              className="product-image"
            />
            {/* <div className="product-info">
            <h2 className="product-title">Product 3</h2>
          </div> */}
          </div>
        </div>
      </div>

      {/* Item Cards Section */}
      {/* <div className="conapy-card-container">
        <ItemCard
          title="LED"
          description="Basic LED Control: Basic controller which can control temperature (Compressor & Heater - PID & ON/OFF Mode) & Humidity (Humidifier) with output like alarm, water level, door open/close. Optional features - GSM based alarm monitoring, data recording with multiple channels, data extract through USB."
          imageUrl="https://mygreenhousestore.com/cdn/shop/articles/Palram-Canopia_Greenhouses_Accessories_Brighton_LED_Grow_Light_6_1500x.jpg?v=1687134354"
        />
        <ItemCard
          title="Fluorescent"
          description="Touch Screen Controller With Redundant Facility: Touch Screen Controller which can control temperature (Compressor & Heater - PID & ON/OFF Mode) & Humidity (Humidifier) with Outputs like alarm, water level, door open/close. Optional features - GSM based alarm monitoring, data recording with multiple channels, data extract through USB."
          imageUrl="https://homesteadandchill.com/wp-content/uploads/2020/12/using-grow-lights-feature-greenhouse-homestead-chill-1536x1152.jpeg"
        />
        <ItemCard
          title="Canopy With Shelf"
          description="Control Panel including Touch Screen Controller: Three phase with single phase preventer/single phase power supply unit with necessary components like MCB, contactor, fuse, relay, amps indicator, on/off switch and easy termination point. Complete wiring for main system and redundant system in the control panel will be provided with indications and user/maintenance manual."
          imageUrl="https://img.freepik.com/free-photo/boxes-with-flowers-preparing-plants-planting-planting-spring-primrose-flowers-park-hello-spring-gardening-spring_166373-3537.jpg?t=st=1724562210~exp=1724565810~hmac=42a519759976ad6185c06682838f75e1e27dd5f8e89fa53e91dd104e579ec0bd&w=996"
        />
      </div> */}
      <div className="canopy-side-card-products-container">
      <p className="card-border-head"></p>

        <div className="canopy-side-card-products">
          <div>
          <img className="conapy-head-img" src="https://www.valoya.com/wp-content/uploads/elementor/thumbs/SGL_P07_SelectaKlemm1-o8v2y5vf2ib9g1jgl3qvl13ueuy3pvdabq7454fzfk.jpg" />
          </div>
          <div>
            <h2 className="conapy-head-text">Slim, Light and Bright</h2>
            <p>With absolute light uniformity and no heat produced even when placed right above the canopy, the L-Series is ideal for vertical farming, tissue culture, growth chambers, grafting and growing cannabis in the vegetative stage. The T8 form factor allows the L-series products to be installed in fluorescent tube fixtures without modification (fixtures with magnetic ballast). By using optional end-caps the IP rating can go as high as IP65.</p>
          </div>
        </div>

        <p className="card-border-head"></p>

        <div className="canopy-side-card-products">
        
          <div>
            <h2 className="conapy-head-text">BX-Series</h2>
            <p>Based on Valoya’s bestseller, the B-Series, this next step in evolution brings countless improvements. The BX-Series are high intensity, robust LED bars designed for growth chambers and multitier cultivation. With the light intensity of up to 2.5 µmol/W and the dimming function these bars can be placed anywhere between 10 cm and 4 m above the canopy (4″ – 13′).

The BX-Series is rated IP67 meaning it is completely dust-tight and can withstand water submersion without compromising any functionality. Typical lifetime is 50,000 hours for the light output to drop to 70% of nominal</p>
          </div>
          <div>
           <img className="conapy-head-img" src="https://www.valoya.com/wp-content/uploads/elementor/thumbs/5-1-o8sw0als8s0bq5ih3ov815zmai5lprcixs8jya3zmo.jpg" />
          </div>
        </div>

        <p className="card-border-head"></p>

        <div className="canopy-side-card-products">
          <div>
            <img className="conapy-head-img" src="https://www.valoya.com/wp-content/uploads/elementor/thumbs/Valoya-RX-Series-ofx6z0vqtsosnubo6a1mjhigcdolcw4qvi9ohjztik.jpg"  />
          </div>
          <div>
          <h2 className="conapy-head-text">RX-Series</h2>

            <p>Designed as a replacement for HID lighting, the RX-series is a high power, dimmable LED luminaire with a high IP rating. The robust all aluminium build, passive cooling and tempered glass cover ensure a long lifetime in the most demanding of environments.

The luminaire can be placed up to 4 m (13′) above the canopy. Typical lifetime is 50 000 hours for the light output to drop to 70% of nomina</p>
          </div>
        </div>
      </div>

      <div className="conephy-info-container">
        {[
          {
            title: "Touch Screen Controller With Redundant Facility",
            content:
              "Touch Screen Controller which can control temperature (Compressor & Heater - PID & ON/OFF Mode) & Humidity (Humidifier) with Outputs like alarm, water level, door open/close. Optional features - GSM based alarm monitoring, data recording with multiple channels, data extract through USB.",
          },
          {
            title: "Control Panel including Touch Screen Controller",
            content:
              "Three phase with single phase preventer/single phase power supply unit with necessary components like MCB, contactor, fuse, relay, amps indicator, on/off switch and easy termination point. Complete wiring for main system and redundant system in the control panel will be provided with indications and user/maintenance manual.",
          },
          {
            title: "Basic LED Control",
            content:
              "Basic controller which can control temperature (Compressor & Heater - PID & ON/OFF Mode) & Humidity (Humidifier) with output like alarm, water level, door open/close. Optional features - GSM based alarm monitoring, data recording with multiple channels, data extract through USB.",
          },
        ].map((info, index) => (
          <div className="conephy-info-box" key={index}>
            <h3>
              <span className="h3-leafe">🌿</span> {info.title}:
            </h3>
            <p>{info.content}</p>
          </div>
        ))}

        <div className="conephy-core-strength">
          <h2>
            Core Strength is to Provide innovative Solution For Creating New
            Products (MAKE IN INDIA)
          </h2>
        </div>

        <div className="conephy-features">
          <ul>
            {[
              "Design and interface electro-mechanical devices with indigenous components from different sources/modify with an equivalent.",
              "Design electric power panels including component layout assembly for single phase and three phase (different equipment).",
              "Design electronic circuits with photos sensors, pneumatics sensors, limit sensors, flow sensors, and movement sensors.",
              "Innovative solutions for converting the regular human operations to automated non-human operation.",
              "Temperature, humidity, CO2 control chambers - monitor, operate, vary from various circuits.",
              "Convert normal humid lab to dry lab with the necessary dehumidifiers and control system.",
              "Data logging and app-based controllers for monitoring the parameters and alarm systems.",
            ].map((feature, index) => (
              <li key={index}>🌿 {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ItemCard({ title, description, imageUrl }) {
  return (
    <div>
      <div className="conapy-card">
        <img src={imageUrl} alt={title} className="conapy-card-image" />
        <div className="conapy-card-content">
          <h2 className="conapy-card-title">{title}</h2>
          <p className="conapy-card-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Volaya;
