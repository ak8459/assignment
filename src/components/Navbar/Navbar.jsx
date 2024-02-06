// import React from 'react'
import logo from './logo.svg'
import location from './location.svg'
import notification from './trailing-icon-2.svg'
import user from './trailing-icon-3.svg'
import cart from './cart.svg'

// import './Navbar.css'
import { Box, Flex, Image, Input, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (

        <Box p={5} boxShadow={"lg"} bg={"#FDFDFD"} position={"fixed"} width={"100%"} zIndex={100}>
            <Flex justifyContent={"space-between"} direction={{ base: "column", md: "row" }}>

                {/* Left Section - Centered for Small Screens */}
                <Flex className='left' alignItems={{ base: "center", md: "center" }} justifyContent={{ base: "center", md: "flex-start" }} gap={10}>
                    <Image src={logo} alt="" />
                    <Flex gap={5}>
                        <Text>Offers</Text>
                        <Text>Stories</Text>
                        <Text>TataPay</Text>
                        <Text>NeuPass</Text>
                    </Flex>
                </Flex>

                {/* Right Section */}
                <Flex alignItems={{ base: "center", md: "center" }} justifyContent={{ base: "flex-end", md: "space-between" }} gap={10}>
                    {/* Burger Menu Icon */}
                    <IconButton
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        onClick={onToggle}
                        display={{ base: "block", md: "none" }}
                    />

                    {/* Search Input */}
                    <Input bg={'#2121211F'} placeholder='Search Tata Neu' borderRadius={4} py={4} px={8} display={{ base: isOpen ? "block" : "none", md: "block" }} />

                    {/* Other Icons - Display based on Screen Size */}
                    <Image src={location} alt="" display={{ base: isOpen ? "none" : "block", md: "block" }} />
                    <Image src={cart} alt="" display={{ base: isOpen ? "none" : "block", md: "block" }} />
                    <Image src={notification} alt="" display={{ base: isOpen ? "none" : "block", md: "block" }} />
                    <Image src={user} alt="" display={{ base: isOpen ? "none" : "block", md: "block" }} />
                </Flex>

            </Flex>
        </Box>
    )
}

export default Navbar