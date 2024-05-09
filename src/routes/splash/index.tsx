import { Link as ReactRouterLink } from "react-router-dom";

import {
  Box,
  Card,
  CardBody,
  Icon,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  Flex,
  List,
  ListIcon,
  ListItem,
  Link,
  Divider,
  Show,
} from "@chakra-ui/react";

import { PageIntro } from "../../components/PageIntro";
import styles from "./splash.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { HiMiniAtSymbol, HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { Vercel, LinkedIn, GitHubMark } from "../../components/CustomIcons";

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
              <SimpleGrid columns={[1, 1, 2, 2]} spacing={5}>
                <ul className={styles.customList}>
                  <li>
                    <Card variant='filled' p='1'>
                      <Link href='https://github.com/joeburton' isExternal>
                        <Text>
                          <Icon
                            as={GitHubMark}
                            width='20px'
                            height='20px'
                            mr='4px'
                          />
                          github.com/joeburton
                        </Text>
                      </Link>
                    </Card>
                  </li>
                  <li>
                    <Card variant='filled' p='1'>
                      <Link
                        href='https://vercel.com/joe-burtons-projects'
                        isExternal
                      >
                        <Text>
                          <Icon
                            as={Vercel}
                            width='20px'
                            height='20px'
                            mr='4px'
                          />
                          vercel.com/joe-burtons-projects
                        </Text>
                      </Link>
                    </Card>
                  </li>
                  <li>
                    <Card variant='filled' p='1'>
                      <Link
                        href='https://www.linkedin.com/in/joejamesburton'
                        isExternal
                      >
                        <Text>
                          <Icon
                            as={LinkedIn}
                            width='20px'
                            height='20px'
                            mr='4px'
                          />
                          linkedin.com/in/joejamesburton
                        </Text>
                      </Link>
                    </Card>
                  </li>
                </ul>
                <SimpleGrid columns={1}>
                  <Show below='md'>
                    <Divider
                      orientation='horizontal'
                      m='10px 0 15px 0'
                      color='silver'
                      sx={{
                        "@media screen and (min-width: 768px)": {
                          display: "none",
                        },
                      }}
                    />
                  </Show>
                  <List spacing={3} mb='10px'>
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
