"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import Link from "next/link"

export default function SwiperCategoryClient({ categories }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={16}
      slidesPerView={1.4}
      pagination={{ clickable: true }}
    >
      {categories.map((item) => (
        <SwiperSlide key={item.id}>
          <Link href={`/catalogs?category=${item.id}`}>
            <div className="bg-white flex items-center gap-3 p-4 rounded-xl ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-10 h-10 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/mobile.svg" alt={`${item.name} icon`} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm leading-tight">{item.name}</p>
                <p className="text-xs text-[#616369]">{item._count.products} products</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
