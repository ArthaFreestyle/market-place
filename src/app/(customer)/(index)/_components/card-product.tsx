import { rupiahFormat } from "@/lib/utils"
import type { TProduct } from "@/types"
import Link from "next/link"

interface CardProductProps {
  item: TProduct
}

export default function CardProduct({ item }: CardProductProps) {
  return (
    <Link href={`/detail-product/${item.id}`} className="product-card w-full block">
      <div className="bg-white flex flex-col gap-3 sm:gap-4 md:gap-[24px] p-3 sm:p-4 md:p-5 rounded-[12px] sm:rounded-[16px] md:rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 h-full">
        <div className="w-full h-[70px] sm:h-[80px] md:h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
          <img
            className="h-full object-contain"
            src={item.image_url || "/placeholder.svg"}
            alt={item.name || "Product image"}
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-[10px]">
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <p className="font-semibold text-sm sm:text-base leading-tight sm:leading-[22px] line-clamp-2">
              {item.name}
            </p>
            <p className="text-xs sm:text-sm text-[#616369]">{item.category_name}</p>
          </div>
          <p className="font-semibold text-[#0D5CD7] text-sm sm:text-base leading-tight sm:leading-[22px]">
            {rupiahFormat(Number(item.price))}
          </p>
        </div>
      </div>
    </Link>
  )
}
