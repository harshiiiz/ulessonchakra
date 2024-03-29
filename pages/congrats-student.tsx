import {
  Flex,
  Spacer,
  Container,
  Image,
  CloseButton,
  Center,
  Heading,
  Text,
  Grid,
  GridItem,
  Box,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Congratulations = () => {
  const registerLinks = [
    {
      name: "Junior",
      link: "https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb",
    },
  ];

  const router = useRouter();

  return (
    <div>
      <Container maxW="997px">
        <Flex mt="46px">
          <Image width="133px" src="/logoulesson.svg" alt="" />
          <Spacer />
          <CloseButton size="lg" onClick={() => router.replace("/")} />
        </Flex>
        <Center mt={{ base: "83px", lg: "79px" }}>
          <Image
            boxSize={{ base: "112px", lg: "186px" }}
            src="/congratslogo.svg"
          />
        </Center>
        <Center mt={{ base: "", lg: "46px" }}>
          <Heading
            fontSize={{ base: "32px", lg: "56px" }}
            fontWeight="600"
            color="#301446"
            textAlign="center"
            letterSpacing="-0.06em"
            lineHeight="110%"
            fontFamily='Montserrat'
          >
            Registration Successful
          </Heading>
        </Center>
        <Center mt="16px">
          <Text
            fontSize={{ base: "16px", lg: "20px" }}
            fontWeight="600"
            opacity="0.7"
            color="#301446"
            textAlign="center"
            fontFamily='Mulish'
          >
            You have successfully registered for the uLesson schools challenge
          </Text>
        </Center>
        <Center mt={{ base: "40px", lg: "79px" }}>
          <Text
            fontSize={{ base: "16px", lg: "20px" }}
            fontWeight="600"
            opacity="0.7"
            color="#301446"
            textAlign="center"
            fontFamily='Mulish'
          >
            Please follow the link below to register for your first stage
            examination.
          </Text>
        </Center>

        {registerLinks.map((registerLink, index) => {
          return (
            <Grid
              key={index}
              gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "281px 1fr" }}
              gap={{ base: 1, lg: 0 }}
              p={5}
            >
              <GridItem>
                <Box
                  border=" 1px solid #E0E7FF"
                  p={4}
                  w={{ base: "auto", lg: "281px" }}
                  h="56px"
                  borderRadius="4px 0px 0px 4px"
                >
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    fontWeight="600"
                    fontSize={{ base: "14px", lg: "20px" }}
                    color=" rgba(48, 20, 70, 0.7)"
                    fontFamily='Mulish'
                  >
                    {registerLink.name}
                  </Text>
                </Box>
              </GridItem>
              <GridItem >
                <Center
                  fontWeight="600"
                  textAlign="center"
                  h="56px"
                  border=" 1px solid #E0E7FF"
                  bg="#F9FAFF"
                  fontSize={{ base: "16px", lg: "20px" }}
                  borderRadius="0px 4px 4px 0px"
                  fontFamily='Mulish'
                >
                  <Link
                  wordBreak='break-all'
                    color="#2640C9"
                    href="https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb"
                  >
                    {registerLink.link}
                  </Link>
                </Center>
              </GridItem>
            </Grid>
          );
        })}
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
};
export default Congratulations;
