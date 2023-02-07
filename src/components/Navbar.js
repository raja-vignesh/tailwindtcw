import React, { useState } from 'react'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className='w-full bg-white mb-8'>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div>
                    <div className="flex items-center justify-between py-2 md:py-5 md:block flex-shrink-0">
                        <div>
                            <span className='font-bold text-4xl text-green-500'>Fruit </span>
                            <span className='font-thin text-3xl text-gray-500'>Shop</span>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex justify-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className='menu border-1 border-b-4 rounded-none'>
                                <a href="#">Fruits</a>
                            </li>
                            <li className='menu'>
                                <a href="#">Vegetables</a>
                            </li>
                            <li className='menu'>
                                <a href="#">More</a>
                            </li>
                            
                            <li className='mx-8 py-2 px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 my-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar







{/* <div className='container '>
            <nav className='flex justify-between'>
                <div className='ml-3 flex-shrink-0'>
                    <span className='font-bold text-4xl text-green-500'>Fruit </span>
                    <span className='font-thin text-3xl text-gray-500'>Shop</span>
                </div>
                <div className='flex'>
                    <ul className=' my-1  md:flex'>
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
        </div> */}