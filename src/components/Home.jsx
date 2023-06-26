import React from "react";
import sga from "../assets/3.png";
import "../styles/Home.scss";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>MIUCROSMART</h1>
          <p>my name is Rabin kakri.</p>
        </main>
      </div>
      <div className="home-2">
        <img src={sga} alt="graphics" />
        <div>
          <p>
            we are your one and only solution for the tech problem you face
            everyday.we are leading tech company whos aim is to increase the
            prblem solving ability in children
          </p>
        </div>
      </div>
      <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>
          LightBulb Consulting is a single point solution provider for startup
          to mature enterprises on technology & management. The company is
          started by a group of experienced and ambitious professionals from
          diversified fields of Information Technology, Corporate Finance and
          Business Administration. The entity core business objective is to
          create dynamic working platform for young IT Professionals towards
          development of innovative IT products, which includes Enterprise
          Solutions , Mobile Applications, Web Applications, Business Process
          Outsourcing (BPO) for local and International Market. At MBIZTech we
          are focused to support public and private enterprises on E-governance,
          promoting the startup and entrepreneurship ventures and creating the
          employment opportunity for young communities. 
        </p>
        </div>
      </div>
      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>);
};
export default Home;
