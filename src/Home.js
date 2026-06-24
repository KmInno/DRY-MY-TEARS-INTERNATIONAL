import React from 'react'
import image from './/Potifolio.jpg';
import './Home.css'; 
function Home() {
  return (
<div className='learn-more' >
      <div className="home-header">
      <div className='home-content'>
   <h1>Hello , I am JENGO ARNOLD</h1>
          <h2 className="Engineer-title">
            Network Engineer
            <span className="Web-Developer">
              & WebApp Developer
            </span>
          </h2>

          <p className="description">
            Passionate about networking, cybersecurity, and modern web
            development. I build secure infrastructures and create
            responsive, user-friendly web applications.
          </p>

          <div className="button-group">
            <button className="Proj">
              View Projects
            </button>

            <button className="Button">
              Contact Me
            </button>
 <button className="Cv">
              Download CV
            </button>


          </div>

          {/* Stats */}
          <div className="Numbers">
            <div>
              <h2 className="No3">15+</h2>
              <p className="Cer3">Projects</p>
            </div>

            <div>
              <h2 className="No2">3+</h2>
              <p className="Cer2">Years Learning</p>
            </div>

            <div>
              <h2 className="No1">5+</h2>
              <p className="Cer">Certifications</p>
            </div>
          </div>
        </div>
<img src={image} alt="Profile-image" className='imageG'/>
      </div>
     </div>





  
  )
}

export default Home
