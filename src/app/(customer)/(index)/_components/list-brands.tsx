import React from 'react'
import { getBrands } from '../lib/data'
import Link from 'next/link'

export default async function ListBrands() {
  const brands = await getBrands()

  return (
    <div id="brands" className="flex flex-col gap-6 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <h2 className="font-bold text-xl sm:text-2xl leading-tight sm:leading-[34px]">
          Explore Our <br className="hidden sm:block" /> Popular Brands
        </h2>
        <Link
          href="/catalog"
          className="px-4 py-2 sm:px-5 sm:py-2.5 border border-[#E5E5E5] rounded-full font-semibold text-sm sm:text-base text-center hover:bg-gray-50 transition-colors"
        >
          Explore All
        </Link>
      </div>

      {/* Horizontal scroll brands */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {brands.map((item) => (
          <Link
            key={`${item.id + item.logo}`}
            href="#"
            className="logo-card flex-shrink-0"
          >
            <div className="bg-white flex items-center justify-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-[120px] sm:w-[140px] md:w-[160px] h-[80px] sm:h-[90px] md:h-[100px]">
              <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src={item.logo_url}
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}