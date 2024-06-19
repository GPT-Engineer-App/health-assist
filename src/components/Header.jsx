import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" width="100%" bg="teal.500" p={4} color="white" textAlign="center">
      <Text fontSize="2xl" fontWeight="bold">
        Medi Link
      </Text>
    </Box>
  );
};

export default Header;
