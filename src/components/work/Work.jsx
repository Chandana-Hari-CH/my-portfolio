import React from 'react'
import { Card } from 'react-bootstrap'
import './work.css'
import budget from '/src/assets/budget.png'
import log from '/src/assets/log.png'
import parallax from '/src/assets/parallax.png'
import quotes from '/src/assets/quotes.png'
import travel from '/src/assets/travel.png'
import weather from '/src/assets/weather.png'




function Work() {
    return (
        <div id='work' className='work'>
        <div className="title">
            <h1>My Latest Work</h1>
        </div>
        <div className="work-container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <a target='_blank' href="https://librologlib.netlify.app/">
                        <Card className='card2'>
                            <Card.Img className='cardimg' variant="top" src={log} />
                           
                        </Card>
                    </a>
                </div>
                <div className="col-md-4 col-sm-12">
                    <a target='_blank' href="https://nomadicmattclone.netlify.app/">
                        <Card className='card2'>
                            <Card.Img className='cardimg' variant="top" src={travel} />
                            
                        </Card>
                    </a>
                </div>
                <div className="col-md-4 col-sm-12">
                    <a target='_blank' href="https://budgetdemo.netlify.app/">
                        <Card className='card2' >
                            <Card.Img className='cardimg' variant="top" src={budget} />
                           
                        </Card>
                    </a>
                </div>
            </div>
    
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <a target='_blank' href="https://quotesappran.netlify.app/">
                        <Card className='card2'>
                            <Card.Img className='cardimg' variant="top" src={quotes} />
                           
                        </Card>
                    </a>
                </div>
                <div className="col-md-4 col-sm-12">
                    <a target='_blank' href="https://chandanaweather.netlify.app/">
                        <Card className='card2'>
                            <Card.Img className='cardimg' variant="top" src={weather} />
                           
                        </Card>
                    </a>
                </div>
                <div className="col-md-4 col-sm-12">
                    <a href="https://parallaxxdemo.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Card className='card2' >
                            <Card.Img className='cardimg' variant="top" src={parallax} />
                           
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Work