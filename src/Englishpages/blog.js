import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Css/blog.css';  // Ensure the path is correct

export default function Blog() {
  return (
    <div>
      <section className='Section-One'>
        <div className='Section-One-Header-Container'>
          <h2>BLOG</h2>
        </div>
      </section>

      <section>
        <div className='BLOG-CARD'>
          <Link to="/blogs/ultrasonic-antifouling-system" >
            <img src={"/images/Blog-1.jpg"} alt="Blog 1" />
            <h3>What is an Ultrasonic Anti-Fouling System?</h3>
            <p>Marisonia has developed a revolutionary machine technology designed to solve fouling problems</p>
            <div className="date">June 5, 2024</div>
          </Link>
          <Link to="/blogs/marine-biofouling">
            <img src={"/images/Blog-2.jpg"} alt="Blog 2" />
            <h3>Marine Biofouling</h3>
            <p>Marine biofouling organisms can affect boats in a variety of ways.</p>
            <div className="date1">May 15, 2024</div>
          </Link>
        </div>
      </section>
    </div>
  );
}



