import React from 'react';

const Popup = () => {
  return (
    <div className='dark:bg-[#0B1120] h-screen w-full'>
      <div className='text-5xl text-white flex justify-center p-10'>
      ** Problem Statement **
      </div>
      <div className=' ml-32 text-2xl text-white flex flex-col justify-center'>
        <p className=' leading-10 p-5'>
        **Law enforcement agencies confront a myriad of challenges in handling a diverse range of crimes, from <br />violent offenses to white-collar fraud, aggravated by the absence of a centralized and intelligence-driven<br /> platform for real-time information dissemination. The current systems struggleto provide timely updates, <br />comprehensive data analysis, and seamless communication tailored to  specific types of crimes.<br /> This limitation inhibits law enforcement's ability to proactively respond  to evolving threats, understand <br /> crime trends, and allocate resources effectively. The lack of a  dedicated system further exacerbates the <br />complexities surrounding various crime types, hindering  the overall operational  efficiency of law enforce- <br />ment agencies.**
        </p>
      <br />
        <p className='leading-10 p-5'>
        **The absence of a comprehensive solution also extends to critical issues such as rape crimes and suicidal cases. Law enforcement faces unique challenges in obtaining real-time, accurate information specific to these sensitive matters. The current systems lack dedicated features to address these concerns, contributing to delays in response, limited situational awareness, and potential ethical considerations. As part of our commitment to transforming law enforcement capabilities, Intellisense Moral Police aims to expand its mission by incorporating features to address various types of crime, ensuring a more holistic approach to intelligence-driven policing. Through this initiative, we strive to bridge existing gaps, empower officers with actionable insights, and contribute to building safer and more resilient communities.**

        </p>
      </div>
    </div>
  );
};

export default Popup;
