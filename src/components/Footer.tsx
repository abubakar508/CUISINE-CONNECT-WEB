"use client";
import React from 'react'
import CustomButton from './CustomButton';

const Footer = () => {

  const handleClick = () => {}

  return (
    <footer className=' h-[500px] flex flex-col items-center justify-center gap-3'>
      <div className=' flex flex-wrap items-center justify-center gap-3'>
      <CustomButton title='FaceBook' isDisabled={false} btnType={'button'} handleClick={handleClick} containerBtnStyles={''} textBtnStyles={''} />
      <CustomButton title='X' isDisabled={false} btnType={'button'} handleClick={handleClick} containerBtnStyles={''} textBtnStyles={''} />
      <CustomButton title='Instagram' isDisabled={false} btnType={'button'} handleClick={handleClick} containerBtnStyles={''} textBtnStyles={''} />
      <CustomButton title='LinkedIn' isDisabled={false} btnType={'button'} handleClick={handleClick} containerBtnStyles={''} textBtnStyles={''} />
      </div>
      <div className=' text-center uppercase font-black text-blue-50 text-6xl'>
        Made With Abisma
      </div>
      <div className=' font-black text-blue-50 text-xl flex gap-3'>
        <span>Hire Me:</span> {" "}
        <span className=' lowercase'>www.github.com/abubakar508</span>
      </div>
      <div className=' font-black text-blue-50 text-xl flex gap-3'>
        <span>LinkedIm:</span> {" "}
        <span className=' lowercase'>www.linkedin.com/ismail508</span>
      </div>
      <div className=' font-black text-blue-50 text-xl flex gap-3'>
        <span>Twitter:</span> {" "}
        <span className=' lowercase'>www.x.com/machabubakar</span>
      </div>
    </footer>
  )
}

export default Footer