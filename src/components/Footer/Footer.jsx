import { Box, Button, Image, Text, Flex } from '@chakra-ui/react'
import faq from './img/Question Circle.svg'
import logo from './img/Tata Neu - RGB - Identity - Negative.svg'
import youTube from './img/social (2).svg'
import twitter from './img/social (1).svg'
import insta from './img/social (3).svg'
import faceBook from './img/social.svg'

// import { Button } from 'bootstrap'
const Footer = () => {
    return (
        <div>
            <Box className='home-container' w="90%" m={'auto'} mt={10}>
                <Box className="home-content">
                    <Flex className='top-content' fontWeight="600" fontSize="44px" alignItems={"center"} lineHeight="60px">
                        <Image src={faq} alt="" />
                        <Text ml="3" >EMI Calculator</Text>
                    </Flex>
                </Box>
                <Box lineHeight={'10'} mt={10}>
                    <Flex justifyContent={'space-between'}><Text fontSize={'18'} fontWeight={600} color={'#2A2A2A'}>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text> <Text color={'#1C274C'} size={'25px'} fontWeight={700}>+</Text></Flex>
                    <Flex justifyContent={'space-between'}><Text fontSize={'18'} fontWeight={600} color={'#2A2A2A'}>2.  adipiscing elit.</Text> <Text color={'#1C274C'} size={'25px'} fontWeight={600}>+</Text></Flex>
                    <Flex justifyContent={'space-between'}><Text fontSize={'18'} fontWeight={600} color={'#2A2A2A'}>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text> <Text color={'#1C274C'} size={'25px'} fontWeight={600}>+</Text></Flex>
                    <Flex justifyContent={'space-between'}><Text fontSize={'18'} fontWeight={600} color={'#2A2A2A'}>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text> <Text color={'#1C274C'} size={'25px'} fontWeight={600}>+</Text></Flex>
                    <Flex justifyContent={'space-between'}><Text fontSize={'18'} fontWeight={600} color={'#2A2A2A'}>5. Lorem ipsum dolor sit amet.</Text> <Text color={'#1C274C'} size={'25px'} fontWeight={600}>+</Text></Flex>
                    <Flex justifyContent={'space-between'}><Text fontSize={'18'} fontWeight={600} color={'#2A2A2A'}>6. Lorem consectetur adipiscing elit.</Text> <Text color={'#1C274C'} size={'25px'} fontWeight={600}>+</Text></Flex>
                    <Flex justifyContent={'space-between'}><Text fontSize={'18'} fontWeight={600} color={'#2A2A2A'}>7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text> <Text color={'#1C274C'} size={'25px'} fontWeight={600}>+</Text></Flex>

                </Box>

            </Box>
            <Box bg="#FCF8FF" p={16} borderRadius={12} lineHeight={10} h={174}>
                <Text fontSize={24} fontWeight={700}>
                    Anything not clear?
                </Text>
                <Flex justifyContent={'space-between'}>
                    <Text w='60%' fontSize={18} color={'#2A2A2A'}>You can see our detailed
                        F&Q sessions if you have more quiries. Also we are always a single call away for all your special asks...</Text>
                    <Button bg={'#8800EC'} color={'white'} w={216}>CONTACT US</Button>
                </Flex>



            </Box>

            <Box bg='#212121' px={20} py={8} mt={10}>
                <Flex justifyContent={'space-between'} >
                    <Box className='left'>
                        <Box>
                            <Image src={logo} alt="" />
                        </Box>
                        <Box>
                            <Flex mt={10} gap={5} color={'white'}>
                                <Image src={faceBook} alt="" />
                                <Image src={twitter} alt="" />
                                <Image src={youTube} alt="" />
                                <Image src={insta} alt="" />
                            </Flex>
                        </Box>
                    </Box>
                    <Box className='right' lineHeight={10}>
                        <Flex color={'white'} gap={20}>
                            <Box  >
                                <Text fontSize={18} fontWeight={600}>Help & Support</Text>
                                <Text>Terms & Service</Text>
                                <Text>Privacy Policy</Text>
                                <Text>FAQ</Text>
                            </Box>
                            <Box >
                                <Text fontSize={18} fontWeight={600}>Help & Support</Text>
                                <Text>Terms & Service</Text>
                                <Text>Privacy Policy</Text>
                                <Text>FAQ</Text>
                            </Box>

                        </Flex>

                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Footer