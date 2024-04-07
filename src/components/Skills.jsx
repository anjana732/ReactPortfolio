import React from 'react'
import skills from './data/skills.json'

function Skills() {
  return (
   <>
    <div className="container skill">
      <h1>SKILLS</h1>
      {skills.map((data)=> {
        <div className="items" key={data.id}>
            <div className="item">
              <img src={`/assets/${data.imageSrc}`} alt=""></img>
              <h3>{data.title}</h3>
            </div>
        </div>
      })}
    </div>
   </>
  )
}

export default Skills