import { Box, Flex, Heading } from "@chakra-ui/react";

type ContinentBannerProps = {
  name: string;
  imagePath: string;
}

export function ContinentBanner({ name, imagePath }: ContinentBannerProps) {
  return (
    <Flex h={["500px"]} backgroundImage={imagePath} backgroundSize="cover" pl={["140px"]} pb={["80px"]} align="flex-end">
      <Heading color="light-heading">{name}</Heading>
    </Flex>
  )
}