import React from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from "next/image"

const SearchBar = ({ type, placeholder, className, src, InputGroupClass, alt, ...props }) => {
    return (
        <InputGroup className={`${InputGroupClass}`}>
            <Input type={type} placeholder={placeholder} className={`${className}`} {...props} />
            <InputRightElement className="!mt-1">
                <Image src={src} alt={alt} />
            </InputRightElement>
        </InputGroup>

    )
}

export default SearchBar
