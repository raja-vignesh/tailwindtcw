import React from 'react'

const FruitCard = () => {
    return (
        <div className='flex flex-col border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group relative transform hover:scale-105 duration-75'>
            <img src={require('../images/6.jpeg')} className='w-full h-52 object-cover' />
            <div className=''>
                <span className='block font-body p-2 text-center text-gray-500'>Apple</span>
                <span className='block font-body p-1 text-center text-gray-500' >$10</span>
                <span className='block font-body  text-center uppercase text-lime-500 text-xs invisible group-hover:visible' >Add to cart</span>
            </div>
            <span className=' text-white top-3 p-1 right-3 border bg-sky-300 w-15 text-center h-7 rounded-md overflow-hidden absolute text-sm'>1% off</span>
        </div>
    )
}


{/* <div className='border bg-sky-200 w-10 h-5 rounded-md overflow-hidden '>
                <span className='p-1 text-white top-10 right-1'>1% off</span>
            </div> */}
export default FruitCard