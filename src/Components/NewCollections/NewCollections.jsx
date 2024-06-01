import React from 'react'
import './NewCollections.css'
import Item from '../Items/Item'
// import new_pics from '../Assets/new_pics/pics.js'
import pics from '../Assets/new_pics/pics.js'
// import pics from '../Assets/new_pics'
// import new_pics from '../Assets/new_pics'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {pics.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name}
                image={item.image} new_price={item.new_price}
                old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}

export default NewCollections;
