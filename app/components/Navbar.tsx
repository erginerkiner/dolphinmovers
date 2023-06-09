"use client"
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import Image from 'next/image'
  /* import Link from 'next/link'; */
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box className='md:w-full md:flex md:justify-around z-auto '>
        <Flex 
          bg={useColorModeValue('transparent', 'gray.900')}
          color={useColorModeValue('white', 'transparent')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          /* borderBottom={1}
          borderStyle={'solid'} */
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon color={'#01096E'} w={3} h={3} /> : <HamburgerIcon color={'#01096E'} w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex className='z-50' flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'black')}>
              <Link href='/'>
              <Image className=' md:h-auto' src={"/home/sitelogo.svg"} alt="" width={64} height={64} />
              </Link>
            </Text>
  
            <Flex className='md:flex md:justify-between' display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
{/*             <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button> */}
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('black', 'white');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('blue.900', 'white');
  
    return (
      <Stack className='md:bg-transparent md:items-center md:align-middle md:w-full ' direction={'row'} spacing={24} justify={'flex-end'} marginLeft={96} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  className='text-xl font-semibold'
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'xl'}
                  fontWeight={600}
                  color={linkColor}                  
                  textTransform={'uppercase'}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'black' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'black'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('gray.50', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'About Us',
      href:'/about',
      children: [
        {
          label: 'Our Company',
          /* subLabel: 'Trending Design to inspire you', */
          href: '/#',
        },
        {
          label: 'Our Mission',          
          href: '/#',
        },
        {
            label: 'Our Team',            
            href: '/team',
          },
      ],
    },
    {
      label: 'Services',
      href:'/services',
      children: [
        {
          label: 'Worldwide Freight Forwarding',          
          href: '/worldwide-ff',
        },
        {
          label: 'Worldwide Relocations',          
          href: '#',
        },
        {
            label: 'Warehousing',          
            href: '#',
          },
          {
            label: 'Cargo Tracking',          
            href: '#',
          },
      ],
    },
    {
      label: 'Career',
      href: '/career',
    },
    {
      label: 'Gallery',
      href: '/gallery',
    },
    {
        label: 'Contact Us',
        href: '/contact',
      },
  ];
  