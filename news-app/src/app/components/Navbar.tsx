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
        <Image alt='logo' src={logo} className='w-10'/>
        <div className='relative '>
            <div>
                <button onClick={toggleMenu}>
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
                        <ul className=' pt-24'>
                            <li className='py-3'>Home</li>
                            <li className='py-3'>New</li>
                            <li className='py-3'>Popular</li>
                            <li className='py-3'>Trending</li>
                            <li className='py-3'>Categories</li>
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