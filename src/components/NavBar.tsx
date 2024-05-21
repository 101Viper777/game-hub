import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10">
      <Image src={logo} alt="logo" boxSize="100px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
