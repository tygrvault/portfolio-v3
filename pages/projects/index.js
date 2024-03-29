import { useState } from "react";
import { Stack, Heading, Text, SimpleGrid, Divider } from "@chakra-ui/react";

import Cards from "../../components/Card";
import Container from "../../components/Container";
import Head from "next/head";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function Projects({ projects }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Container>
        <Head>
          <title>Projects</title>
          <meta name="title" content="Projects" />
          <meta
            name="description"
            content="tygerxqt, a self-taught Web/IOT Developer."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.tygr.dev/projects" />
          <meta property="og:title" content="tygerxqt" />
          <meta
            property="og:description"
            content="tygerxqt, a self-taught Web/IOT Developer."
          />
          <meta property="og:image" content="https://i.imgur.com/7hLIhHt.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tygr.dev/projects" />
          <meta property="twitter:title" content="tygerxqt" />
          <meta
            property="twitter:description"
            content="tygerxqt, a self-taught Web/IOT Developer."
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/7hLIhHt.png"
          />
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          px={["5vw", "10vw"]}
          my={["15vh", "15vh", "22.5vh", "22.5vh"]}
        >
          <Stack spacing={5}>
            {" "}
            <Heading color="displayColor" fontSize={{ base: "4xl", md: "6xl" }}>
              Projects
            </Heading>
            <Text fontSize={{ base: "14px", md: "16px" }}>
              Here's an archive of things that I've worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" children={<FaSearch />} />
              <Input
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects
              .filter((e) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((project) => (
                <Cards
                  key={project.fields.title}
                  imageURL={project.fields.imageUrl}
                  title={project.fields.title}
                  desc={project.fields.description}
                  githubLink={project.fields.githubLink}
                  deployLink={project.fields.deployLink}
                  tag={project.fields.tags}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "projects",
    order: "sys.updatedAt"
  });
  return {
    props: {
      projects: data.items.reverse()
    }
  };
}
