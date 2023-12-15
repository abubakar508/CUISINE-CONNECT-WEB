"use client";
import React from 'react'
import CustomButton from './CustomButton'


const LowerSection = () => {

    const handleClick = () => {}
  return (
    <div className=' h-screen bg-gradient-conic from-yellow-500/40 via-slate-900/40 to-black flex items-center justify-center p-5'>
        <div className=' flex flex-col gap-3'>
            <h1 className=' font-black uppercase text-4xl md:text-5xl'>
                Need the source code...
            </h1>
            <span className=' font-bold text-slate-400 md:w-[700px]'>
                Get it by clicking the link below. A well explained code that spans from a bear beginning to an intermediate understanding.
            </span>
            <div className=' flex gap-3'>
            <CustomButton title='Github' isDisabled={false} btnType={'button'} handleClick={handleClick} containerBtnStyles={''} textBtnStyles={''} />
            <CustomButton title='GitLab' isDisabled={false} btnType={'button'} handleClick={handleClick} containerBtnStyles={''} textBtnStyles={''} />
            <CustomButton title='BitBucket' isDisabled={false} btnType={'button'} handleClick={handleClick} containerBtnStyles={''} textBtnStyles={''} />
            </div>
        </div>
    </div>
  )
}

export default LowerSection