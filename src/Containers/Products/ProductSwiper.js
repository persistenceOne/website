import React  from "react";
import SwiperCore, { Navigation, Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Pstake from "./Pstake";
import Comdex from "./Comdex";
import Audit from "./Audit";
// install Swiper modules
SwiperCore.use([Navigation,Mousewheel, Pagination, Scrollbar, A11y]);

const ProductSwiper = () => {

    return (
        <section className="product-info-section">
        <Swiper
            direction='vertical'
            spaceBetween={50}
            slidesPerView={1}
            mousewheel = {true}
            mousewheelControl = {true}
            mousewheelForceToAxis = {true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide><Comdex/></SwiperSlide>
            <SwiperSlide><Pstake/></SwiperSlide>
            <SwiperSlide><Audit/></SwiperSlide>
        </Swiper>
        </section>

    );
};
export default ProductSwiper;
