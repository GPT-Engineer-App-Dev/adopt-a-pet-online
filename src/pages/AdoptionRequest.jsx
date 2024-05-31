import { useState } from "react";
import { Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

const AdoptionRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for now we will just log the data
    console.log("Adoption Request:", { name, email, phone, comments });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%" as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl" textAlign="center">
          Adoption Request
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl id="comments">
          <FormLabel>Additional Comments</FormLabel>
          <Textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="full">
          Submit Request
        </Button>
      </VStack>
    </Container>
  );
};

export default AdoptionRequest;