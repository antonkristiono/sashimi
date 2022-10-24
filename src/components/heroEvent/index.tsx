import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function HeroEvent() {
  return (
    <Flex
      w={'full'}
      h={'50vh'}
      backgroundImage={
      'url(https://scontent.fsub3-1.fna.fbcdn.net/v/t39.30808-6/295497513_2221414244678121_8750843035822375242_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHmOiv9O1KOUoEPaWC2K9dlVVdCC29YfOFVV0ILb1h84Vx5MfRLmFiSLYOUQL_OOhY&_nc_ohc=WOMBIzCTzxoAX_RvFop&_nc_zt=23&_nc_ht=scontent.fsub3-1.fna&oh=00_AT9EhW7hjv0dSsC9av7uJNtQz-pmsxsq-StG_JSVojxBwg&oe=635C02C5)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            EVENT
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
