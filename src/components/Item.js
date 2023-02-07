import React, { useState } from 'react'
import FruitCard from './FruitCard'

const Item = () => {
    const [dummy,setDummy] = useState([1,2,3,4])

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 m-3 px-5 md:px-0'>
        {dummy.map((x) => {
          return <FruitCard key={x}/>
        })}
    </div>
  )
}

export default Item