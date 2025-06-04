import { rupiahFormat } from "@/lib/utils"
import type { TProduct } from "@/types"
import Link from "next/link"
import Image from "next/image"

interface CardProductProps {
  item: TProduct
}

export default function CardProduct({ item }: CardProductProps) {
  return (
    <Link href={`/detail-product/${item.id}`} className="block w-full">
      <div className="bg-white flex flex-col gap-10 md:gap-3 sm:gap-3 p-3 sm:p-4 min-w-[120px] min-h-[80px] sm:min-h-[140px] sm:min-w-[140px] md:min-h-[160px] md:min-w-[160px] rounded-lg sm:rounded-xl ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 h-full shadow-sm">
        
        {/* Image Container - Larger minimum height for mobile */}
        <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-md bg-gray-50 relative">
          <Image
            className="h-full w-full object-contain object-center transition-transform duration-300 hover:scale-105"
            src={item.image_url || "/placeholder.svg"}
            alt={item.name || "Product image"}
            width={600}
            height={600}
            loading="lazy"
          />
        </div>

        {/* Content Container - More generous spacing */}
        <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 min-h-0">
          {/* Product Name - Larger text for mobile readability */}
          <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-tight line-clamp-2 text-gray-900">
            {item.name}
          </h3>
          
          {/* Category - Better mobile size */}
          <p className="text-xs sm:text-sm md:text-base text-[#616369] truncate">
            {item.category_name}
          </p>
          
          {/* Price - More prominent for mobile */}
          <p className="font-semibold text-[#0D5CD7] text-sm sm:text-base md:text-lg mt-auto">
            {rupiahFormat(Number(item.price))}
          </p>
        </div>
      </div>
    </Link>
  )
}