export default function ArticleCategories() {
  const categories = [
    {
      id: 1,
      name: "Technology",
      icon: "/assets/icons/tech.svg",
      count: 120,
    },
    {
      id: 2,
      name: "Business",
      icon: "/assets/icons/business.svg",
      count: 86,
    },
    {
      id: 3,
      name: "Science",
      icon: "/assets/icons/science.svg",
      count: 74,
    },
    {
      id: 4,
      name: "Health",
      icon: "/assets/icons/health.svg",
      count: 65,
    },
    {
      id: 5,
      name: "Culture",
      icon: "/assets/icons/culture.svg",
      count: 53,
    },
    {
      id: 6,
      name: "Politics",
      icon: "/assets/icons/politics.svg",
      count: 47,
    },
  ]

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-bold text-2xl md:text-3xl">Article Categories</h2>
        <p className="text-base md:text-lg text-[#6A7789]">Browse articles by your favorite topics</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-[14px] p-[20px] rounded-2xl bg-white border border-[#E5E9F2] hover:border-[#0D5CD7] hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#EFF3FA]">
              <div className="w-[30px] h-[30px] flex shrink-0">
                <img src={category.icon || "/placeholder.svg"} alt={category.name} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-[2px]">
              <p className="font-semibold text-sm md:text-base">{category.name}</p>
              <p className="text-xs md:text-sm text-[#6A7789]">{category.count} articles</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
