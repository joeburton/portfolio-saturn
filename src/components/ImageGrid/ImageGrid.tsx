import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import { pigeons } from "../../data/pigeons";
import { generateUniqueId, getImageUrl } from "../../utils";

export const ImageGrid = () => {
  return (
    <SimpleGrid columns={[4, 4, 4, 3]} spacing={1}>
      {pigeons.map((pigeon: string) => (
        <Box height='auto' key={generateUniqueId()}>
          <Image
            src={getImageUrl("../assets/pigeons-ai/", pigeon)}
            alt='Cliché image of a carrier pigeon. This image was generated using AI 🤓 how ironic.'
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};
