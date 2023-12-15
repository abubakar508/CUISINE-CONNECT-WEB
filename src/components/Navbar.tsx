"use client";
import React from 'react'

// assets
import logo from '../../public/assets/Logo.png'

//nexr image optimized performance
import Image from 'next/image'

// components
import CustomButton from './CustomButton'

const Navbar = () => {

  const handleClick = () => {}
  return (
    <nav className=' flex items-center justify-between px-2 py-3'>
        <div className=' flex items-center gap-2'>
            <Image src={logo} alt='' width={50} height={50} />
            <span className=' uppercase font-black text-xl'>Cuisine <br />Connect</span>
        </div>
        <div>
          <a href="www.github.com/abubakar508" target="_blank" rel="noopener noreferrer">
          <CustomButton title='Github' isDisabled={false} btnType={'button'} handleClick={handleClick} containerBtnStyles={''} textBtnStyles={''} />
          </a>
        </div>
    </nav>
  )
}

export default Navbar