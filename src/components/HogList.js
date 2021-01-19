import React, { useState } from 'react' 
import HogTitle from "./HogTitle"
import Filter from "./Filter"

function HogList({hogs}) {

    const [isShowingGreased, setIsShowingGreased] = useState(false)
    const [sortBy, setSortBy] = useState(true)

     const hogTiles = hogs
     .filter((hog) => {
        if(isShowingGreased) {
            return hog.greased 
        } else{
            return true 
        }
    })
    .sort((hogA, hogB) => {
        if(sortBy === "weight"){
         return hogA.weight - hogB.weight
        }else {
         return hogA.name.localeCompare(hogB.name)
        }
    })
    .map((hog) => {
        return <HogTitle key={hog.name} hog={hog} />
    })


  
    return (
      <div>
        <Filter isShowingGreased={isShowingGreased} setIsShowingGreased={setIsShowingGreased}
         sortBy={sortBy} setSortBy={setSortBy}/>
         <div className="ui grid container">
         {hogTiles}
         </div>
       
    
      </div>
    );
  }
  
  export default HogList;
  