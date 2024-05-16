import { useState } from "react";
import parse from "html-react-parser";
import { Card, Image, CardBody, Text, Link, Box } from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";

import { generateUniqueId, getImageUrl } from "../../utils";

import styles from "./DisplayItem.module.css";

interface Links {
  visual: string;
  url: string;
}

export type LogoSize = "small" | "medium" | "large";

const logoPixelWidth: { [K in LogoSize]: string } = {
  small: "80px",
  medium: "150px",
  large: "200px",
};

export type DisplayItemInterface = {
  rowEnd?: boolean;
  logo: string;
  logoSize: LogoSize;
  role: string;
  company: string;
  description: string;
  skills: string;
  className?: string;
  links?: Links[];
};

export const DisplayItem = ({
  rowEnd = false,
  logo,
  logoSize,
  role,
  company,
  description,
  skills,
  className,
  links,
}: DisplayItemInterface) => {
  const [open, setOpen] = useState(false);

  const constrainContent = description.length > 300 ? true : false;

  return (
    <Box width={{ base: "100%", lg: "33.3%" }}>
      <Card
        variant='elevated'
        mr={rowEnd ? 0 : [0, 0, 0, 5]}
        mb={5}
        shadow='md'
        className={className}
      >
        <CardBody
          className={styles.cardBody}
          minHeight={{ base: "auto", lg: "500px" }}
        >
          <Image
            src={getImageUrl("/assets/logos/", logo)}
            alt={company}
            maxWidth={logoPixelWidth[logoSize]}
            mb='20px'
          />
          <Text fontSize='sm' className={styles.contentItem}>
            Company: {company}
          </Text>
          <Text fontSize='sm' className={styles.contentItem}>
            Role: {role}
          </Text>
          <Text fontSize='sm' className={styles.contentItem}>
            Skills: {parse(skills)}
          </Text>
          <Text
            as='div'
            fontSize='sm'
            className={`${styles.contentItem} ${styles.description} `}
            style={constrainContent ? { height: open ? `100%` : `70px` } : {}}
            data-testid='description'
          >
            {parse(description)}
          </Text>
          {constrainContent && (
            <Link
              fontSize='sm'
              display='block'
              p='8px 0'
              data-testid='toggle-text'
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <>
                  Collapse <ChevronUpIcon mx='6px' />
                </>
              ) : (
                <>
                  Expand <ChevronDownIcon mx='6px' />
                </>
              )}
            </Link>
          )}
          {links?.length &&
            links.map((link) => (
              <Link
                fontSize='sm'
                href={link.url}
                isExternal
                key={generateUniqueId()}
                className={styles.link}
              >
                {link.visual} <ExternalLinkIcon mx='6px' />
              </Link>
            ))}
        </CardBody>
      </Card>
    </Box>
  );
};
