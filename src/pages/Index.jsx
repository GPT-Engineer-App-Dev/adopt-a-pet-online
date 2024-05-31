import { Container, Text, VStack, Heading, Button, SimpleGrid, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to PetAdopt
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Find your perfect companion. Browse through our adorable pets available for adoption.
        </Text>
        <Button as={Link} to="/pets" colorScheme="teal" size="lg">
          View Available Pets
        </Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={10} width="100%">
          <Box boxSize="sm" borderRadius="lg" overflow="hidden">
            <Image src="/images/dog1.jpg" alt="Dog 1" objectFit="cover" />
          </Box>
          <Box boxSize="sm" borderRadius="lg" overflow="hidden">
            <Image src="/images/cat1.jpg" alt="Cat 1" objectFit="cover" />
          </Box>
          <Box boxSize="sm" borderRadius="lg" overflow="hidden">
            <Image src="/images/dog2.jpg" alt="Dog 2" objectFit="cover" />
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;