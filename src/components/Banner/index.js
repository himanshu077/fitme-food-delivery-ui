"use client";
import React from 'react'
import { Box } from '@chakra-ui/react'
import { Container, Text } from '@chakra-ui/react'
import TagSvg from "@/assets/svg/TagSvg.svg"
import Image from "next/image"
import SearchBar from '../../common/SearchBar'
import PrimaryButton from '../../common/PrimaryButton'
import Link from "next/link"

const Banner = () => {
    return (
        <Box className="bg-[--saffron-400] !h-[200px] !flex !justify-center !items-center">
            <Container maxW='62.4vw' mx="auto" className="lg:!pt-9">
                <Box className="!flex  !justify-center lg:!flex-row !items-center !gap-6 mb-8">
                    <Box className="!flex !flex-row !gap-2">
                        <Text className="Poppins600 !text-2xl !text-white">Search by</Text>
                        <Image src={TagSvg} alt="tag-image" />
                    </Box>
                    <SearchBar placeholder="Enter item or restaurant you are looking for" _placeholder={{ color: 'white', fontSize: "14px" }} size="lg" InputGroupClass="!max-w-[33.7vw] !border-white !text-white" />
                    <Link href="/searchedresult">
                    <PrimaryButton className="!bg-[--black-400] !text-white lg:!px-[1.4vw] !my-[3px] lg:!py-[14px] !py-3 !px-4 !font-semibold !text-sm !rounded-[10px]" title="Search Now" />
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}

export default Banner
