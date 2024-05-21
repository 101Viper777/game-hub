import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize="100px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
