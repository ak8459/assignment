// import { InputGroup } from 'react-bootstrap';
import hand from './img/Star.svg'
import { Box, Flex, InputGroup, HStack, Image, Input, Button, Text, InputLeftAddon, InputRightAddon, Checkbox } from '@chakra-ui/react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
import fra from './img/Frame 1244830651.svg'
import refer from './img/Frame 1244831852.svg'
const EmiCal = () => {
    return (
        <div>
            <Box className='home-container' w="90%" m={'auto'} mt={10}>
                <Box className="home-content">
                    <Flex className='top-content'  fontWeight="600" fontSize="44px" alignItems={"center"} lineHeight="60px">
                        <Image src={hand} alt="" boxSize="40px" />
                        <Text ml="3" >EMI Calculator</Text>
                    </Flex>
                </Box>



                <Flex className='bottom-content' mt={10} justifyContent="space-between" >


                    <Box  boxShadow="md" lineHeight={"10"} borderRadius={16} padding={8} h={'398'} w={'30%'}  >
                        <Box>
                            <Text color='#2A2A2A80'>Loan Amount</Text>
                            <InputGroup size='sm' >
                                <InputLeftAddon borderTopLeftRadius={8} borderBottomLeftRadius={8}>
                                    ₹
                                </InputLeftAddon>
                                <Input placeholder='3000' borderRadius={8} />
                            </InputGroup>
                            <Slider aria-label='slider-ex-1' trackHeight={8} defaultValue={30}>
                                <SliderTrack>
                                    <SliderFilledTrack bg="#8800EC" />
                                </SliderTrack>
                                <SliderThumb bg="#FF0096" />
                            </Slider>
                        </Box>
                        <Box>
                            <Text color='#2A2A2A80'>Interest Rate (%)</Text>
                            <InputGroup size='sm'>
                                <InputLeftAddon borderTopLeftRadius={8} borderBottomLeftRadius={8}>
                                    %
                                </InputLeftAddon>
                                <Input placeholder='10>5%' borderRadius={8} />
                            </InputGroup>
                            <Slider trackHeight={10} aria-label='slider-ex-1' defaultValue={30}>
                                <SliderTrack >
                                    <SliderFilledTrack bg="#8800EC" />
                                </SliderTrack>
                                <SliderThumb bg="#FF0096" />
                            </Slider>
                        </Box>
                        <Box>
                            <Text color='#2A2A2A80'>Loan Tenure (In months)</Text>
                            <InputGroup size='sm'>
                                <InputLeftAddon borderTopLeftRadius={8} borderBottomLeftRadius={8}>
                                    Months
                                </InputLeftAddon>
                                <Input placeholder='24' borderRadius={8} />
                            </InputGroup>
                            <Slider aria-label='slider-ex-1' defaultValue={30}>
                                <SliderTrack >
                                    <SliderFilledTrack bg="#8800EC" />
                                </SliderTrack>
                                <SliderThumb bg="#FF0096" />
                            </Slider>
                        </Box>

                    </Box>
                    <Box boxShadow="md" h={'400'} padding={8} borderRadius={16} >
                        <Flex>
                            <Box lineHeight={"10"} padding={5} h={'400'} w={400}>
                                <Image src={fra} alt="" />
                                <Flex
                                    mt={{ base: 5, md: 5, lg: 5 }}>

                                    <Checkbox mr={5}
                                        iconColor="#FF0096"   // Set the color of the check icon
                                        styles={{ control: { border: 'none' } }}
                                        isInvalid >Principal Amount</Checkbox>
                                    <Text>₹3,00,000</Text>
                                </Flex>
                                <Flex>
                                    <Checkbox mr={7} isInvalid >Interest Amount</Checkbox>
                                    <Text>₹59,454</Text>
                                </Flex>
                                <Flex>
                                    <Text mr={4}>Total Amount Payable</Text>
                                    <Text>₹3,59,454</Text>
                                </Flex>

                            </Box>
                            <Box mt={12}>
                                <Box bg={'#FCF8FF'} borderRadius={16} padding={5}>
                                    <Text fontSize={24} fontWeight={'bold'}>
                                        Equated Monthly

                                        <Text >

                                            Installments (EMI)
                                        </Text>
                                    </Text>

                                    <Text fontSize={40} fontWeight={700}>₹14,977</Text>
                                </Box>
                                <Button mt={'10'} colorScheme="white" borderRadius={'4'} size="lg" w={274} bg={"#8800EC"}>APPLY NOW</Button>
                            </Box>

                        </Flex>
                    </Box>
                </Flex>

            </Box>

            <Box mt={20}>
                <Image src={refer} />


            </Box>

        </div>
    )
}

export default EmiCal