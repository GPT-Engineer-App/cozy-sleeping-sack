import { Container, Text, VStack, Heading, Button, Image, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CozyWear
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Experience the ultimate comfort with our wearable sleeping bags. Perfect for camping, lounging, and everything in between.
        </Text>
        <Box boxSize="300px">
          <Image src="https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWFyYWJsZSUyMHNsZWVwaW5nJTIwYmFnfGVufDB8fHx8MTcxNzAyMDMzOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wearable Sleeping Bag" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
