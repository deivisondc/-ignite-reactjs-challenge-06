import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header'
import { HomePageBanner } from '../components/HomePageBanner'
import { HomePageCategories } from '../components/HomePageCategories'
import Swiper from '../components/Swiper'
import { Box, Divider, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box maxW="1440px" mx="auto">
      <Head>
        <title>World Trip</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <HomePageBanner />

        <Box px={["0", "100px"]} pb={["24px", "40px"]} className={styles.content}>
          <HomePageCategories />

          <Divider borderColor="dark-heading" style={{ width: 90}} mb={["24px", "52px"]} />

          <Heading fontSize={["20px", "36px"]} fontWeight={500} mb={["5", "14"]} textAlign="center" color="dark-heading">
            Vamos nessa?<br /> Então escolha seu continente
          </Heading>

          <Swiper />
        </Box>
      </main>
    </Box>
  )
}
