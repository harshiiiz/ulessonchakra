import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    Box,
    Button,
    Center,
    CloseButton,
    Container,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Spacer,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Text,
    Select,
  } from "@chakra-ui/react";

  interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
  }
  
  const schema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
  });
  
  const defaultValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  

const StudentDetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues,
      });

      
      const onSubmit = (data: FormValues) => {
        alert(JSON.stringify(data));
      };
    
  return (
    <Box as='form' onSubmit={handleSubmit(onSubmit)}>
    <Heading
      as="h1"
      fontSize="24px"
      mt={{ base: "72px", lg: "78px" }}
      color="#301446"
      fontWeight="600"
      fontFamily={"Montserrat"}
    >
      Student Details
    </Heading>
    <SimpleGrid columns={[1, null, 3]} spacingX="26px">
      <FormControl id="firstName" isInvalid={!!errors.firstName}>
        <FormLabel
          htmlFor="SchoolName"
          opacity="0.7"
          color="#301446"
          fontSize="14px"
        >
          First Name
        </FormLabel>
        <Input
          placeholder="First name"
          type="text"
          {...register("firstName")}
        />
        <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
      </FormControl>

      <FormControl id="lastName" isInvalid={!!errors.lastName}>
        <FormLabel>Last Name</FormLabel>
        <Input
          placeholder="Last name"
          type="text"
          {...register("lastName")}
        />
        <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email} id="email">
        <FormLabel>Email</FormLabel>
        <Input placeholder="Email" type="email" {...register("email")} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
    </SimpleGrid>
    <SimpleGrid columns={[1, null, 3]} spacingX="26px"></SimpleGrid>
  </Box>
  )
}

export default StudentDetails