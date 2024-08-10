import React from 'react';
import Header from '../Components/Header';
import './pages.css';
import Footer from '../Components/Footer';
import glb from '../Videos/glb.mp4';
import {useLocation} from 'react-router-dom';
import RealTimeUpdates from '../Components/RealTimeUpdates';

const Home = () => {

  // const location = useLocation()
  return (
    <>
    {/* <h1>Hello {location.state.id} and Welcome to the home</h1> */}
    <Header />
      <div className="pg-1 m-10 flex justify-center mt-16  ">
        <div className="p1">
          <span className='intp'>IntelliSense - Moral Police <br/></span>
          <span className='secp '>Security that thinks ahead, for a safer tomorrow.</span>
          <video className='m-0 ml-10 mt-11' src={glb} loop muted autoPlay></video>
        </div>
      </div>
        <section className="main-section mt-28">
          <div className="left-side">
            <h2>About IntelliSense</h2>
            <p>
              IntelliSense is an advanced data analysis platform that provides real-time insights into various aspects of data, including crime reports, trends, and patterns. It utilizes cutting-edge technologies such as machine learning and artificial intelligence to process and analyze large volumes of data from diverse sources.
            </p>
            <p>
              By harnessing the power of data, IntelliSense helps law enforcement agencies, policymakers, and communities make informed decisions to enhance public safety and security. With intuitive visualization tools and customizable dashboards, users can easily explore and understand complex datasets, uncovering actionable insights to address crime and improve overall safety.
            </p>
          </div>
          <div className="right-side">
            <h2>How It Works</h2>
            <p>
              IntelliSense works by collecting data from various sources, including crime databases, surveillance systems, social media feeds, and sensor networks. This data is then processed and analyzed in real-time using advanced algorithms to identify patterns, trends, and anomalies.
            </p>
            <p>
              The platform employs machine learning models to predict future crime hotspots, detect unusual activities, and provide early warnings to law enforcement agencies. Through interactive visualizations and data-driven insights, IntelliSense empowers users to proactively address security challenges, allocate resources efficiently, and implement targeted interventions to prevent crime and ensure public safety.
            </p>
          </div>
        </section>
        <RealTimeUpdates />
      <Footer />
    </>
  );
};

export default Home;
