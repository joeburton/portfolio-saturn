import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { DisplayItem } from "../../components/DisplayItem";
import { LogoSize } from "../../components/DisplayItem";
import { PageIntro } from "../../components/PageIntro";

import { generateUniqueId } from "../../utils";

import { projects } from "../../data/projects"; // temp data, will fetch from api

import styles from "./work.module.css";

import { breakpoints } from "../../theme";

const Projects = () => {
  const breakpoint: number = useBreakpointValue(breakpoints) || 0;

  let numberColumns: number = 0;

  if (breakpoint >= 1200) {
    numberColumns = 3;
  } else if (breakpoint >= 960) {
    numberColumns = 2;
  }

  return projects.map((project, i) => {
    const rowEnd = (i + 1) % numberColumns === 0 ? true : false; // every third item.
    return (
      <DisplayItem
        logo={project.logo}
        logoSize={project.logoSize as LogoSize}
        role={project.role}
        company={project.company}
        description={project.description}
        skills={project.skills}
        className={project.className}
        links={project.links}
        rowEnd={rowEnd}
        key={generateUniqueId()}
      />
    );
  });
};

function Work() {
  return (
    <>
      <PageIntro
        pageTitle='Work'
        subText={
          <>
            Over the years, I've gained experience in permanent, contract, and
            freelance roles.
          </>
        }
        detail={
          <>
            For more details, feel free to visit my{" "}
            <a
              href='https://www.linkedin.com/in/joejamesburton'
              target='_blank'
            >
              LinkedIn
            </a>{" "}
            profile.
          </>
        }
      />
      <div className={styles.work}>
        <Flex flexWrap='wrap' maxWidth='1200px' margin='0 auto'>
          <Projects />
        </Flex>
      </div>
    </>
  );
}

export default Work;
