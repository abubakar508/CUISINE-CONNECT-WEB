import React from 'react'

// next image
import Image from 'next/image'

//types
import { SectionHeaderProps } from '@/Types'


//components
import CustomButton from './CustomButton'

const SectionHeader = ({ containerStyles, imageUrl, textStyles, title, subTitle, width, height, altForImage, textContainerStyles, subTextStyles, colorTitle, imageStyles,} : SectionHeaderProps) => {
  return (
    <section className={` ${containerStyles} flex items-center justify-evenly md:justify-between py-3 px-3 md:py-5 md:px-5 lg:px-10 lg:py-7 xl:px-12 xl:py-8 2xl:px-14 2xl:py-10 h-screen`}>
        <div>
            <Image src={imageUrl} alt={altForImage} width={width} height={height} className={` ${imageStyles}`} quality={100} />
        </div>
        <div className={` ${textContainerStyles}`}>
            <h1 className=' font-black'>
                <span className=' bg-yellow-500 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-black/50'>
                    {colorTitle}
                </span>
                {" "}
                {title}
            </h1>
            <span className={` ${subTextStyles}`}>
                {subTitle}
            </span>

        </div>
    </section>
  )
}

export default SectionHeader