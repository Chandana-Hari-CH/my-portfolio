import React from 'react';
import { Card } from 'react-bootstrap';
import './services.css';

function Services() {
  return (
    <div id='services' className='services'>
      <div className="ser-title">
        <h1>My Services</h1>
      </div>
      <div className="ser-container">
        <div className="row r1">
          <div className="col-lg-3 col-md-6 mb-4">
            <Card className='card1'>
              <Card.Body>
                <Card.Title className="ct">Web Design</Card.Title>
                <Card.Text className="cd">
                  Creating responsive and user-friendly websites tailored to your business needs.
                </Card.Text>
                <Card.Link href="#" className="cp">
                  Read More <i style={{ color: 'white' }} className="fa-solid fa-arrow-right arrow"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <Card className='card1'>
              <Card.Body>
                <Card.Title className="ct">Graphic Design</Card.Title>
                <Card.Text className="cd">
                  Delivering creative and visually striking designs to enhance brand identity.
                </Card.Text>
                <Card.Link href="#" className="cp">
                  Read More <i style={{ color: 'white' }} className="fa-solid fa-arrow-right arrow"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <Card className='card1'>
              <Card.Body>
                <Card.Title className="ct">App Design</Card.Title>
                <Card.Text className="cd">
                  Designing intuitive and seamless app interfaces for an exceptional user experience.
                </Card.Text>
                <Card.Link href="#" className="cp">
                  Read More <i style={{ color: 'white' }} className="fa-solid fa-arrow-right arrow"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <Card className='card1'>
              <Card.Body>
                <Card.Title className="ct">Social Media</Card.Title>
                <Card.Text className="cd">
                  Managing dynamic social media strategies to grow your brand and connect with your audience.
                </Card.Text>
                <Card.Link href="#" className="cp">
                  Read More <i style={{ color: 'white' }} className="fa-solid fa-arrow-right arrow"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
