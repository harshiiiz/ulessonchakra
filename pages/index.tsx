import type { NextPage } from "next";
import Head from "next/head";

import { Box } from "@chakra-ui/react";
import { ContactUs } from "../src/components/contactUs";

import { Benefits } from "../src/components/Benefits";
import { Competition } from "../src/components/Competition";
import { Footer } from "../src/components/Footer";
import {Faq} from "../src/components/Faq";
import { Register } from "../src/components/Register";
import { Stages } from "../src/components/Stages";
import { Topbar } from "../src/components/Topbar";

const Home: NextPage = () => {
  return (
    <Box bg='brand.white'>
      <Head>
        <title>
          uLesson | No. 1 Learning App for Primary, Junior & Secondary School
          Students
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Topbar/>
      <Benefits />
      <Competition />
      <Stages />
      <Register />
      <Faq />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default Home;
