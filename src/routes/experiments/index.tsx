import {
  Card,
  Text,
  CardBody,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Image,
  Icon,
  Link,
} from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

import { PageIntro } from "../../components/PageIntro";
import MSWIntercept from "../../components/MSWIntercept/MSWIntercept";
import { SmartCarousel } from "../../components/SmartCarousel";
import { BarGraph } from "../../components/BarGraph";

import { items } from "../../../mocks/mock-data";

import { ErrorBoundaryFallback } from "../../components/ErrorBoundaryFallback";
import { getImageUrl } from "../../utils";
import { GitHubMark, LinkedIn, Vercel } from "../../components/CustomIcons";

import styles from "./exp.module.css";
import { useRandomArrayItems } from "../../hooks";
import { engineers } from "../../data/engineers";

function Experiments() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const experiments = urlParams.get("experiments");

  const [randomItems] = useRandomArrayItems(engineers, 3);

  switch (queryString) {
    case "?experiments=inactive":
      console.log("experiments inactive", queryString);
      break;
    case "?experiments=active":
      console.log("experiments active", queryString);
      break;
    default:
      console.log("no query params", queryString);
  }

  return (
    <>
      <PageIntro
        pageTitle='Experiments'
        subText={<>Just playing around.</>}
        detail="Don't take things too seriously here."
      />
      <div className={styles.experiments}>
        <Box maxWidth={"900px"} m='0 auto'>
          <Card variant='elevated'>
            <CardBody>
              <SimpleGrid columns={[1, 1, 1, 2]} spacing={5}>
                <Box>
                  <Box display={{ base: "none", lg: "block" }}>
                    <Image
                      src={getImageUrl(
                        "/assets/",
                        "ginger-software-engineer-ai/ginger-software-engineer-ai-7.png"
                      )}
                      alt='Ginger Software Engineer'
                    />
                  </Box>
                  <SimpleGrid
                    columns={[3]}
                    spacing='10px'
                    mt={[0, 0, 0, "10px"]}
                  >
                    {randomItems instanceof Array &&
                      randomItems.map((item: string) => (
                        <Image
                          src={getImageUrl(
                            "/assets/",
                            `ginger-software-engineer-ai/${item}`
                          )}
                          alt='Cliché image of a carrier pigeon. This image was generated using AI 🤓 how ironic.'
                          key={item}
                        />
                      ))}
                  </SimpleGrid>
                </Box>
                <Box height='auto'>
                  <ul className={styles.customList}>
                    <li>
                      <Card variant='filled' p='3'>
                        <Text mb='2px'>
                          Most of my pet projects and tech exploration code is
                          on GitHub. Feel free to have a look, you might even
                          find some relics from the past if you dig deep enough.
                        </Text>
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
                      <Card variant='filled' p='3'>
                        <Text mb='2px'>
                          Most of my projects that require hosting are on
                          Vercel's free service.
                        </Text>
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
                      <Card variant='filled' p='3'>
                        <Text mb='2px'>
                          For a full overview of my employment history please
                          take a look at my LinkedIn profile.
                        </Text>
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
                </Box>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
        {experiments ? (
          <Box maxWidth={"900px"} m='0 auto'>
            <Card variant='elevated'>
              <CardBody>
                <SimpleGrid columns={1} spacing={8}>
                  <Box height='auto' margin='0 auto'>
                    <SmartCarousel items={items} />
                  </Box>
                  <Box bg='grey' height='auto'>
                    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                      <MSWIntercept
                        url={`${
                          import.meta.env.VITE_PORTFOLIO_API
                        }/pirates-data`}
                      />
                    </ErrorBoundary>
                  </Box>
                  <BarGraph
                    data={[
                      { label: "A", value: 150 },
                      { label: "B", value: 234 },
                      { label: "C", value: 540 },
                      { label: "D", value: 230 },
                    ]}
                  />
                  <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                  </Grid>
                  <Grid
                    h='300px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                  >
                    <GridItem rowSpan={2} colSpan={1} bg='tomato'>
                      1
                    </GridItem>
                    <GridItem colSpan={2} bg='papayawhip'>
                      2
                    </GridItem>
                    <GridItem colSpan={2} bg='papayawhip'>
                      3
                    </GridItem>
                    <GridItem colSpan={4} bg='tomato'>
                      4
                    </GridItem>
                  </Grid>
                </SimpleGrid>
              </CardBody>
            </Card>
          </Box>
        ) : (
          ``
        )}
      </div>
    </>
  );
}

export default Experiments;
