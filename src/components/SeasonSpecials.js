import React, { useState } from 'react'
import FruitCard from './FruitCard'

const SeasonSpecials = () => {

    const [dummy, setDummy] = useState([
        {
            id: 7,
            image: '7',
            name: 'Orange',
            price: 100
        },
        {
            id:1,
            image:'1',
            name:'Green Grapes',
            price:100
          }
    ])
    return (
        <>
            <div class="relative py-4 my-20">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-9/12 border-b border-gray-300 mx-auto"></div>
                </div>
                <div class="relative flex justify-center">
                    <span class="bg-white px-4  text-stone-500 body-font text-4xl font-curly">Season Specials</span>
                </div>
            </div>
            <div className='item-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-content-center mx-40'>
                {dummy.map((fruit) => {
                    return <FruitCard key={fruit.id} fruit={fruit} />
                })}
            </div>
        </>
    )
}

export default SeasonSpecials

// m-3 px-5
// 