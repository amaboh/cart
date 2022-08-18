import {
  Box,
  Button,
  HStack,
  Image,
  Img,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);

  const iteMprice = item?.price;

  if (item === null) return null;
  return (
    <Stack
      display="flex"
      flexDir="row"
      rowGap="8px"
      columnGap={["2rem", "6rem", "9rem"]}
      justifyContent="space-between"
      alignItems="center"
      mx="5px"
    >
      <HStack w="100px">
        <Img
          src={item?.imgUrl}
          boxSize={"110px"}
          objectFit={["cover", "-moz-initial", "-moz-initial"]}
          object-position="top"
          w={["10rem", "15rem", "20rem"]}
          alignSelf="left"
        />
        <Box>
          <HStack alignItems="baseline">
            <Text fontSize={["sm", "xl", "2xl"]}>{item?.name} </Text>
            {quantity > 1 && (
              <Text color="gray.600" fontSize="0.65rem">
                x{quantity}
              </Text>
            )}
          </HStack>
          <Text color="gray.600" fontSize={["sm", "2xl", "2xl"]}>
            {formatCurrency(iteMprice!)}
          </Text>
        </Box>
      </HStack>
      <Spacer px="5px" />
      <HStack>
        <Text fontSize={["sm", "2xl", "2xl"]}>
          {formatCurrency(iteMprice! * quantity)}
        </Text>
        <Button
          onClick={() => removeFromCart(item?.id!)}
          variant="outline"
          colorScheme="red"
          size={["xs", "sm", "sm"]}
        >
          &times;
        </Button>
      </HStack>
    </Stack>
  );
}
