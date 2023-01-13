import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Router from "next/router";
import { SwiperSlide } from "swiper/react";

type SwiperContentType = {
  title: string;
  subtitle: string;
  imagePath: string;
  destination: string;
}

export default function SwiperContent({ title, subtitle, imagePath, destination }: SwiperContentType) {
  function goToContinentPage() {
    Router.push(destination)
  }

  return (
    <Flex h={["250px", "450px"]} direction="column" gap="4" justify="center" align="center" position="relative" onClick={goToContinentPage}>
      <Heading fontWeight={700} color="light-text">{title}</Heading>
      <Text fontWeight={700} color="light-text">{subtitle}</Text>
      <Image zIndex="-1" src={imagePath} w="100%" filter="brightness(0.6)" alt="Europa" top="0" right="0" position="absolute" />
    </Flex>
  )
}