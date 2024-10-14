import React from 'react'
import './about.css'
import pic from '/src/assets/pic.jpg'
function About() {
  return (
    <div className='about'>

        <div id='about' className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-p">
                    <p>Hi, I’m Chandana – a full-stack developer with a passion for crafting seamless and dynamic web experiences.I enjoy taking on challenging projects that allow me to grow my technical skills and bring ideas to life.</p>
                    <p>Currently, I am deepening my expertise in the MEARN stack through my internship at Luminar Technolab, where I work on real-world projects, exploring both the front-end and back-end aspects of development. I’m always eager to learn new tools and technologies that help me build better, more efficient solutions.</p>
                </div>
                <div className="skills">
                    <div className="skill-p">
                        <h3>Skills :</h3>
                        <p>HTML & CSS</p>
                        <p>Bootstrap</p>
                        <p>React Js</p>
                        <p>Javascript</p>
                    </div>
                </div>
            </div>
           
        </div>
        

    </div>
  )
}

export default About