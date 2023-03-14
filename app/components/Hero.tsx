import {
  Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Hero() {
    return (
      <Stack className='-z-10 bg-gradient-to-r from-[#FDFDFE00] to-[#FDFDFE] shadow-inner' 
             marginTop={{md:'-40', sm:'none'}} minH={'auto'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}
        background={'linear-gradient(90deg, #FDFDFE 52.93%, rgba(253, 253, 254, 0) 72.49%);'}
        >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>

              <br />{' '}
              <Text className='font-semibold' color={'black'} as={'span'}>
              Innovative Reliable Prompt & Cost Effective Solutions
              </Text>{' '}
            </Heading>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Box 
            background={'linear-gradient(90deg, #FDFDFE 52.93%, rgba(253, 253, 254, 0) 72.49%);'}
            overflow={'hidden'}
            position={'static'}
            width={'full'}
            height={'full'}
            zIndex={'-15'}
            objectFit={'cover'}
            >          
          <Image className='md:w-full md:h-full rounded-l-md'            
            alt={''}
            maxHeight={'720'}            
            objectFit={'cover'}            
            src={
              '/home/bgimg.png'
            }
          />
          </Box>
          
        </Flex>
      </Stack>
    );
  }
  