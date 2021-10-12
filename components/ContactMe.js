import { Link, Button, chakra, Heading, Stack, Text } from "@chakra-ui/react";
import useMediaQuery from "../hook/useMediaQuery";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";

export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)
  return (
    <>
      <Stack
        spacing={5}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
            Places to find me.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Text fontSize="md" color="textSecondary" textAlign="center">
            I'm currently working on projects over at {' '}
            <chakra.span
              color="button1"
              display={{ base: 'block', md: 'inline' }}
            >
              {' '}
              Nord Studios.
            </chakra.span>
            <br /> But here are a few places you can find me, That's all folks! 👋
          </Text>
        </SlideUpWhenVisible>
      <Stack />
        
      <Stack
        spacing={5}
        w="100%"
        alignItems="center"
        >
          <SlideUpWhenVisible>
            <Stack isInline spacing={4}>
              <Link
                href="https://github.com/tyger796"
                isExternal
              >
                <Button
                  leftIcon={<FaGithub fill="#81A1C1" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                >
                  GitHub
                </Button>
              </Link>
              <Link
                href="https://discord.com/users/845818120777236491"
                isExternal
              >
                <Button
                  leftIcon={<FaDiscord fill="#81A1C1" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                >
                  Discord
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/tyger796_"
                isExternal
              >
                <Button
                  leftIcon={<FaInstagram fill="#81A1C1" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                >
                  Instagram
                </Button>
              </Link>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Stack isInline spacing={4}>
              <Link
                href="https://www.twitter.com/tyger796"
                isExternal
              >
                <Button
                  leftIcon={<FaTwitter fill="#81A1C1" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                >
                  Twitter
                </Button>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCDCBrrYkHrt4cFnoA2SKMdA"
                isExternal
              >
                <Button
                  leftIcon={<FaYoutube fill="#81A1C1" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                >
                  YouTube
                </Button>
              </Link>
              <Link
                href="https://www.twitch.tv/tyger796"
                isExternal
              >
                <Button
                  leftIcon={<FaTwitch fill="#81A1C1" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                >
                  Twitch
                </Button>
              </Link>
            </Stack>
          </SlideUpWhenVisible>
        </Stack>
      </Stack>
    </>
  );
}

