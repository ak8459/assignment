import testMan from './img/test-man.svg'
import apostro from './img/apostrophe.svg'
import handHeart from './img/Hand Heart.svg'
import ellips from './img/Ellipse 2.svg'
// import ellip from './img/Ellipse 2.svg'
import slide from './img/slide.svg'
import { Box, Flex, HStack, Image, Button, Text, Center } from '@chakra-ui/react';

const Testimonial = () => {
    return (
        <Box className='home-container'  bg={'#F8F9FA'} w="100%"  >

            <Box className="home-content"  >
                <Center>
                    <Flex mt={10} className='top-content'  fontWeight="600" fontSize="44px" alignItems={"center"} lineHeight="60px">
                        <Image src={handHeart} />
                        <Text ml="4" > What Our Customer Says</Text>
                    </Flex>
                </Center>
            </Box>

            <Flex justifyContent={"space-between"} >
                <Box w='50%' className='bottom-content-left' backgroundImage={`url(${ellips})`} >
                    <Image src={testMan} ml={28} />
                </Box>


                <Box mt={12} mr={5}>
                    <Image src={apostro} />
                </Box>

                <Box w='54%' className='bottom-content-left' lineHeight={'30px'} mt={20}  >
                    <Text fontSize={'24'} colorScheme={'#2A2A2A'} fontWeight={'600'}>SUNIL GUPTA</Text>
                    <Text size={'18'} colorScheme={'#2A2A2A'} fontWeight={'600'}>Chartered Accountant</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortL orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortor, et convallis libero vehicula ut. or, et convallis libero vehicula ut.
                    </Text>
                    <Image mt={8} src={slide} />
                </Box>

            </Flex>
        </Box >
    )
}

export default Testimonial