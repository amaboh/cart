import { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOn: boolean;
};

export function ShoppingCart({ isOn }: ShoppingCartProps) {
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: isOn });
  const btnRef = useRef();
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={["xs", "md", "lg"]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={closeCart} />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <VStack>
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </VStack>
            <Text fontWeight="bold" fontSize="1.5rem" textAlign="right">
              {" "}
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue">checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
