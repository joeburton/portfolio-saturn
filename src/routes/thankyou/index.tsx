import { Card, CardBody, Box, SimpleGrid, Image, Show } from "@chakra-ui/react";
import { PageIntro } from "../../components/PageIntro";
import { getImageUrl } from "../../utils";

import styles from "./thankyou.module.css";

export default function Thankyou() {
  return (
    <>
      <PageIntro
        pageTitle='Thank you'
        subText={<>I'll get back to you as soon as I can.</>}
      />
      <div className={styles.thankyou}>
        <Box maxWidth='420px' m='0 auto'>
          <Card variant='elevated'>
            <CardBody>
              <SimpleGrid columns={1}>
                <Box>
                  <Show>
                    <Image
                      src={getImageUrl(
                        "/assets/",
                        "pigeons-ai/carrier-pigeon-ai-10.png"
                      )}
                      alt='Cliché image of a carrier pigeon. This image was generated using AI 🤓 how ironic.'
                    />
                  </Show>
                </Box>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
      </div>
    </>
  );
}
