import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function ContinentCard() {
  return (
    <Box borderRadius="4px" border="1px" borderColor="highlight-50">
      <Image src="/europe.jpg" height={173} />

      <Flex direction="row" px={["24px"]} py={["18px"]} justify="space-between" align="center">
        <Box>
          <Text color="dark-heading" fontWeight={600} fontSize="20px" mb={["12px"]}>Londres</Text>
          <Text color="dark-info" fontWeight={500} fontSize="16px">Reino Unido</Text>
        </Box>

        <Image src="europe.jpg" borderRadius="full" w="30px" h="30px"/>
      </Flex>
    </Box>
  )
}