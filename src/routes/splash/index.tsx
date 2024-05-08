import { Link as ReactRouterLink } from "react-router-dom";

import {
  Box,
  Card,
  CardBody,
  Icon,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  Image,
  Flex,
  List,
  ListIcon,
  ListItem,
  Link,
} from "@chakra-ui/react";

import { PageIntro } from "../../components/PageIntro";
import styles from "./splash.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { HiMiniAtSymbol, HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { Vercel, LinkedIn, GitHubMark } from "../../components/CustomIcons";
import { getImageUrl } from "../../utils";

export default function Splash() {
  return (
    <>
      <PageIntro
        pageTitle='Welcome'
        subText={
          <>
            My name is <span>Joe Burton</span>, I'm a Web Developer.
          </>
        }
        detail='This is my portfolio and online playground.'
      />
      <div className={styles.splashPage}>
        <Box maxWidth={"768px"} m='0 auto'>
          <Card variant='elevated'>
            <CardBody>
              <Text mb='10px' fontSize='md'>
                I have over 20 years of industry experience working as a Web
                Developer, with much of the last 15 years focused on Front-end
                Development. During this time, I've gained experience working
                for a broad range of companies, from advertising agencies such
                as{" "}
                <ChakraLink
                  href='https://www.ogilvy.com/uk/about'
                  isExternal
                  textDecoration='underline'
                >
                  Ogilvy & Mather
                </ChakraLink>{" "}
                and{" "}
                <ChakraLink
                  href='https://www.tribalworldwide.co.uk/'
                  isExternal
                  textDecoration='underline'
                >
                  Tribal Worldwide
                </ChakraLink>
                , to the travel sector for{" "}
                <ChakraLink
                  href='https://www.lastminute.com/'
                  isExternal
                  textDecoration='underline'
                >
                  lastminute.com
                </ChakraLink>
                . I currently work for{" "}
                <ChakraLink
                  href='https://www.publicissapient.com/'
                  isExternal
                  textDecoration='underline'
                >
                  Publicis Sapient
                </ChakraLink>{" "}
                as a hands-on Front-end Lead/ Manager.
              </Text>
            </CardBody>
          </Card>
          <Card variant='elevated' mt='20px'>
            <CardBody>
              <SimpleGrid columns={[1, 2, 2, 2]} spacing={5}>
                <SimpleGrid
                  columns={3}
                  spacing={5}
                  justifyContent='center'
                  alignItems='center'
                >
                  <Image
                    src={getImageUrl("../assets/logos/", "publicissapient.png")}
                    alt='Publicis Sapient'
                    maxWidth='70px'
                    filter='grayscale(1);'
                  />
                  <Image
                    src={getImageUrl("../assets/logos/", "worldfirst.png")}
                    alt='World First'
                    maxWidth='70px'
                    filter='grayscale(1);'
                  />
                  <Image
                    src={getImageUrl("../assets/logos/", "ge.png")}
                    alt='General Electric'
                    maxWidth='70px'
                    filter='grayscale(1);'
                  />
                  <Image
                    src={getImageUrl("../assets/logos/", "cashflows.png")}
                    alt='Cash Flows'
                    maxWidth='70px'
                    filter='grayscale(1);'
                  />
                  <Image
                    src={getImageUrl(
                      "../assets/logos/",
                      "tribal-worldwide.jpeg"
                    )}
                    alt='Tribal Worldwide'
                    maxWidth='70px'
                    filter='grayscale(1);'
                  />
                  <Image
                    src={getImageUrl("../assets/logos/", "helix.svg")}
                    alt='Helix.'
                    maxWidth='70px'
                    filter='grayscale(1);'
                  />
                </SimpleGrid>
                <SimpleGrid columns={1}>
                  <List spacing={3} mb='10px'>
                    <ListItem>
                      <ListIcon as={LinkedIn} color='green.500' />
                      <Link
                        href='https://www.linkedin.com/in/joeburton1979'
                        isExternal
                      >
                        LinkedIn
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={GitHubMark} />
                      <Link href='https://github.com/joeburton' isExternal>
                        GitHub
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={Vercel} />
                      <Link
                        href='https://vercel.com/joe-burtons-projects'
                        isExternal
                      >
                        Vercel
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={HiMiniAtSymbol} />
                      <Link href='mailto:joeburton@gmail.com'>
                        joeburton@gmail.com
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={HiMiniDevicePhoneMobile} />
                      <Link href='tel:+447768989321'>+ 44 (0) 7768989321</Link>
                    </ListItem>
                  </List>
                  <Flex alignItems='flex-end' mt='20px'>
                    <ChakraLink
                      as={ReactRouterLink}
                      colorScheme='teal'
                      variant='outline'
                      to='work'
                      mr='10px'
                      alignItems='center'
                      display='inline-flex'
                    >
                      View my work
                      <Icon as={ArrowForwardIcon} m='0 0 0 4px' />
                    </ChakraLink>
                    <ChakraLink
                      as={ReactRouterLink}
                      colorScheme='teal'
                      variant='outline'
                      to='contact'
                      alignItems='center'
                      display='inline-flex'
                    >
                      Contact me
                      <Icon as={ArrowForwardIcon} m='0 0 0 4px' />
                    </ChakraLink>
                  </Flex>
                </SimpleGrid>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
      </div>
    </>
  );
}
