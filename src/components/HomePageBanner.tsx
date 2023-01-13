import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export function HomePageBanner() {
  return (
    <Box h={['auto', '370px']} position="relative">
      <Flex direction="column" justifyContent="center" h={['auto', '335px']} backgroundImage={"url('/Background.png')"} pt={["28px", "0px"]} px={["16px", "140px"]} pb={["28px", "0px"]} >
        <Heading fontSize={["20px", "36px"]} color="light-heading" fontWeight={500} lineHeight={1.5} mb="5">
          5 Continentes,<br />infinitas possibilidades.
        </Heading>

        <Text fontSize={["14px", "20px"]} color="light-text" maxW="480px">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>

      <Box position="absolute" bottom={0} right="10%" transform="rotate(3deg)" display={['none', 'block']}>
        <Image src='/Airplane.png' width={417} height={270} alt='Airplane'/>
      </Box>
    </Box>
  )
}