import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex h={["50px", "100px"]} justify="center" align="center">
      <Image src="/Logo.png" width={['81px', '184px']} height={['20px', '46px']} alt="Company Logo" />
    </Flex>
  )
}