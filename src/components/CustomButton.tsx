import { CustomButtonProps } from '@/Types'
import React from 'react'
const CustomButton = ({ title, icon, isDisabled, handleClick, containerBtnStyles, textBtnStyles, btnType} : CustomButtonProps) => {
  return (
    <button
    className={` ${containerBtnStyles} text-white font-bold bg-sky-500 w-fit px-7 py-3 rounded-md`}
    disabled={isDisabled}
    type={btnType}
    onClick={handleClick}
    >
        <span>
            {icon}
        </span>
        <span className={` ${textBtnStyles}`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton