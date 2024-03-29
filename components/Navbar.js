import React, { useRef } from "react";
import {
  Button,
  Flex,
  Box,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
  Heading
} from "@chakra-ui/react";
import NextLink from "next/link";
import useMediaQuery from "../hook/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="secondary">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">tygerxqt.</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px" _hover={{ backgroundColor: '#292929' }}>
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px" _hover={{ backgroundColor: '#292929' }}>
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px" _hover={{ backgroundColor: '#292929' }}>
                  Blog
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <>
      <Box zIndex="99">
        <Slide
          direction="top"
          reverse
          in={true}
          transition={
            enableTransition
              ? { enter: { duration: 0.5, delay: 0.01 } }
              : { enter: { duration: 0, delay: 0 } }
          }
          background="black"
        >
        <Flex
            as="nav"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            px="3vw"
            py="3"
            borderBottom="0.5px solid #1e2029"
            background="black"
          >
          <NextLink href="/" passHref>
              <Heading as="a" fontSize="24px" fontWeight="bold" color="white">
                tygerxqt.
              </Heading>
          </NextLink>
          {isLargerThan768 ? (
            <Box color="textPrimary">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" _hover={{ backgroundColor: '#292929' }}>
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" _hover={{ backgroundColor: '#292929' }}>
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" _hover={{ backgroundColor: '#292929' }}>
                  Blog
                </Button>
              </NextLink>
              </Box>
            ) : (
              <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
            )}
            
            </Flex>
          </Slide>
        <NavbarDrawer />
      </Box>
    </>
  );
}
