'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

const testimonials = [
    {
        logo: '/assets/logo1.webp',
        company: 'Serene Living Products',
        quote: `Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.`,
        name: 'Ethan Morgan',
        title: 'Founder and CEO, Serene Living Products',
        avatar: '/assets/av1.webp',
    },
    {
        logo: '/assets/logo3.webp',
        company: 'Starlight Creations',
        quote: `Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.`,
        name: 'Olivia Hayes',
        title: 'Owner, Starlight Creations',
        avatar: '/assets/av3.webp',
    },
    {
        logo: '/assets/logo2.webp',
        company: 'Opulent Living Group',
        quote: `Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.`,
        name: 'Alexander Reed',
        title: 'Co-Founder, Opulent Living Group',
        avatar: '/assets/av2.webp',
    },
    {
        logo: '/assets/logo1.webp',
        company: 'Serene Living Products',
        quote: `Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.`,
        name: 'Ethan Morgan',
        title: 'Founder and CEO, Serene Living Products',
        avatar: '/assets/av1.webp',
    },
    {
        logo: '/assets/logo2.webp',
        company: 'Opulent Living Group',
        quote: `Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.`,
        name: 'Alexander Reed',
        title: 'Co-Founder, Opulent Living Group',
        avatar: '/assets/av2.webp',
    },
    {
        logo: '/assets/logo3.webp',
        company: 'Starlight Creations',
        quote: `Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.`,
        name: 'Olivia Hayes',
        title: 'Owner, Starlight Creations',
        avatar: '/assets/av3.webp',
    },
];

export const TestimSlider = () => {
    return (
        <div className='container mx-auto h-full flex'>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                className="w-full h-full"
            >
                {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx} className="flex h-full items-stretch">
                        <div className="flex flex-col justify-between h-full w-full min-h-[580px] rounded-xl border border-gray-200 bg-white p-[30px] gap-y-[20px] shadow-md">
                            <div className="h-[80px] flex items-center justify-start">
                                <Image
                                    src={item.logo}
                                    alt={item.company}
                                    width={320}
                                    height={100}
                                    className="object-contain h-auto w-auto"
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-[#9B9A99] font-medium leading-[230%] text-[20px]">{item.quote}</p>
                                <span className="text-[96px] h-0 font-medium text-[#9B9A99] text-right leading-none">"</span>
                            </div>

                            <div className="flex items-center gap-x-4 mt-auto">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                />
                                <div className='flex gap-y-1 flex-col'>
                                    <h4 className="font-bold text-[24px]">{item.name}</h4>
                                    <h6 className="text-[20px] max-w-[240px] font-medium">{item.title}</h6>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
