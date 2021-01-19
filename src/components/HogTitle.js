
import React, { useState } from 'react' 
import augustus_gloop from '../assets/augustus_gloop.jpg'
import babe from '../assets/babe.jpg'
import bailey from '../assets/bailey.jpg'
import cherub from '../assets/cherub.jpg'
import galaxy_note from '../assets/galaxy_note.jpg'
import leggo_my_eggo from '../assets/leggo_my_eggo.jpg'
import peppa from '../assets/peppa.jpg'
import piggy_smalls from '../assets/piggy_smalls.jpg'
import piglet from '../assets/piglet.jpg'
import porkchop from '../assets/porkchop.jpg'
import trouble from '../assets/trouble.jpg'
import truffle_shuffle from '../assets/truffle_shuffle.jpg'


const imageMapper = {
    "Augustus Gloop": augustus_gloop,
    Babe: babe,
    Bailey:bailey,
    Cherub: cherub,
    "Galaxy Note":galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    Peppa: peppa,
    "Piggy smalls": piggy_smalls,
    Piglet:piglet,
    Porkchop:porkchop,
    Trouble:trouble,
    "Truffle Shuffle":truffle_shuffle,
}

function HogTitle({hog}) {
    const image = imageMapper[hog.name]
    const [isShowing, setIsShowing] =useState(false)


    function handleToggle(){
        setIsShowing(!isShowing)
    }

    return (
      <div className="ui eight wide column">
        <h1>{hog.name}</h1>
        <img style={{width:"400px"}} src={image} alt={hog.name}/>
        <button onClick={handleToggle}> Click for detail</button>
        {isShowing ? (
          <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "yup" : "no"}</p>
          <p>Higest medal Achieved: {hog.medal}</p>
          </div>
        ) : null }
      </div>
     
    );
  }
  
  export default HogTitle;
  