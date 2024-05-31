import { useState } from "react";
import { Select, Input, Button, FormControl, FormLabel, VStack, HStack, Wrap, WrapItem, Box, Image, Container, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Perform the search based on the selected filters
    console.log("Search Parameters:", { petType, breed, age, location });
  };

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
        <VStack spacing={4} width="100%" mb={10}>
          <HStack spacing={4} width="100%">
            <FormControl>
              <FormLabel>Pet Type</FormLabel>
              <Select value={petType} onChange={(e) => setPetType(e.target.value)}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Breed</FormLabel>
              <Input value={breed} onChange={(e) => setBreed(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input value={age} onChange={(e) => setAge(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input value={location} onChange={(e) => setLocation(e.target.value)} />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSearch}>Search</Button>
          </HStack>
        </VStack>
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