import { Box, Flex, Text } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentCard } from "../../components/ContinentCard";
import { Header } from "../../components/Header";

export default function Continent() {


  return (
    <Box>
      <Header />
      <ContinentBanner name="Europa" imagePath="/europe.jpg" />

      <Box px={["16px", "140px"]} py={["24px", "80px"]}>
        <Flex direction={["column", "row"]} gap={["16px", "70px"]} mb={["32px", "80px"]}>
          <Text color="dark-text" flex="1" fontSize={["14px", "24px"]}>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex gap={["42px"]} flex="1">
            <Box textAlign={["left", "center"]}>
              <Text fontWeight={600} fontSize={["24px", "48px"]} color="highlight">50</Text>
              <Text fontWeight={600} fontSize={["18px", "24px"]} color="dark-text">países</Text>
            </Box>
            <Box textAlign={["left", "center"]}>
              <Text fontWeight={600} fontSize={["24px", "48px"]} color="highlight">60</Text>
              <Text fontWeight={600} fontSize={["18px", "24px"]} color="dark-text">linguas</Text>
            </Box>
            <Box textAlign={["left", "center"]}>
              <Text fontWeight={600} fontSize={["24px", "48px"]} color="highlight">27</Text>
              <Text fontWeight={600} fontSize={["18px", "24px"]} color="dark-text">cidades +100</Text>
            </Box>
          </Flex>
        </Flex>

        <Box>
          <Text fontWeight={500} color="dark-heading" fontSize={["24px", "36px"]} mb={["20px", "40px"]}>Cidades +100</Text>

          <Flex flexWrap="wrap" gap={["20px", "45px"]} justify={["center", "flex-start"]}>
            <ContinentCard />
            <ContinentCard />
            <ContinentCard />
            <ContinentCard />
            <ContinentCard />
            <ContinentCard />
            <ContinentCard />
          </Flex>
        </Box>
      </Box>

    </Box>
  )
}