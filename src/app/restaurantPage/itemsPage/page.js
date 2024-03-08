import React from 'react'
import { Box, Text, Container, Divider, Button } from '@chakra-ui/react'
import OffersBanner from '../../../components/OffersBanner'
import Image from "next/image"
import AddedFood from "@/assets/svg/AddedFood.svg"
import PrimaryButton from '../../../common/PrimaryButton'

const ItemsPage = () => {
    return (
        <Box className="">
            <OffersBanner />
            <Container maxW='84.4vw' mx="auto" className="!my-24">
                <Box className="!flex lg:!flex-row !flex-col !gap-20">
                    <Box className="lg:!pl-[4vw]">
                        <Text className="text-[--saffron-400] text-base font-medium py-1 text-right">Recommended</Text>
                        <Text className="text-[--black-400] text-base font-medium py-1 text-right">Breakfast Box</Text>
                        <Text className="text-[--black-400] text-base font-medium py-1 text-right">Lunch Box</Text>
                        <Text className="text-[--black-400] text-base font-medium py-1 text-right">Combo Box</Text>
                        <Text className="text-[--black-400] text-base font-medium py-1 text-right">Biriyani Box</Text>
                    </Box>
                    <Divider orientation='vertical' className="!border-l-black !border-l-2" />
                    <Box className="!flex lg:!flex-row lg:!gap-12 md:!gap-6 !flex-col">
                        <Box className="!w-[28vw]">
                            <Text className="Poppins500 !text-xl !leading-[30px] !text-[--black-400] py-2">Brunch for 2 - Veg (Save upto Rs.45)</Text>
                            <Text className="!font-normal !text-base !leading-[19.36px]">#599</Text>
                            <Text className="!font-normal !text-base !leading-[22px] !text-[--gray-300]">Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!</Text>
                        </Box>
                        <Box className="!relative">
                            <Image src={AddedFood} alt="added-image" />
                            <Box className="!flex !items-center !justify-center">
                                <PrimaryButton className="!absolute !top-[16.8vh] !text-[--green-300] Poppins500 !shadow-lg !text-base !py-3 !px-5 !bg-white !rounded-[10px]" title="Add +" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="lg:!w-[20vw] !w-full">
                        <Box className="!flex !justify-between">
                            <Text className="Poppins500 !text-2xl !text-[--black-400]">Cart</Text>
                            <Text className="Poppins500 !text-base !text-[--black-400]">2 Items</Text>
                        </Box>
                        <Text className="Poppins500 !text-base !text-[--black-400] !pt-4 !pb-2">from <span className="Poppins500 !text-base !text-[--saffron-400]">Lunch box</span></Text>
                        <Box className="!flex !justify-between !py-2">
                            <Box>
                                <Text className="Poppins500 !text-base !text-[--black-400]">Brunch for 2 - Veg</Text>
                                <Text className="Poppins500 !text-base !text-[--gray-300]">₹599</Text>
                            </Box>
                            <Box className="!flex !flex-row !mt-3 !gap-4">
                                <Text className="!text-[--black-400]">-</Text>
                                <Text className="!text-[--black-400] !text-xl Poppins400">1</Text>
                                <Text className="!text-[--black-400]">+</Text>
                            </Box>
                        </Box>
                        <Text className="Poppins500 !text-base !text-[--black-400] !pt-7 !pb-2">from <span className="Poppins500 !text-base !text-[--saffron-400]">Fasso</span></Text>
                        <Box className="!flex !justify-between !py-2">
                            <Box>
                                <Text className="Poppins500 !text-base !text-[--black-400] !break-words">Paneer Signature Rice Bowl (Regular)</Text>
                                <Text className="Poppins500 !text-base !text-[--gray-300]">₹200</Text>
                            </Box>
                            <Box className="!flex !flex-row !mt-3 !ml-3 !gap-4">
                                <Text className="!text-[--black-400]">-</Text>
                                <Text className="!text-[--black-400] !text-xl Poppins400">1</Text>
                                <Text className="!text-[--black-400]">+</Text>
                            </Box>
                        </Box>
                        <Box className="!flex !justify-between">
                            <Text className="Poppins500 !text-2xl !leading-9 ">Subtotal</Text>
                            <Text className="Poppins500 !text-2xl !leading-9 ">₹799</Text>
                        </Box>
                        <Text className="Poppins400 !text-sm !text-[--gray-300] ">Extra charges may apply</Text>
                        <PrimaryButton title="Checkout" className="!bg-[--saffron-400] !text-white !rounded-[10px] !text-2xl Poppins500 !px-[6.86vw] !py-4 !my-6" />
                    </Box>
                </Box>
            </Container >
        </Box>
    )
}

export default ItemsPage
