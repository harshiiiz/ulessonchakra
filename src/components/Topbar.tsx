import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Topbar = () => {
  return (
    <Box
      //minH={{lg:'880px'}}
      border={"none"}
      pt={{ base: "75px", md: "0px" }}
      color="brand.white"
      bgGradient={{
        base: "linear(to-b, brand.purple 840px, #F2F2FB 400px 600px)",
        lg: "linear(to-b, brand.purple 640px, #F2F2FB 400px 600px)",
      }}
    >
      <Container maxW={"1440px"}>
        <Box position="relative">
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems={{ base: "flex-start", lg: "center" }}
            px={{ base: "0px", md: "0px", lg: "140px" }}

            // gap="97px"
          >
            <Flex
              flexDir="column"
              alignItems={{ base: "center", lg: "flex-start" }}
              mt={{ md: "98px" }}
              w={{ base: "100%", lg: "50%" }}
              mb={{ md: "98px" }}
              //w='50%'
              maxW={{ base: "full", lg: "59rem" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading
                color=" #FFFFFF"
                fontSize={{ base: "36px", lg: "56px" }}
                fontWeight="700"
                fontFamily="'Montserrat',sans-serif"
                whiteSpace="nowrap"
              >
                Join the uLesson
              </Heading>
              <Heading
                as="span"
                color="#F9AD6D"
                fontSize={{ base: "36px", lg: "56px" }}
                fontWeight="700"
                fontFamily="Montserrat"
                //whiteSpace="nowrap"
              >
                Schools Challenge
              </Heading>
              <Text
                fontSize={{ base: "18px", lg: "20px" }}
                color="brand.white"
                mt={{ base: "2rem", lg: "2.4rem" }}
                mb={{ base: "2rem", lg: "3rem" }}
                fontFamily="Mulish"
                opacity="0.8"
              >
                Represent your school in the uLesson competition and win amazing
                prizes
              </Text>
              <Button
                as="a"
                h="52px"
                w="185px"
                bg="#EA7052"
                p="16px 32px"
                fontSize={{ base: "18px", lg: "20px" }}
                color="brand.white"
                fontFamily="Mulish"
              >
                Register Now
              </Button>
            </Flex>
            <Flex
              w={{ base: "full", lg: "auto" }}
              mt={{ base: "1.4rem", lg: "0" }}
              pr={{ base: "1.4rem", lg: "0" }}
            >
              <Image src="/person.svg"></Image>
            </Flex>
          </Flex>
          {/* countdown */}
          <Flex
            ml={{ base: "0px", lg: "115px" }}
            w="full"
            maxW="1220px"
            p={{sm:'15px 0px 15px 10px ',xsm:'32px 38px ',lg:"32px 29px  32px 38px"}}
            borderRadius="8px"
            maxH={{ base: "350px", lg: "202px" }}
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "space-evenly" }}
            boxShadow="rgb(48 20 70 / 15%) 8px 14px 60px"
            alignItems="center"
            bg="brand.white"
          >
            <Countbox
              text="SCHOOLS REGISTERED"
              icon="/ic1.svg"
              number="21"
              color="#7B7FDA"
            />
            <Show above="lg">
              <Divider
                orientation="vertical"
                h="138px"
                border="2px solid rgba(48, 20, 70, 0.15)"
                mr="24px"
              />
            </Show>
            <Show below="md">
              <Divider
                mt="24px"
                mb="24px"
                borderColor="#301446"
                opacity="0.15"
              />
            </Show>
            <Countbox
              text="STUDENTS REGISTERED"
              icon="/ic2.svg"
              number="4,025"
              color="#68BC98"
            />
            <Show above="lg">
              <Divider
                orientation="vertical"
                h="138px"
                border="2px solid rgba(48, 20, 70, 0.15)"
                mr="24px"
              />
            </Show>
            <Show below="md">
              <Divider
                mt="24px"
                mb="24px"
                borderColor="#301446"
                opacity="0.15"
              />
            </Show>
            <Box w={{ base: "100%", lg: "400px" }}>
              <Flex>
                <Box mr="14px " mt='8px' w={{ base: "40px", lg: "64px" }}>
                  <Image
                    src="/ic3.svg"
                    w={{ base: "40px", lg: "64px" }}
                    h={{ base: "40px", lg: "64px" }}
                  ></Image>
                </Box>
                <Flex flexDir="column" justify="flex-start">
                  <Flex justify={"space-between"} pr='20px' pl='20px'>
                    <Text
                      fontSize={{ base: "10px", lg: "14px" }}
                      color="#301446"
                      opacity="0.5"
                      fontWeight="700"
                      textAlign={"center"}
                      fontFamily={"Mulish"}
                    >
                      DAYS
                    </Text>

                    <Text
                      fontSize={{ base: "10px", lg: "14px" }}
                      color="#301446"
                      opacity="0.5"
                      fontWeight="700"
                      textAlign={"center"}
                      fontFamily={"Mulish"}
                    >
                      HOURS
                    </Text>

                    <Text
                      fontSize={{ base: "10px", lg: "14px" }}
                      color="#301446"
                      opacity="0.5"
                      fontWeight="700"
                      textAlign={"center"}
                      fontFamily={"Mulish"}
                    >
                      MINS
                    </Text>
                  </Flex>
                  <Heading
                    fontSize={{ base: "40px", lg: "56px" }}
                    color="#EA7052"
                    fontWeight="700"
                    lineHeight="110%"
                    fontFamily={"Montserrat"}
                    
                  >
                    <Flex justifyContent={"space-between"}>
                      <Box >05 :</Box>
                      <Box>&nbsp;12 :</Box>
                      <Box>&nbsp;32</Box>
                    </Flex>
                  </Heading>
                  <Text
                    fontSize={{ base: "12px", lg: "18px" }}
                    fontWeight="700"
                    lineHeight={"110%"}
                    letterSpacing="1px"
                    opacity="0.75"
                    mt={{ base: "0px", lg: "6px" }}
                    color="#301446"
                    fontFamily={"Mulish"}
                  >
                    TIME TO COMPETITION
                  </Text>
                </Flex>
              </Flex>
            </Box>
            {/* <Countbox text="TIME TO COMPETITION" icon="/ic3.svg" number="05 : 12 : 32" color='#EA7052'/> */}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

const Countbox = ({
  text,
  icon,
  number,
  color,
}: {
  text: string;
  icon: string;
  number: string;
  color: string;
}) => {
  return (
    <Box w={{ base: "100%", lg: "400px" }}>
      <Flex>
        <Box mr="14px">
          <Image
            src={icon}
            w={{ base: "40px", lg: "64px" }}
            h={{ base: "40px", lg: "64px" }}
          ></Image>
        </Box>
        <Flex flexDir="column" justify="flex-start">
          <Heading
            fontSize={{ base: "40px", lg: "56px" }}
            color={color}
            lineHeight="110%"
            letterSpacing="-0.06em"
            fontFamily={"Montserrat"}
          >
            {number}
          </Heading>
          <Text
            color="brand.purple"
            fontSize={{ base: "12px", lg: "18px" }}
            fontWeight="700"
            lineHeight={"110%"}
            letterSpacing="1px"
            opacity="0.75"
            mt={{ base: "0px", lg: "17px" }}
            fontFamily={"Mulish"}
            whiteSpace={"nowrap"}
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
