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
import { FaFacebook } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import SashimiJoin from "../../../public/sashimiJoin.jpg";

export default function SplitScreen() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
                // bg: "#9d281e",
                zIndex: -1,
              }}
            >
              Sashimi
            </Text>
            <br />{" "}
            <Text color={"red.500"} as={"span"}>
              Salatiga Solid Nihon Community
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Join With Us
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"facebook.400"}
              color={"white"}
              _hover={{
                bg: "facebook.500",
              }}
              leftIcon={<FaFacebook />}
              onClick={() => openInNewTab('https://web.facebook.com/groups/sashimi.salatiga') }
            >
              Facebook
            </Button>
            <Button
              rounded={"full"}
              bg={"purple.400"}
              color={"white"}
              _hover={{
                bg: "purple.500",
              }}
              leftIcon={<FaDiscord />}
              onClick={() => openInNewTab('https://discord.com/channels/722853793753989147/722853793753989151') }
            >
              Discord
            </Button>
            <Button rounded={"full"} bg={"instagram"} leftIcon={<FaInstagram /> }
            onClick={() => openInNewTab('https://www.instagram.com/sashimi_salatiga/') }
            >Instagram</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image src={SashimiJoin} alt="Image" objectFit={"cover"} />
      </Flex>
    </Stack>
  );
}
