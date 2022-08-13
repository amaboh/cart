import { Box, HStack, Stack } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
} from "@chakra-ui/react";
import { IoCartSharp } from "react-icons/io5";

export function Navbar() {
  return (
    <Box boxShadow="lg" bg="white">
      <Breadcrumb
        separator={""}
        bg="white"
        mb={3}
        py="4"
        pl="4"
        color="gray.60"
      >
        <HStack justifyContent="space-between" mx="5">
          <Box
            display="flex"
            flexDir={"row"}
            justifyItems="space-between"
            gap={5}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/store">Store</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
          </Box>
          <Stack pos="relative" h="3rm" w="2rem">
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Shopping cart"
              borderRadius="8rem"
              icon={<IoCartSharp />}
            />
            <Box
              pos="absolute"
              h="1rem"
              w="1rem"
              bottom="0"
              right="0"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="4rem"
              bg="red"
              fontSize={"0.8rem"}
              transform="translate(25%,25%)"
            >
              4
            </Box>
          </Stack>
        </HStack>
      </Breadcrumb>
    </Box>
  );
}
