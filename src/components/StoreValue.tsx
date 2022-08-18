import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

type storeProp = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function Storevalue({ id, name, price, imgUrl }: storeProp) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Stack
      h="100%"
      mb="3"
      border="1px"
      borderColor="gray.200"
      bgColor="white"
      borderRadius="0.5rem"
    >
      <Image
        src={imgUrl}
        boxSize="300px"
        objectFit={["cover", "-moz-initial", "-moz-initial"]}
        w={["20rem", "42rem", "65rem"]}
        object-position="top"
        borderTopRadius="0.5rem"
        
      />
      <Box display="flex" flexDir="column" px="5" pb="4">
        <HStack justifyContent="space-between" alignItems="baseline" mb="4">
          <Text fontSize={["sm", "lg", "xl"]} fontWeight="bold">
            {name}
          </Text>
          <Text fontSize={["sm", "lg"]} color="gray.600">
            {formatCurrency(price)}
          </Text>
        </HStack>
        <Box mt="auto">
          {quantity === 0 ? (
            <Button
              w="100%"
              colorScheme="blue"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <Box
              display="flex"
              flexDir="column"
              alignItems="center"
              columnGap="0.5rem"
            >
              <Stack
                display="flex"
                flexDir="row"
                alignItems="baseline"
                justifyContent="center"
                spacing="0.5rem"
                mb="6"
              >
                <Button
                  colorScheme="blue"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <Text px="2">
                  <span style={{ fontSize: "1.4rem" }}>{quantity}</span> in Cart
                </Text>
                <Button
                  colorScheme="blue"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </Stack>
              <Button
                bgColor="red.500"
                color="white"
                size="md"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Stack>
  );
}
