import {
  TagLeftIcon,
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  ScaleFade,
} from '@chakra-ui/react'
import {
  FaPython,
  FaJs,
  FaSass,
  FaGithub,
  FaExternalLinkAlt,
  FaDiscord,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiCsharp,
  SiNextDotJs,
  SiCss3,
  SiTypescript
} from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'

import Image from './ChakraNextImage'

export default function Cards({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}) {
  const getTag = (tag) => {
    let values = []
    if (tag == 'discord.js') {
      values[0] = 'blue'
      values[1] = FaDiscord
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'JavaScript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'CSS') {
      values[0] = 'pink'
      values[1] = FaSass
    } else if (tag == 'NodeJS') {
      values[0] = 'green'
      values[1] = FaNodeJs
    } else if (tag == 'HTML') {
      values[0] = 'red'
      values[1] = SiCss3
    } else if (tag == 'Electron') {
      values[0] = 'purple'
      values[1] = SiCsharp
    } else if (tag == 'NextJS') {
      values[0] = 'blue'
      values[1] = SiNextDotJs
    } else if (tag == 'TypeScript') {
      values[0] = 'blue'
      values[1] = SiTypescript
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      minH="320px"
      maxH="500px"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
    >
      <ScaleFade in={true} transition={{ duration: 1 }}>
        <Image
          width={1250}
          height={600}
          w="auto"
          h="auto"
          src={imageURL}
          transition="0.3s"
          placeholder="blur"
          _hover=""
          borderRadius="10px 10px 0px 0px"
          placeholder="blur"
          alt="project image"
        ></Image>
        <Stack px={4} py={2}>
          <Stack isInline justifyContent="space-between" alignItems="center">
            <Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor">
              {title}
            </Text>
            <Stack
              isInline
              justifyContent="flex-end"
              alignItems="center"
              spacing={4}
            >
              {githubLink && (
                <Link
                  href={githubLink}
                  color="white"
                  isExternal
                >
                  <FaGithub size={23} />
                </Link>
              )}
              {deployLink && (
                <Link
                  href={deployLink}
                  color="white"
                  isExternal
                >
                  <FaExternalLinkAlt size={20} />
                </Link>
              )}
            </Stack>
          </Stack>
          <Stack isInline>{Tags}</Stack>
          <Divider />
          <Text color="textSecondary" fontSize={['sm', 'md']}>
            {desc}
          </Text>
        </Stack>
      </ScaleFade>
    </Stack>
  )
}
