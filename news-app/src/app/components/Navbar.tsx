'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import logo from "../../../../assets/images/logo.svg"
import iconmenu from "../../../../assets/images/icon-menu.svg"
import iconmenuclose from "../../../../assets/images/icon-menu-close.svg"

type Props = {}

const Navbar = (props: Props) => {
    const [navToggle, setNavToggle] = useState(false)

    const toggleMenu = () => {
        setNavToggle(!navToggle)
    }

  return (
    <div className='flex justify-between items-center w-full'>
        <Image alt='logo' src={logo} className='w-10 lg:w-14'/>
        <div className='relative '>
            <div>
                <ul className="lg:flex space-x-8 text-darkgrayblue">
                    <li className="hidden lg:flex hover:text-softred cursor-pointer">Home</li>
                    <li className="hidden lg:flex hover:text-softred cursor-pointer">New</li>
                    <li className="hidden lg:flex hover:text-softred cursor-pointer">Popular</li>
                    <li className="hidden lg:flex hover:text-softred cursor-pointer">Trending</li>
                    <li className="hidden lg:flex hover:text-softred cursor-pointer">Categories</li>
                </ul>
                <button onClick={toggleMenu} className='lg:hidden'>
                    <Image alt='menu icon' src={iconmenu} />
                </button>
                {navToggle && ( 
                    <div>
                    <div
                      className="fixed inset-0 z-50 bg-black opacity-50"
                      onClick={toggleMenu}
                    ></div>
                    <div className="fixed inset-y-0 right-0 z-50 w-64 bg-white p-6 transition-transform transform translate-x-0 flex items-start flex-row-reverse justify-between">
                        <button onClick={toggleMenu}>
                            <Image alt='menu icon' src={navToggle ? iconmenuclose : iconmenu} />
                        </button>
                        <ul className=' pt-24 lg:flex '>
                            <li className='py-3 hover:text-softred cursor-pointer'>Home</li>
                            <li className='py-3 hover:text-softred cursor-pointer'>New</li>
                            <li className='py-3 hover:text-softred cursor-pointer'>Popular</li>
                            <li className='py-3 hover:text-softred cursor-pointer'>Trending</li>
                            <li className='py-3 hover:text-softred cursor-pointer'>Categories</li>
                        </ul>
                    </div>
                  </div>
                    )}
            </div>
        </div>
    </div>
  )
}

export default Navbar