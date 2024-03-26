import React from 'react'
import { Text } from '@chakra-ui/react'

const Title = ({ title, className }) => {
    return (
        <Text variant='h4' className={`Poppins500 !text-2xl !leading-[36px] !text-[--black-400] ${className}`}>{title}</Text>
    )
}

export default Title
