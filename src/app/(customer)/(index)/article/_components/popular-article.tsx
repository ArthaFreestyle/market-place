import Link from "next/link";
import type React from "react";

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  category: string;
}

interface PopularArticlesProps {
  title: React.ReactNode;
}

// SVG Icons as separate components for better reusability
const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14,2 14,8 20,8" />
  </svg>
);

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UserIcon = () => (
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
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <Link
    href={`/article/${article.slug}`}
    className="group flex flex-col md:flex-row gap-6 rounded-2xl bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 p-4 md:p-0"
  >
    {/* Article Image/Icon */}
    <div className="w-full md:w-[300px] h-[200px] md:h-auto overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
        <DocumentIcon />
      </div>
    </div>

    {/* Article Content */}
    <div className="flex flex-col gap-4 py-2 md:py-6 px-0 md:px-6 flex-1">
      {/* Meta Information */}
      <div className="flex items-center gap-3 text-xs">
        <span className="font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {article.category}
        </span>
        <span className="text-gray-500">{article.date}</span>
        <span className="text-gray-500 flex items-center gap-1">
          <EyeIcon />
          {article.views} views
        </span>
      </div>

      {/* Article Title & Excerpt */}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg md:text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-base text-gray-600 line-clamp-2">
          {article.excerpt}
        </p>
      </div>

      {/* Author & CTA */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
          <UserIcon />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-900">{article.author}</p>
          <p className="text-xs text-gray-500">{article.readTime}</p>
        </div>
        <button className="ml-auto px-5 py-2.5 rounded-full font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
          Read Article
        </button>
      </div>
    </div>
  </Link>
);

export default function PopularArticles({ title }: PopularArticlesProps) {
  const articles: Article[] = [
    {
      id: 1,
      slug: "ai-transforming-healthcare",
      title: "How AI is Transforming Healthcare Delivery",
      excerpt: "Artificial intelligence is revolutionizing patient care and medical diagnostics.",
      author: "Dr. Lisa Johnson",
      date: "June 10, 2025",
      readTime: "12 min read",
      views: "24.5K",
      category: "Healthcare",
    },
    {
      id: 2,
      slug: "evolution-smart-cities",
      title: "The Evolution of Smart Cities",
      excerpt: "Urban centers are becoming more connected and efficient through IoT technology.",
      author: "Mark Stevens",
      date: "June 8, 2025",
      readTime: "10 min read",
      views: "18.2K",
      category: "Urban Tech",
    },
    {
      id: 3,
      slug: "cybersecurity-quantum-computing",
      title: "Cybersecurity in the Age of Quantum Computing",
      excerpt: "How organizations are preparing for post-quantum cryptography challenges.",
      author: "Alex Rivera",
      date: "June 5, 2025",
      readTime: "9 min read",
      views: "15.7K",
      category: "Security",
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      {/* Header */}
      <header className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl md:text-3xl text-gray-900">
          {title}
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Our most read articles from the past month
        </p>
      </header>

      {/* Articles List */}
      <div className="flex flex-col gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}