import React, { useState } from 'react'

const FilterActions = () => {

    const [selected, setSelected] = useState(1)
    return (
        <section className='w-2/3 mx-auto flex flex-col md:flex-row justify-center md:my-16'>
            <button className={`${(selected == 1) ? 'selectMenu bg-green-400 text-white' : 'selectMenu text-gray-500'}`} onClick={() => setSelected(1)}>Latest</button>
            <button className={`${(selected == 2) ? 'selectMenu bg-green-400 text-white' : 'selectMenu text-gray-500'}`} onClick={() => setSelected(2)}>Best Seller</button>
            <button className={`${(selected == 3) ? 'selectMenu bg-green-400 text-white' : 'selectMenu text-gray-500'}`} onClick={() => setSelected(3)}>Special</button>
        </section>
    )
}

export default FilterActions


{/* <section className=' my-20 container mx-auto grid lg:grid-cols-3 grid-rows-1 gap-1'>
<div className='flex lg:flex-row flex-col justify-between lg:col-start-2 row-start-2 '>
    <button className={`${(selected == 1) ? 'selectMenu bg-green-400 text-white' : 'selectMenu text-gray-500'}`} onClick={() => setSelected(1)}>Latest</button>
    <button className={`${(selected == 2) ? 'selectMenu bg-green-400 text-white' : 'selectMenu text-gray-500'}`} onClick={() => setSelected(2)}>Best Seller</button>
    <button className={`${(selected == 3) ? 'selectMenu bg-green-400 text-white' : 'selectMenu text-gray-500'}`} onClick={() => setSelected(3)}>Special</button>
</div>
</section> */}