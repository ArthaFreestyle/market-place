import React, { Suspense } from 'react'
import Navbar from '../../_components/navbar'
import CarouseImages from './_components/carousel-images'
import ListProducts from '../../_components/list-products'
import PriceInfo from './_components/price-info'
import { Tparams } from '@/types'
import { getProductById } from './lib/data'
import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'

interface DetailProductProp {
	params: Tparams;
}

export default async function DetailProductPage({params}: DetailProductProp) {
    const {session} = await getUser()
    const product = await getProductById(Number.parseInt(params.id))
    
    console.log(session);
    
    if (!product) {
        return redirect('/')
    }

  return (
    <>
    <header className="bg-[#EFF3FA] pt-[30px] h-[140px] md:h-[50px] mb-[10px] md:mb-[110px]">
        <Navbar />
    </header>
    <div id="title" className="container max-w-[1130px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-0 gap-4 md:gap-0">
        <div className="flex flex-col gap-3 md:gap-5 w-full">
            <div className="flex gap-3 md:gap-5 items-center flex-wrap">
                <a className="page text-xs md:text-sm text-[#6A7789] last-of-type:text-black">Shop</a>
                <span className="text-xs md:text-sm text-[#6A7789]">/</span>
                <a className="page text-xs md:text-sm text-[#6A7789] last-of-type:text-black">Browse</a>
                <span className="text-xs md:text-sm text-[#6A7789]">/</span>
                <a className="page text-xs md:text-sm text-[#6A7789] last-of-type:text-black">Details</a>
            </div>
            <h1 className="font-bold text-2xl md:text-4xl leading-7 md:leading-9">{product.name}</h1>
        </div>
        <div className="flex items-center gap-2 justify-start md:justify-end w-full md:w-auto">
            <div className="flex items-center">
                <div className="flex shrink-0">
                    <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex shrink-0">
                    <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex shrink-0">
                    <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex shrink-0">
                    <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex shrink-0">
                    <img src="/assets/icons/Star-gray.svg" alt="star" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
            </div>
            <p className="font-semibold text-sm md:text-base">({product._count.orders})</p>
        </div>
    </div>
    <CarouseImages images={product.images} />
    <div id="details-benefits" className="container max-w-[1130px] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-[50px] justify-center mt-[30px] md:mt-[50px] px-4 md:px-0">
        <div className="flex items-center gap-[10px] w-full md:w-auto justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                <img src="/assets/icons/star-outline.svg" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <p className="font-semibold text-xs md:text-sm text-center md:text-left">Include Official <br className="hidden md:block" />
            <span className="md:hidden"> </span>Warranty</p>
        </div>
        <div className="border-[0.5px] border-[#E5E5E5] h-px w-full md:h-12 md:w-px"></div>
        <div className="flex items-center gap-[10px] w-full md:w-auto justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                <img src="/assets/icons/code-circle.svg" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <p className="font-semibold text-xs md:text-sm text-center md:text-left">Bonus Mac OS <br className="hidden md:block" />
            <span className="md:hidden"> </span>Capitan Pro</p>
        </div>
        <div className="border-[0.5px] border-[#E5E5E5] h-px w-full md:h-12 md:w-px"></div>
        <div className="flex items-center gap-[10px] w-full md:w-auto justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                <img src="/assets/icons/like.svg" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <p className="font-semibold text-xs md:text-sm text-center md:text-left">100% Original <br className="hidden md:block" />
            <span className="md:hidden"> </span>From Factory</p>
        </div>
        <div className="border-[0.5px] border-[#E5E5E5] h-px w-full md:h-12 md:w-px"></div>
        <div className="flex items-center gap-[10px] w-full md:w-auto justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                <img src="/assets/icons/tag.svg" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <p className="font-semibold text-xs md:text-sm text-center md:text-left">Free Tax On <br className="hidden md:block" />
            <span className="md:hidden"> </span>Every Sale</p>
        </div>
    </div>
    <div id="details-info" className="container max-w-[1030px] mx-auto flex flex-col lg:flex-row justify-between gap-5 mt-[30px] md:mt-[50px] px-4 md:px-0">
        <div className="max-w-full lg:max-w-[650px] w-full flex flex-col gap-[20px] md:gap-[30px]">
            <div id="about" className="flex flex-col gap-[10px]">
                <h3 className="font-semibold text-lg md:text-xl">About Product</h3>
                <p className="leading-[28px] md:leading-[32px] text-sm md:text-base">
                    {product.description}
                </p>
            </div>
            <div id="testi" className="flex flex-col gap-[10px]">
                <h3 className="font-semibold text-lg md:text-xl">Real Testimonials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div className="testi-card flex flex-col bg-white p-4 md:p-5 gap-4 md:gap-5 border border-[#E5E5E5] rounded-[15px] md:rounded-[20px] h-fit">
                        <div className="flex">
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star-gray.svg" alt="star" className="w-4 h-4" />
                            </div>
                        </div>
                        <p className="line-clamp-3 md:line-clamp-2 hover:line-clamp-none leading-[24px] md:leading-[28px] text-sm md:text-base">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                                <img src="/assets/photos/p2.png" className="w-full h-full object-cover rounded-full" alt="photo" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-semibold text-xs md:text-sm leading-[18px] md:leading-[22px]">Angga Risky</p>
                                <p className="text-xs leading-[16px] md:leading-[18px] text-gray-600">12 January 2028</p>
                            </div>
                        </div>
                    </div>
                    <div className="testi-card flex flex-col bg-white p-4 md:p-5 gap-4 md:gap-5 border border-[#E5E5E5] rounded-[15px] md:rounded-[20px] h-fit">
                        <div className="flex">
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star-gray.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star-gray.svg" alt="star" className="w-4 h-4" />
                            </div>
                        </div>
                        <p className="line-clamp-3 md:line-clamp-2 hover:line-clamp-none leading-[24px] md:leading-[28px] text-sm md:text-base">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                                <img src="/assets/photos/p4.png" className="w-full h-full object-cover rounded-full" alt="photo" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-semibold text-xs md:text-sm leading-[18px] md:leading-[22px]">Sarifuding</p>
                                <p className="text-xs leading-[16px] md:leading-[18px] text-gray-600">12 January 2028</p>
                            </div>
                        </div>
                    </div>
                    <div className="testi-card flex flex-col bg-white p-4 md:p-5 gap-4 md:gap-5 border border-[#E5E5E5] rounded-[15px] md:rounded-[20px] h-fit">
                        <div className="flex">
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                        </div>
                        <p className="line-clamp-3 md:line-clamp-2 hover:line-clamp-none leading-[24px] md:leading-[28px] text-sm md:text-base">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                                <img src="/assets/photos/p3.png" className="w-full h-full object-cover rounded-full" alt="photo" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-semibold text-xs md:text-sm leading-[18px] md:leading-[22px]">Ika Nurina</p>
                                <p className="text-xs leading-[16px] md:leading-[18px] text-gray-600">12 January 2028</p>
                            </div>
                        </div>
                    </div>
                    <div className="testi-card flex flex-col bg-white p-4 md:p-5 gap-4 md:gap-5 border border-[#E5E5E5] rounded-[15px] md:rounded-[20px] h-fit">
                        <div className="flex">
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star-gray.svg" alt="star" className="w-4 h-4" />
                            </div>
                        </div>
                        <p className="line-clamp-3 md:line-clamp-2 hover:line-clamp-none leading-[24px] md:leading-[28px] text-sm md:text-base">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                                <img src="/assets/photos/p1.png" className="w-full h-full object-cover rounded-full" alt="photo" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-semibold text-xs md:text-sm leading-[18px] md:leading-[22px]">Sami Mami</p>
                                <p className="text-xs leading-[16px] md:leading-[18px] text-gray-600">12 January 2028</p>
                            </div>
                        </div>
                    </div>
                    <div className="testi-card flex flex-col bg-white p-4 md:p-5 gap-4 md:gap-5 border border-[#E5E5E5] rounded-[15px] md:rounded-[20px] h-fit">
                        <div className="flex">
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star-gray.svg" alt="star" className="w-4 h-4" />
                            </div>
                            <div className="flex shrink-0">
                                <img src="/assets/icons/Star-gray.svg" alt="star" className="w-4 h-4" />
                            </div>
                        </div>
                        <p className="line-clamp-3 md:line-clamp-2 hover:line-clamp-none leading-[24px] md:leading-[28px] text-sm md:text-base">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                                <img src="/assets/photos/p2.png" className="w-full h-full object-cover rounded-full" alt="photo" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-semibold text-xs md:text-sm leading-[18px] md:leading-[22px]">Baronia</p>
                                <p className="text-xs leading-[16px] md:leading-[18px] text-gray-600">12 January 2028</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-auto lg:sticky lg:top-4">
            <PriceInfo isLogIn={session ? true : false} item={{ 
                id: product.id,
                category_name: product.category.name,
                image_url: product.images[0],
                name: product.name,
                price: Number(product.price)
            }} />
        </div>
    </div>
    <div id="recommedations" className="container max-w-[1130px] mx-auto flex flex-col gap-[20px] md:gap-[30px] pb-[80px] md:pb-[100px] mt-[50px] md:mt-[70px] px-4 md:px-0">
        <Suspense fallback={<span>Loading...</span>}>
            <ListProducts
                title={
                    <>
                        Other Products <br className="hidden md:block" />
                        <span className="md:hidden"> </span>You Might Need
                    </>
                }
                isShowDetail={false}
            />
        </Suspense>
    </div>
    
    </>
  )
}