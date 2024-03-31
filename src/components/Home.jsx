import React from 'react';
import hero from './data/hero.json';

function Home() {
  return (
   <>
    <div className="container home">
        <div className="left">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, earum?</h1>
            
            <button className="btn1" >Download Resume</button>

        </div>
        <div className="right">
            <div className="image">
                <img src={`/assets/${hero.imgSrc}`} alt=""/>
            </div>
        </div>
    </div>
   </>
  )
}

export default Home