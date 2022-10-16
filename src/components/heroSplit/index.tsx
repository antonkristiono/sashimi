import {
  Button,
  Flex,
  Heading,
  // Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";


import SashimiJoin from "../../../public/sashimiJoin.jpg";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Sashimi
            </Text>
            <br />{" "}
            <Text color={"red.400"} as={"span"}>
              Salatiga Solid Nihon Community
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Create Project
            </Button>
            <Button rounded={"full"}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image src={SashimiJoin} alt="Image" objectFit={"cover"} />
      </Flex>
    </Stack>
  );
}
