import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperContent from './SwiperContent';

export default function Swiper() {
  return (
    <Box w="full" h={["250px", "450px"]}>
      <SwiperReact navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide>
          <SwiperContent title='América do Norte' subtitle='O continente mais antigo' imagePath='/north-america.jpg' destination='/north-america' />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent title='América do Sul' subtitle='O continente mais antigo' imagePath='/south-america.jpg' destination='/south-america'/>
        </SwiperSlide>
        <SwiperSlide>
        <SwiperContent title='Ásia' subtitle='O continente mais antigo' imagePath='/asia.jpg' destination='/asia'/>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent title='África' subtitle='O continente mais antigo' imagePath='/africa.jpg' destination='/africa'/>
        </SwiperSlide>
        <SwiperSlide>
        <SwiperContent title='Europa' subtitle='O continente mais antigo' imagePath='/europe.jpg' destination='/europe'/>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent title='Oceania' subtitle='O continente mais antigo' imagePath='/oceania.jpg' />
        </SwiperSlide>
      </SwiperReact>
    </Box>
  );
};