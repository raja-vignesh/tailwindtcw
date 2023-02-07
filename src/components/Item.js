import React, { useState } from 'react'
import FruitCard from './FruitCard'

const Item = () => {
    const [dummy,setDummy] = useState([
      {
        id:1,
        image:'1',
        name:'Green Grapes',
        price:100
      },
      {
        id:2,
        image:'2',
        name:'Pomegranate',
        price:200
      },
      {
        id:3,
        image:'3',
        name:'Black Grapes',
        price:250
      },
      {
        id:4,
        image:'4',
        name:'Grape Fruit',
        price:300
      },
      {
        id:5,
        image:'5',
        name:'Berry',
        price:250
      },
      {
        id:6,
        image:'6',
        name:'lemon',
        price:150
      }
    ])

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 m-3 px-5 '>
        {dummy.map((fruit) => { 
          return <FruitCard key={fruit.id} fruit={fruit}/>
        })}
    </div>
  )
}

export default Item