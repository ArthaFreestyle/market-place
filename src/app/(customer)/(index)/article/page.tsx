import { Suspense } from "react"
import Navbar from "../_components/navbar"
import ArticleContent from "./_components/article-content"
import RelatedArticles from "./_components/related-article"
import ArticleCategories from "./_components/article-categories"
import PopularArticles from "./_components/popular-article"

export default function ArtikelPage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-6 pb-8 md:pt-8 md:pb-12">
        <Navbar />
        
        {/* Hero Section */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-8 lg:mt-12">
            
            {/* Content Section */}
            <div className="flex flex-col gap-6 lg:gap-8 flex-1 text-center lg:text-left">
              
              {/* Featured Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm">
                  <div className="w-5 h-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0D5CD7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14,2 14,8 20,8"></polyline>
                    </svg>
                  </div>
                  <p className="font-semibold text-sm text-gray-700">Featured Article of the Month</p>
                </div>
              </div>
              
              {/* Title and Description */}
              <div className="space-y-4">
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-gray-900">
                  Latest Tech Trends 2025
                </h1>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#6A7789] max-w-2xl mx-auto lg:mx-0">
                  Discover the most innovative technologies that will shape our future and transform industries worldwide.
                </p>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0D5CD7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm lg:text-base text-gray-900">John Doe</p>
                  <p className="text-xs lg:text-sm text-[#6A7789]">
                    June 15, 2025 • 10 min read
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="w-full lg:w-[600px] xl:w-[700px] h-64 sm:h-80 lg:h-96 flex-shrink-0 relative">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#EFF3FA] to-[#D1E7FF] flex items-center justify-center shadow-lg">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#0D5CD7] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-white p-3 lg:p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 rounded-full bg-[#FFC736] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                    </svg>
                  </div>
                  <p className="font-semibold text-sm text-gray-700">Save for Later</p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-white p-3 lg:p-4 rounded-2xl shadow-lg">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 rounded-full bg-[#FFC736] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16,6 12,2 8,6"></polyline>
                      <line x1="12" x2="12" y1="2" y2="15"></line>
                    </svg>
                  </div>
                  <p className="font-semibold text-xs lg:text-sm text-gray-700 text-center">Share</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comments/Reviews Section */}
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { comment: "Great insights!", author: "Sarah Johnson" },
                { comment: "Very informative", author: "Michael Chen" },
                { comment: "Changed my perspective", author: "Aisha Rahman" },
                { comment: "Must read!", author: "Carlos Mendez" }
              ].map((review, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#EFF3FA] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0D5CD7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm text-gray-900 truncate">{review.comment}</p>
                    <p className="text-xs text-[#6A7789] truncate">{review.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <section
        id="content"
        className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        <div className="space-y-12 lg:space-y-20">
          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0D5CD7]"></div>
            </div>
          }>
            <ArticleContent />
          </Suspense>
          
          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0D5CD7]"></div>
            </div>
          }>
            <ArticleCategories />
          </Suspense>
          
          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0D5CD7]"></div>
            </div>
          }>
            <RelatedArticles
              title={
                <>
                  Related <br /> Articles
                </>
              }
            />
          </Suspense>
          
          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0D5CD7]"></div>
            </div>
          }>
            <PopularArticles
              title={
                <>
                  Most Popular <br /> Articles
                </>
              }
            />
          </Suspense>
        </div>
      </section>
    </>
  )
}