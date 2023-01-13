import { Flex } from '@chakra-ui/react'
import { CategoryButton } from './CategoryButton'

export function HomePageCategories() {
  return (
    <Flex
      py={["36px", "80px"]}
      px={["50px", "100px"]}
      justify={["space-around", "space-between"]}
      flexWrap={["wrap", "nowrap"]}
      w="full"
      gap={"24px"}
    >
      <CategoryButton iconPath='/cocktail.png' label='vida noturna' />
      <CategoryButton iconPath='/surf.png' label='praia' />
      <CategoryButton iconPath='/building.png' label='moderno' />
      <CategoryButton iconPath='/museum.png' label='clássico' />
      <CategoryButton iconPath='/earth.png' label='e mais...' />
    </Flex>
  )
}