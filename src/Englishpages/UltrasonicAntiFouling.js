/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../components/Css/ultrasonicAntiFouling.css';  // Ensure the path is correct

export default function UltrasonicAntiFouling() {
  return (
    <div className="ultrasonic-container">
     <h2 style={{ color: 'black', fontWeight: '900', padding: '90px',fontSize:"45px",width:"40%",marginBottom:"120px" }}>
        What is an Ultrasonic Anti-Fouling System? 
         <p >Marisonia has developed a revolutionary machine technology designed to solve fouling problems</p>
      </h2> 
   <div className='First-Ultrasonic-Paragraph'>

<img src={"/images/ultra.png"} className='image'/>
<h1>What is an Ultrasonic Anti-FoulingSystem?</h1>
   </div>
     
    </div>
  );
}
