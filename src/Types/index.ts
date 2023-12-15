export interface SectionHeaderProps {
    containerStyles: string,
    imageUrl: any
    textStyles: string
    title: string
    subTitle: string
    width: number
    height: number
    altForImage: string
    textContainerStyles: string
    subTextStyles: string
    colorTitle: string
    imageStyles: string
}


export interface CustomButtonProps {
    title: string
    icon?: JSX.Element
    isDisabled: boolean
    btnType: 'button' | 'submit'
    handleClick: () => void
    containerBtnStyles: string 
    textBtnStyles: string
}