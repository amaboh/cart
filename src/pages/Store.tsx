import React from "react";
import storeItems from "../data/items.json";
import { Box, Grid, Heading, Stack, VStack } from "@chakra-ui/react";
import { Storevalue } from "../components/StoreValue";

const Store = () => {
  return (
    <Box maxWidth={1370} m="auto">
      <Heading textAlign="left" fontWeight="bold" pl={[5, 2, 0]} ml={["1", "0", "3"]} fontSize={['lg','2xl', '3xl' ]} mb="3">
        Store
      </Heading>
      <Stack
        spacing={[10, 10, 4]}
        direction={["column", "column", "column"]}
        px={[1, 4, 2]}
      >
        {storeItems.map((item) => (
          <VStack key={item.id}>
            <Storevalue {...item} />
          </VStack>
        ))}
      </Stack>
    </Box>
  );
};

export default Store;

