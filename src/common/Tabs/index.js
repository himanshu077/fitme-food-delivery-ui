import React from 'react'
import { Box } from '@chakra-ui/react'
import { Tabs, TabList, Tab, TabIndicator } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import Image from "next/image"

const TabTable = ({ tabsData, tabClass }) => {
    return (
        <Box>
            <Tabs position="relative" variant="unstyled">
                {tabsData?.map((data) => (
                    <TabList key={data.id}>
                        <Tab className="!flex !flex-row !gap-2">
                            {data.label}
                            {/* <Image src={data?.src} alt="image" />
                            <Text className={`${tabClass}`}>{data.label}</Text> */}
                        </Tab>
                    </TabList>
                ))}
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="#808080"
                    borderRadius="1.5px"
                />
            </Tabs>
        </Box>
    )
}

export default TabTable
