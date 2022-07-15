import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  
  Box,
  Container,
  
  Flex,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Faq() {
  const accordionData = [
    {
      title: "Which students should I register for this competition?",
      content: `While all students are advised to participate, the competition will test participants in a category equally. For instance, participants in the junior secondary category will answer the same questions, irrespective of the class of the different participants.`,
    },
    {
      title: "Which curriculum will the Challenge questions cover?",
      content: "Nunc maximus,  tortor sed dolor.",
    },
    {
      title:
        "Do students need to come for the physical exams with their school uniforms? ",
      content: `Curabitur laoreet, mauris vem.sa euismod dignissim. `,
    },
  ];
  return (
    <Box>
      <Container maxW={"1440px"}>
        <Flex flexDir={"column"} mt={{ base: "4rem", lg: "7rem" }}>
          <Heading
            fontFamily={"font.heading"}
            fontSize={{ base: "32px", lg: "48px" }}
            textAlign="center"
          
          >
            Frequently Asked Questions
          </Heading>
          <Accordion 
          
            allowMultiple
            p={{ base: "1rem", lg: "5.1rem 13rem 8rem 13rem" }}
            border="0px solid white"
          >
            {accordionData.map(({ title, content }) => (
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        color={"#170F49"}
                        fontSize={"20px" }
                        bg="white !important"
                        fontFamily='Mulish'
                        p={{ base:'24px 0px', lg:'35px 0px 36px 0px '}}
                        borderBottom="1px solid #D9DBE9"
                        fontWeight={'600'}
                        letterSpacing='-0.06em'
                        lineHeight={'28px'}
                        _expanded={{
                          color: "#7B7FDA",
                          borderBottom: "0px solid white",
                          padding:'35px 0px 13px 0px ',
                        }}
                      >
                        <Box flex="1" textAlign="left">
                          {title}
                        </Box>
                        {isExpanded ? <MinusIcon key={'1'} /> : <AddIcon key={'2'} />}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      borderBottom="1px solid #D9DBE9 "
                      p={{ base:'0px 0px 24px 0px',lg:'0px 0px 30px 0px'}}
                      fontSize={"18px" }
                      fontFamily='Mulish'
                      letterSpacing='-0.06em'
                        lineHeight={'28px'}
                    >
                      {content}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Container>
    </Box>
  );
}

const MinusIcon = () => {
  return (
    <Box>
      <Image src={"/minus.svg"}  alt='minus'width={15} height={14}></Image>
    </Box>
  );
};

const AddIcon = () => {
  return (
    <Box>
      <Image src={"/plusbig.svg"} alt='plus' width={15} height={14}></Image>
    </Box>
  );
};
