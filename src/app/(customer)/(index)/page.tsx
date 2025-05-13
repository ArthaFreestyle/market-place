import { Suspense } from "react"
import Navbar from "./_components/navbar"
import ListCategory from "./_components/list-category"
import ListProducts from "./_components/list-products"
import ListBrands from "./_components/list-brands"

export default function LandingPage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
        <Navbar />
        <div className="container max-w-[1130px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-1 mt-[30px] md:mt-[50px]">
          <div className="flex flex-col gap-[20px] md:gap-[30px]">
            <div className="flex items-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit">
              <div className="w-[22px] h-[22px] flex shrink-0">
                <img src="assets/icons/crown.svg" alt="icon" />
              </div>
              <p className="font-semibold text-xs sm:text-sm">Most Popular 100th Product in Belanja</p>
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[14px] text-center md:text-left">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-[55px] leading-tight md:leading-[55px]">
                Working Faster 10x
              </h1>
              <p className="text-base md:text-lg leading-relaxed md:leading-[34px] text-[#6A7789]">
                Dolor si amet lorem super-power features riches than any other platform devices AI integrated.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href=""
                className="p-[14px_20px] md:p-[18px_24px] rounded-full font-semibold bg-[#0D5CD7] text-white text-center w-full sm:w-auto"
              >
                Add to Cart
              </a>
              <a
                href=""
                className="p-[14px_20px] md:p-[18px_24px] rounded-full font-semibold bg-white text-center w-full sm:w-auto"
              >
                View Details
              </a>
            </div>
          </div>
          <div className="w-full md:w-[588px] h-[250px] sm:h-[300px] md:h-[360px] flex shrink-0 overflow-hidden relative">
            <img
              src="assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
              className="object-contain w-full h-full"
              alt="icon"
            />
            <div className="absolute top-[60%] bg-white p-[10px_12px] md:p-[14px_16px] rounded-3xl flex items-center gap-[10px] scale-75 md:scale-100 left-0 md:left-auto">
              <div className="w-10 md:w-12 h-10 md:h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                <img src="assets/icons/code-circle.svg" className="w-5 md:w-6 h-5 md:h-6" alt="icon" />
              </div>
              <p className="font-semibold text-xs md:text-sm">
                Bonus Mac OS <br /> Capitan Pro
              </p>
            </div>
            <div className="absolute right-0 top-[30%] bg-white p-[10px_12px] md:p-[14px_16px] rounded-3xl flex flex-col items-center gap-[10px] scale-75 md:scale-100">
              <div className="w-10 md:w-12 h-10 md:h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                <img src="assets/icons/star-outline.svg" className="w-5 md:w-6 h-5 md:h-6" alt="icon" />
              </div>
              <p className="font-semibold text-xs md:text-sm text-center">
                Include <br /> Warranty
              </p>
            </div>
          </div>
        </div>
        <div className="container max-w-[1130px] mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-[30px] md:mt-[50px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img src="assets/photos/p1.png" className="w-full h-full object-cover" alt="photo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-xs md:text-sm leading-tight md:leading-[22px]">Awesome product!</p>
              <p className="text-[10px] md:text-xs leading-tight md:leading-[18px]">Jemmie Pemilia</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img src="assets/photos/p2.png" className="w-full h-full object-cover" alt="photo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-xs md:text-sm leading-tight md:leading-[22px]">Money saver 25%</p>
              <p className="text-[10px] md:text-xs leading-tight md:leading-[18px]">Angga Risky</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img src="assets/photos/p3.png" className="w-full h-full object-cover" alt="photo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-xs md:text-sm leading-tight md:leading-[22px]">I love the warranty</p>
              <p className="text-[10px] md:text-xs leading-tight md:leading-[18px]">Petina Malaka</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img src="assets/photos/p4.png" className="w-full h-full object-cover" alt="photo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-xs md:text-sm leading-tight md:leading-[22px]">Big deals ever!</p>
              <p className="text-[10px] md:text-xs leading-tight md:leading-[18px]">Udin Sarifun</p>
            </div>
          </div>
        </div>
      </header>
      <section
        id="content"
        className="container max-w-[1130px] mx-auto px-4 flex flex-col gap-[30px] md:gap-[50px] pt-[30px] md:pt-[50px] pb-[50px] md:pb-[100px]"
      >
        <Suspense fallback={<span>Loading...</span>}>
          <ListCategory />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <ListProducts
            title={
              <>
                Most Picked <br /> Quality Products
              </>
            }
          />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <ListBrands />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <ListProducts
            title={
              <>
                New Releases <br /> From Official Stores
              </>
            }
          />
        </Suspense>
      </section>
    </>
  )
}
