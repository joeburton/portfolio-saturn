import { Card, CardBody, Box, SimpleGrid, Image, Show } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

import { FormikContactForm } from "../../components/FormikContactForm";
import { PageIntro } from "../../components/PageIntro";

import { getImageUrl } from "../../utils";
import { useRandomArrayItems } from "../../hooks";
import { pigeons } from "../../data/pigeons";

import styles from "./contact.module.css";
import { ErrorBoundaryFallback } from "../../components/ErrorBoundaryFallback";

function Contact() {
  const [randomItems] = useRandomArrayItems(pigeons, 3);
  return (
    <>
      <PageIntro
        pageTitle='Contact'
        subText={<>Please feel free to contact me anytime.</>}
        detail={
          <>
            You can email{" "}
            <a href='mailto:joeburton@gmail.com'>joeburton@gmail.com</a>,
            telephone <a href='tel:+447768989321'>+ 44 (0) 7768989321</a> or use
            the form below.
          </>
        }
      />
      <div className={styles.contact}>
        <Box maxWidth={"900px"} m='0 auto'>
          <Card variant='elevated'>
            <CardBody>
              <SimpleGrid columns={[1, 1, 1, 2]} spacing={5}>
                <Box>
                  <Show above='lg'>
                    <Image
                      src={getImageUrl(
                        "/assets/",
                        "pigeons-ai/carrier-pigeon-ai-10.png"
                      )}
                      alt='Cliché image of a carrier pigeon. This image was generated using AI 🤓 how ironic.'
                    />
                  </Show>
                  <SimpleGrid
                    columns={[3]}
                    spacing='10px'
                    mt={[0, 0, 0, "10px"]}
                  >
                    {randomItems instanceof Array &&
                      randomItems.map((item: string) => (
                        <Image
                          src={getImageUrl("/assets/", `pigeons-ai/${item}`)}
                          alt='Cliché image of a carrier pigeon. This image was generated using AI 🤓 how ironic.'
                          key={item}
                        />
                      ))}
                  </SimpleGrid>
                </Box>
                <Box>
                  <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                    <FormikContactForm />
                  </ErrorBoundary>
                </Box>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
      </div>
    </>
  );
}

export default Contact;
