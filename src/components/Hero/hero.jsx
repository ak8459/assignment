// import React from 'react';
import { Box, Flex, Heading, Button, Text, Image, Spacer } from '@chakra-ui/react';
import heroImg from './heroImg.svg'

import feeLogo from './Frame.svg'
import minimal from './Frame 1244830659 (1).svg'
import quickLogo from './Frame 1244830659.svg'
import easyLogo from './Frame (1).svg'

const HeroSection = () => {
  return (
    <div>

      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        justify="space-between"
        wrap="wrap"
        // height={'xl'}
        padding={['24px', '32px', '48px', '64px']}
        bgColor="#FDFDFD"
        alignItems={'top'}
        width={'100%'}
      >
        {/* Content on the Left */}
        <Box flex={{ base: '1', md: '1', lg: '0.5' }} mt={{ base: '4', md: '20' }} mb={{ base: '4', md: '0' }} >

          <Heading as="h1" lineHeight={'tall'} fontSize={['2xl', '3xl', '4xl', '5xl']} mb="4">
            Turn Dreams Into Reality
            <Spacer />
            with <Text as="span" color="pink.500">Personal Loans</Text>
          </Heading>

          <Box display="grid" gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap="4" mt={'20'}>
            <Flex mb='4' >
              <Image src={feeLogo} mr={'4'} alt="" />
              <Box  >
                <Text fontSize='20px' fontWeight={'bold'}>Avail Zero</Text>
                <Text >Processing Fee</Text>
              </Box>
            </Flex>
            <Flex mb='4'>
              <Image mr={'4'} src={easyLogo} alt="" />
              <Box>
                <Text fontSize='20px' fontWeight={'bold'}>Quick</Text>
                <Text>Personal Loan</Text>
              </Box>
            </Flex>
            <Flex mb='4'>
              <Image mr={'4'} src={quickLogo} alt="" />
              <Box>
                <Text fontSize='20px' fontWeight={'bold'}>Lowest</Text>
                <Text>Interest Rates</Text>
              </Box>
            </Flex>
            <Flex mb='4'>
              <Image mr={'4'} src={minimal} alt="" />
              <Box>
                <Text fontSize='20px' fontWeight={'bold'}>Minimal</Text>
                <Text>Documentation</Text>
              </Box>
            </Flex>

            <Box>
              <Button mt={'10'} colorScheme="white" borderRadius={'4'} size="lg" bg={"#8800EC"}>APPLY NOW</Button>
            </Box>
          </Box>


          {/* <div>
          <div style={{ display: 'flex' }}>
            <img src={logo} alt="" />
            <div>
              <p>Avail Zero</p>
              <p>Processing Zero</p>
            </div>

          </div>
          <div style={{ display: 'flex' }}>
            <img src={logo} alt="" />
            <div>
              <p>Avail Zero</p>
              <p>Processing Zero</p>
            </div>

          </div>
          <div style={{ display: 'flex' }}>
            <img src={logo} alt="" />
            <div>
              <p>Avail Zero</p>
              <p>Processing Zero</p>
            </div>

          </div>
          <div style={{ display: 'flex' }}>
            <img src={logo} alt="" />
            <div>
              <p>Avail Zero</p>
              <p>Processing Zero</p>
            </div>

          </div>
        </div> */}
        </Box>

        {/* Image on the Right */}
        <Box flex={{ base: '1', md: '1', lg: '0.5' }}>
          <Image
            src={heroImg}
            alt="Hero Image"
            objectFit="cover"
            height="100%"
            width="100%"
            borderRadius="8px"
          />
        </Box>
      </Flex>
    </div>
  );
};

export default HeroSection;
