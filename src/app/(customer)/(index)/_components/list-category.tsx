import { getCategories } from "../lib/data"
import SwiperCategoryClient from "./SwiperCategoryClient"

export default async function ListCategory() {
  const categories = await getCategories()

  return (
    <div id="categories" className="flex flex-col gap-4 sm:gap-5 md:gap-8 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <h2 className="font-bold text-lg sm:text-2xl leading-tight sm:leading-snug">
          Browse Products <br className="hidden sm:block" /> by Categories
        </h2>
        <a
          href="/catalogs"
          className="px-4 py-2 sm:px-5 sm:py-2.5 border border-[#E5E5E5] rounded-full font-semibold text-sm sm:text-base text-center"
        >
          Explore All
        </a>
      </div>

      {/* Grid di desktop */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((item) => (
          <a key={item.id} href={`/catalogs?category=${item.id}`}>
            <div className="bg-white flex items-center gap-3 p-4 rounded-xl ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/mobile.svg" alt={`${item.name} icon`} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-base leading-tight">{item.name}</p>
                <p className="text-sm text-[#616369]">{item._count.products} products</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Swiper untuk mobile */}
      <div className="block sm:hidden">
        <SwiperCategoryClient categories={categories} />
      </div>
    </div>
  )
}
