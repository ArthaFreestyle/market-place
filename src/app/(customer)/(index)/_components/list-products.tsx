import React, { ReactNode } from "react";
import { getProducts } from "../lib/data";
import Link from "next/link";
import { rupiahFormat } from "@/lib/utils";
import CardProduct from "./card-product";

interface ListProductProps {
  title: ReactNode;
  isShowDetail?: boolean;
}

export default async function ListProducts({
  title,
  isShowDetail = true,
}: ListProductProps) {
  const products = await getProducts();

  return (
    <div id="picked" className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl leading-[34px]">{title}</h2>
        {isShowDetail && (
          <Link
            href="/catalog"
            className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold hover:bg-gray-50 transition-colors"
          >
            Explore All
          </Link>
        )}
      </div>
      
      {/* Mobile: Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((item) => (
          <div
            key={`${item.name + item.id}`}
            className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px]"
          >
            <CardProduct
              item={{
                category_name: item.category.name,
                id: item.id,
                image_url: item.image_url,
                name: item.name,
                price: Number(item.price),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}