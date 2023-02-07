import React from 'react'

const Navbar = () => {
    return (
        <div className='container mx-auto my-8'>
            <nav className='flex justify-between'>
                <div className='ml-3'>
                    <span className='font-bold text-4xl text-green-500'>Fruit </span>
                    <span className='font-thin text-3xl text-gray-500'>Shop</span>
                </div>
                <div className='flex'>
                    <ul className=' my-1 hidden md:flex'>
                        <li className='menu border-1 border-b-4 rounded-none'>
                            <a href="#">Fruits</a>
                        </li>
                        <li className='menu'>
                            <a href="#">Vegetables</a>
                        </li>
                        <li className='menu'>
                            <a href="#">Organics</a>
                        </li>
                        <li className='menu'>
                            <a href="#">More</a>
                        </li>
                    </ul>
                    <div className='mx-4 my-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 my-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div className='mx-4 my-1 block md:hidden'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar