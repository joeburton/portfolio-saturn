import { render } from "@testing-library/react";
import { ChakraBaseProvider } from "@chakra-ui/react";

import { DisplayItem, LogoSize } from "./DisplayItem";
import { projects } from "../../data/projects";

describe("DisplayItem", () => {
  it("should render the DisplayItem component", async () => {
    const project = projects[0];

    const { getByText } = render(
      <ChakraBaseProvider>
        <DisplayItem
          logo={project.logo}
          logoSize={project.logoSize as LogoSize}
          role={project.role}
          company={project.company}
          description={project.description}
          skills={project.skills}
          className={project.className}
          links={project.links}
          rowEnd={false}
          key='234234234'
        />
      </ChakraBaseProvider>
    );

    expect(getByText(/Manager \/ Front-end Lead/)).toBeInTheDocument();
  });
});
