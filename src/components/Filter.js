import React from 'react'


function Filter({isShowingGreased, setIsShowingGreased, sortBy, setSortBy}) {
  
    return (
      <div style={{margin:"20px"}}>
          <label>Greased Pigs Only?</label>
          <input checked={isShowingGreased} onChange={(e) => setIsShowingGreased(e.target.checked) }
           type="checkbox"/>
           <select value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}>

               <option value="name">Sort by name</option>
               <option value="weight">Sort by weight</option>
           </select>
      </div>
    );
  }
  
  export default Filter;
  