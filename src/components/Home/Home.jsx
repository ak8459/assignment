import label from './assets/Star.svg'
import man from './assets/man.svg'
import star from './assets/star 1.svg'
import BOBlogo from './assets/image 31.svg'
import hdfcBank from './assets/image 30.svg'
import iciciBank from './assets/image 29.svg'
import phone from './assets/phone.svg'
import ligtening from './assets/Stark.svg'
import bar from './assets/bar.svg'

import { Box, Flex, HStack, Image, Button, Text } from '@chakra-ui/react';
// import { Button } from 'bootstrap'
const Home = () => {
    return (
        <div>
            <Box className='home-container' w="90%" >
                <Box className="home-content">
                    <Flex className='top-content' ml={{ base: "0", md: "24" }} fontWeight="600" fontSize={{ base: "32px", md: "44px" }} alignItems={{ base: "flex-start", md: "center" }} lineHeight={{ base: "40px", md: "60px" }}>
                        <Image src={label} alt="" boxSize={{ base: "30px", md: "40px" }} />
                        <Text ml={{ base: "2", md: "4" }} >Personal Loan Highlights</Text>
                    </Flex>
                </Box>



                <Flex className='bottom-content' direction={{ base: "column", md: "row" }} alignItems={{ base: "flex-start", md: "center" }} display={"flex"} justifyContent="space-between" mt={{ base: "10", md: "20" }}>
                    <Box className='bottom-content-left' mb={{ base: "10", md: "0" }}>
                        <Image src={man} w={{ base: "100%", md: "514px" }} />
                    </Box>

                    <Box  borderRadius="20px" >
                        
                        <Flex >
                            <Image src={star} alt="" boxSize="25px" mr="2" />
                            <Box>
                                <Text fontSize="20px" fontWeight="600">Interest Rate</Text>
                                <Text fontSize="20px">Usually 10.49% p.a. onwards: some PSUs may offer lower rates</Text>
                            </Box>
                        </Flex>
                        <Flex className="right-content">
                            <Image src={star} alt="" mr="2" boxSize="25px" />
                            <Box>
                                <Text fontSize="20px" fontWeight="600">Loan Amount</Text>
                                <Text fontSize="20px">Can go up to RS 40 lakh: some lenders may offer a higher loan amount</Text>
                            </Box>
                        </Flex>
                        <Flex className="right-content">
                            <Image src={star} alt="" mr="2" boxSize="25px" />
                            <Box>
                                <Text fontSize="20px" fontWeight="600">Processing Fees</Text>
                                <Text fontSize="20px">0.5% to 4% of loan amount (may vary across lenders)</Text>
                            </Box>
                        </Flex>
                        <Flex className="right-content">
                            <Image src={star} alt="" mr="2" boxSize="25px" />
                            <Box>
                                <Text fontSize="20px" fontWeight="600">Tenure</Text>
                                <Text fontSize="20px">Up to 5 years (some lenders offer a repayment period till 8 years)</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>







            </Box>
            
            <Box bg={'#F8F9FA'} display="flex" justifyContent="space-between" alignItems={"center"} py='12' px={'20'}>
                <Text fontSize={"38px"} colorScheme='#2A2A2A' fontWeight="600">Our Partners </Text>
                <Flex alignItems="center" justifyContent={"space-between"} w={"75%"}>
                    <Box >
                        <Image src={hdfcBank} alt="HDFC Bank" />
                        <Text mt="2" textAlign="center" fontSize={'24'} fontWeight={600}>HDFC Bank</Text>
                    </Box>
                    <Box >
                        <Image src={iciciBank} alt="ICICI Bank" />
                        <Text mt="2" fontSize={'24'} fontWeight={600} textAlign="center">ICICI Bank</Text>
                    </Box>
                    <Box>
                        <Image src={iciciBank} alt="ICICI Bank" />
                        <Text mt="2" fontSize={'24'} fontWeight={600} textAlign="center">ICICI Bank</Text>
                    </Box>
                    <Box>
                        <Image src={BOBlogo} alt="Bank of Baroda Bank" />
                        <Text mt="2" fontSize={'24'} fontWeight={600} textAlign="center">Bank of Baroda Bank</Text>
                    </Box>
                </Flex>
            </Box>
 
           
              

            <Flex alignItems="center">
                <Box>
                    <Image src={phone} />
                </Box>
                <Box align="center" ml="4"  >
                    <HStack spacing="2" align="center" >
                        <Image src={ligtening} />
                        <Text fontSize={44} fontWeight={600}>Lightening Fast Process</Text>
                    </HStack>
                    <Image src={bar} mt="10"  />
                    <Text mb="4" colorScheme='#2A2A2A' fontSize={23} fontWeight={500} mt="10" >Customer Share Basic Details</Text>
                    <Box mt={'20'} >
                        <Button colorScheme="white" borderRadius={4} w='274px' h={'56px'} bg='#8800EC'>APPLY NOW</Button>
                    </Box>
                </Box>
            </Flex>




        </div >
    )
}

export default Home