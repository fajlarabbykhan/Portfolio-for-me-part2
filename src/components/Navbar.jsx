import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
const Navbar = () => {
    const [hamberger, setHamberger] = useState(false)
    const navs = [
        {
            id: 1,
            nav_item: 'home'
        },
        {
            id: 2,
            nav_item: 'projects'
        },
        {
            id: 3,
            nav_item: 'Experience'
        },
        {
            id: 4,
            nav_item: 'Contact'
        },
        {
            id: 5,
            nav_item: 'About'
        },
    ]
    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
            {/* <div><h3>Logo Will</h3></div> */}
            <div></div>
            <ul className='hidden md:flex'>
                {
                    navs.map(({ id, nav_item }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">{nav_item}
                        </li>
                    ))
                }
            </ul>

            <div onClick={() => setHamberger(!hamberger)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>

                {
                    hamberger ? <FaTimes size={20} /> : <FaBars size={20} />
                }
            </div>
            {
                hamberger && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white'>
                        {
                            navs.map(({ id, nav_item }) => (
                                <li key={id} className="px-4 cursor-pointer capitalize py-2 text-2xl">{nav_item}
                                </li>
                            ))
                        }
                    </ul>
                )
            }

        </div>
    );
};

export default Navbar;