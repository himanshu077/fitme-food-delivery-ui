"use client";
import React from 'react'
import Title from '../../common/Title'
import { Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Image from "next/image"
import SandwichSvg from "@/assets/svg/Sandwich.svg"
import IndianThaliSvg from "@/assets/svg/IndianThali.svg"
import BreakFastSvg from "@/assets/svg/Breakfast.svg"
import RollsSvg from "@/assets/svg/Rolls.svg"
import SaladSvg from "@/assets/svg/Salad.svg"
import BiriyaniSvg from "@/assets/svg/Biriyani.svg"

const FoodBanner = () => {

    const dishes = [
        { id: 0, title: "Sandwich", src: SandwichSvg, alt: "food-image" },
        { id: 2, title: "North Indian Thali", src: IndianThaliSvg, alt: "food-image" },
        { id: 3, title: "Egg BreakFast", src: BreakFastSvg, alt: "food-image" },
        { id: 4, title: "Rolls & Puffs", src: RollsSvg, alt: "food-image" },
        { id: 5, title: "Salads", src: SaladSvg, alt: "food-image" },
        { id: 6, title: "Biriyani Box", src: BiriyaniSvg, alt: "food-image" },
    ]

    return (
        <Container maxW='84.4vw' mx="auto">
            <Title title="What’s on your mind?" />
            <Box className="!flex lg:!flex-row md:!flex-row !flex-col !gap-[6.2vw] !my-16">
                {dishes.map((data) => (
                    <Box key={data.id}>
                        <Image src={data.src} alt={data.alt} />
                        <Text className="Poppins500 !text-base !text-center !text-[--black-400] !my-7">{data.title}</Text>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default FoodBanner
