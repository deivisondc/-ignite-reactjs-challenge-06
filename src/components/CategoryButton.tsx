import { Box, Flex, Image, Text } from '@chakra-ui/react'

type CategoryButtonProps = {
  iconPath: string
  label: string
}

export function CategoryButton({ iconPath, label }: CategoryButtonProps) {
  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
      gap={["8px", "24px"]}
    >    
      <Image display={['none', 'block']} src={iconPath} width={85} height={85} alt={label} />
      <Box display={['block', 'none']} w={2} h={2} borderRadius="full" backgroundColor="highlight" />
      <Text fontSize={["18px", "24px"]}>{label}</Text>
    </Flex>
  )
}