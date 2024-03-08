"use client";
import { Container } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Image from "next/image"
import AppleSvg from "@/assets/svg/AppleSvg.svg"
import BananaSvg from "@/assets/svg/BananaSvg.svg"
import SearchBar from '../common/SearchBar'
import PrimaryButton from '../common/PrimaryButton'
import FoodImage1 from "../assets/svg/Rectangle1.png"
import FoodImage2 from "../assets/svg/Rectangle2.png"
import FoodImage3 from "../assets/svg/Rectangle3.png"
import NearbyResturant from '../components/NearbyResturant'
import RecommendedFood from '../components/RecommendedFood'
import Banner from '../components/Banner'
import FoodBanner from '../components/FoodBanner'
import PersonalizedRecommendations from '../components/PersonalizedRecommendations'

export default function Home() {

  const cities = [{ id: 0, city: "Hyderabad" }, { id: 1, city: "Chennai" }, { id: 2, city: "Mumbai" }, { id: 3, city: "Bangalore" }, { id: 4, city: "Delhi" }, { id: 5, city: "Kolkata" },]
  const foodImage = [{ id: 0, src: FoodImage1, alt: "food-image" }, { id: 1, src: FoodImage2, alt: "food-image" }, { id: 2, src: FoodImage3, alt: "food-image" },]

  return (
    <main className="flex min-h-screen flex-col">
      <Box>
        <Box className="!mt-28 !ml-[9vw] !flex lg:!flex-row md:!flex-col !flex-col">
          <Box>
            <Text className="Poppins500 !text-6xl !text-[--black-400]">Premium <span className="Poppins500 !text-6xl !text-[--saffron-400]">quality</span></Text>
            <Box className="!flex !flex-row !gap-4 !my-3">
              <Text className="Poppins500 !text-6xl !text-[--black-400]">Food for your </Text>
              <Image src={BananaSvg} alt="banana-image" />
              <Text className="Poppins500 !text-6xl !text-[--saffron-400]" > healthy</Text>
            </Box>
            <Box className="!flex !flex-row !gap-4 !my-3">
              <Image src={AppleSvg} alt="apple-image" />
              <Text className="Poppins500 !text-6xl !text-[--saffron-400]" > & Daily Life</Text>
            </Box>
            <Text className="!font-normal !text-base !text-[--gray-400] !my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Box className="!flex !flex-row !gap-4">
              <SearchBar placeholder="Enter your delivery location" size="lg" InputGroupClass="lg:!max-w-[35.73vw] !max-w-full" className="!text-sm !font-medium" />
              <PrimaryButton title="Get Started" className="!bg-[--black-400] !font-semibold !text-sm !leading-4 !px-6 !text-white !rounded-[10px]" />
            </Box>
            <Text className="Poppins500 !text-base !text-[--gray-400] !my-4">Popular cities in India</Text>
            <Box className="!flex lg:!flex-cols !gap-4">
              {cities.map(data => (
                <Text key={data.id} className={`${data.id % 2 === 0 ? "text-[--black-400]" : "text-[--saffron-400]"} Poppins500 !text-base `}>
                  {data.city}
                </Text>
              ))}
            </Box>
          </Box>
          {/* <Box className="!flex !flex-row !gap-12">
          {foodImage.map((data) => (
            <Image key={data.id} src={data.src} alt={data.alt} />
          ))}
        </Box> */}
        </Box>
        <Container maxW="84.4vw" mx="auto" className="!flex lg:!flex-row !flex-col !gap-[8vw] !mt-52 !mb-32">
          <NearbyResturant />
          <RecommendedFood />
        </Container>
        <Box>
          <Box className="!my-32">
            <Banner />
          </Box>
          <FoodBanner />
          <PersonalizedRecommendations />
        </Box>
      </Box>
    </main>
  );
}
