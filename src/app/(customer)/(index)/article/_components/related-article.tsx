import Link from "next/link"
import type React from "react"

interface RelatedArticlesProps {
  title: React.ReactNode
}

export default function RelatedArticles({ title }: RelatedArticlesProps) {
  const articles = [
    {
      id: 1,
      slug: "rise-of-decentralized-finance",
      title: "The Rise of Decentralized Finance",
      excerpt: "How blockchain is revolutionizing the financial industry with new opportunities.",
      author: "Emma Wilson",
      date: "May 28, 2025",
      readTime: "8 min read",
      category: "Finance",
    },
    {
      id: 2,
      slug: "sustainable-energy-solutions",
      title: "Sustainable Energy Solutions",
      excerpt: "Innovative approaches to renewable energy that are changing our world.",
      author: "David Chen",
      date: "May 24, 2025",
      readTime: "6 min read",
      category: "Environment",
    },
    {
      id: 3,
      slug: "future-of-remote-work",
      title: "The Future of Remote Work",
      excerpt: "How companies are adapting to the new normal of distributed teams.",
      author: "Sophia Rodriguez",
      date: "May 20, 2025",
      readTime: "7 min read",
      category: "Business",
    },
    {
      id: 4,
      slug: "advances-in-biotechnology",
      title: "Advances in Biotechnology",
      excerpt: "Breakthrough discoveries that are transforming healthcare and medicine.",
      author: "James Kim",
      date: "May 15, 2025",
      readTime: "9 min read",
      category: "Science",
    },
  ]

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
        <p className="text-base md:text-lg text-[#6A7789]">Discover more content related to this topic</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="flex flex-col gap-[14px] rounded-2xl bg-white border border-[#E5E9F2] overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="w-full h-[180px] overflow-hidden bg-gradient-to-br from-[#EFF3FA] to-[#D1E7FF] flex items-center justify-center">
              <div className="w-16 h-16 bg-[#0D5CD7] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
            <div className="flex flex-col gap-[10px] p-[16px]">
              <div className="flex items-center gap-[6px]">
                <span className="text-xs font-medium text-[#0D5CD7] bg-[#EFF3FA] px-2 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-[#6A7789]">{article.date}</span>
              </div>
              <h3 className="font-semibold text-base md:text-lg line-clamp-2">{article.title}</h3>
              <p className="text-sm text-[#6A7789] line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center gap-[10px] mt-2">
                <div className="w-[30px] h-[30px] flex shrink-0 rounded-full bg-[#EFF3FA] items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                <div className="flex flex-col">
                  <p className="text-xs font-medium">{article.author}</p>
                  <p className="text-xs text-[#6A7789]">{article.readTime}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="/article"
          className="p-[14px_24px] rounded-full font-semibold border border-[#0D5CD7] text-[#0D5CD7] hover:bg-[#0D5CD7] hover:text-white transition-all duration-300"
        >
          View All Articles
        </Link>
      </div>
    </div>
  )
}
