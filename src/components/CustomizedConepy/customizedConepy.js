import React from "react";
import "./CustomizedConepy.css";
import { FaHandPointRight } from "react-icons/fa";

const CustomizedConepy = () => {
  return (
    <div className="conepy-container">
      <div className="sub-container">
        <header className="conephy-header">
          <div className="conephy-logo-con">
            <img src="/assets/logo.png" alt="SET Logo" className="conepy-logo" />
            <h2>Customized<br />Light Canopy & Shelf</h2>
          </div>
          <div className="right-thum-show">
            <FaHandPointRight />
          </div>
        </header>

        <div className="content">
          <div className="conephy-image-container">
            {["LED", "Fluorescent", "Canopy With Shelf"].map((item, index) => (
              <div className="image-box" key={index}>
                <p>{item}</p>
                <img
                  src="https://img.freepik.com/free-photo/male-farmer-with-beard-check-tea-farm_1150-14747.jpg?t=st=1723225160~exp=1723228760~hmac=df5319efeae815f2d7df59755b7d72018ca3ff9fd01ba95c87f2adacd420f87b&w=1060"
                  alt={item}
                />
              </div>
            ))}
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
            <h3>🌿 {info.title}:</h3>
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
};

export default CustomizedConepy;
