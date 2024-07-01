import { Box, Card, CardBody } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

import { FormikContactForm } from "../../components/FormikContactForm";
import { PageIntro } from "../../components/PageIntro";

import { ErrorBoundaryFallback } from "../../components/ErrorBoundaryFallback";
import styles from "./contact.module.css";

function Contact() {
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
        <Box maxWidth={{ base: "100%", md: "768px" }} m='0 auto'>
          <Card variant='elevated'>
            <CardBody>
              <Box>
                <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                  <FormikContactForm />
                </ErrorBoundary>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </div>
    </>
  );
}

export default Contact;
