import React from "react";
import "./ConepyPage.css";
// import plantLED from '../../../public/assets/plantLED.webp'

function ConepyPage() {
  return (
    <div className="conapy-app">
      {/* Header Section */}
      <header className="conapy-header">
        <h1 className="canopy-bg-text">Customized Light Canopy & Shelf</h1>
      
        <span>LED</span> {"|"} <span>Fluorescent</span> {"|"} <span>Canopy With Shelf</span>
      </header>

      <div>
      <div className="product-gallery">
        <div className="product-card unique-product-card-1">
          <img src="https://i.etsystatic.com/29394002/r/il/78fdae/4072839071/il_794xN.4072839071_7ddg.jpghttps://i.etsystatic.com/46338260/r/il/744aad/5684258457/il_794xN.5684258457_sleg.jpg" alt="Product 1" className="product-image" />
          {/* <div className="product-info">
            <h2 className="product-title">Product 1</h2>
          </div> */}
        </div>

        <div className="product-card unique-product-card-2">
          <img src="https://i.etsystatic.com/43132102/r/il/109a53/6189258276/il_794xN.6189258276_3kqm.jpg"  alt="Product 2" className="product-image" />
          {/* <div className="product-info">
            <h2 className="product-title">Product 2</h2>
          </div> */}
        </div>

        <div className="product-card unique-product-card-3">
          <img src="https://i.etsystatic.com/18464591/r/il/adae36/5514294609/il_794xN.5514294609_qzlx.jpg" alt="Product 3" className="product-image" />
          {/* <div className="product-info">
            <h2 className="product-title">Product 3</h2>
          </div> */}
        </div>
      </div>
      </div>

      {/* Item Cards Section */}
      <div className="conapy-card-container">
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
            <h3><span className="h3-leafe">🌿</span> {info.title}:</h3>
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

export default ConepyPage;
