import { Suspense } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Navbar from "../../_components/navbar"
import RelatedArticles from "../_components/related-article"
// Mock data untuk artikel
const articles = {
  "rise-of-decentralized-finance": {
    title: "The Rise of Decentralized Finance",
    author: "Emma Wilson",
    date: "May 28, 2025",
    readTime: "8 min read",
    category: "Finance",
    content: `
      <p>Decentralized Finance (DeFi) represents one of the most significant innovations in the financial sector since the advent of online banking. Built on blockchain technology, DeFi eliminates traditional intermediaries and creates a more open, accessible financial system.</p>
      
      <h3>What is DeFi?</h3>
      <p>DeFi refers to financial services built on blockchain networks, primarily Ethereum. These services include lending, borrowing, trading, and earning interest on cryptocurrency holdings without requiring traditional banks or financial institutions.</p>
      
      <h3>Key Benefits</h3>
      <p>The main advantages of DeFi include 24/7 accessibility, lower fees, transparency through smart contracts, and global reach without geographical restrictions. Users maintain full control of their assets without relying on centralized authorities.</p>
      
      <h3>Popular DeFi Applications</h3>
      <p>Leading DeFi platforms include Uniswap for decentralized trading, Compound for lending and borrowing, and Aave for liquidity provision. These platforms have collectively locked billions of dollars in value.</p>
      
      <h3>Challenges and Risks</h3>
      <p>Despite its potential, DeFi faces challenges including smart contract vulnerabilities, regulatory uncertainty, and high transaction fees during network congestion. Users must carefully evaluate risks before participating.</p>
      
      <h3>The Future of Finance</h3>
      <p>As DeFi continues to mature, we can expect improved user interfaces, better security measures, and increased integration with traditional financial systems. The technology promises to democratize access to financial services globally.</p>
    `,
  },
  "sustainable-energy-solutions": {
    title: "Sustainable Energy Solutions",
    author: "David Chen",
    date: "May 24, 2025",
    readTime: "6 min read",
    category: "Environment",
    content: `
      <p>The transition to sustainable energy has accelerated dramatically in recent years, driven by technological advances, cost reductions, and growing environmental awareness. This shift represents one of the most important developments of our time.</p>
      
      <h3>Solar Power Revolution</h3>
      <p>Solar energy costs have plummeted by over 80% in the past decade, making it the cheapest source of electricity in many regions. Advanced photovoltaic cells and improved manufacturing processes continue to drive efficiency gains.</p>
      
      <h3>Wind Energy Expansion</h3>
      <p>Both onshore and offshore wind installations are breaking records annually. Modern wind turbines are larger, more efficient, and capable of generating power even in low-wind conditions.</p>
      
      <h3>Energy Storage Breakthroughs</h3>
      <p>Battery technology improvements are solving the intermittency challenge of renewable energy. Grid-scale storage systems are becoming more affordable and efficient, enabling 24/7 clean energy supply.</p>
      
      <h3>Smart Grid Integration</h3>
      <p>Intelligent power grids are optimizing energy distribution, reducing waste, and enabling better integration of renewable sources. AI and machine learning are playing crucial roles in grid management.</p>
      
      <h3>Policy and Investment</h3>
      <p>Government policies and private investment are accelerating the transition. Carbon pricing, renewable energy mandates, and green financing are creating favorable conditions for sustainable energy adoption.</p>
    `,
  },
  "future-of-remote-work": {
    title: "The Future of Remote Work",
    author: "Sophia Rodriguez",
    date: "May 20, 2025",
    readTime: "7 min read",
    category: "Business",
    content: `
      <p>The remote work revolution has fundamentally transformed how we think about employment, productivity, and work-life balance. What began as a necessity during the pandemic has evolved into a permanent shift in workplace culture.</p>
      
      <h3>The New Normal</h3>
      <p>Companies worldwide have discovered that remote work can maintain or even increase productivity while reducing overhead costs. Employees enjoy greater flexibility, reduced commute times, and improved work-life balance.</p>
      
      <h3>Technology Enablers</h3>
      <p>Advanced collaboration tools, cloud computing, and high-speed internet have made remote work seamless. Video conferencing, project management platforms, and virtual reality meetings are becoming standard business tools.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>Remote work presents challenges including isolation, communication barriers, and maintaining company culture. Organizations are addressing these through virtual team building, regular check-ins, and hybrid work models.</p>
      
      <h3>Global Talent Pool</h3>
      <p>Remote work has opened access to global talent, allowing companies to hire the best candidates regardless of location. This has increased competition but also created opportunities for workers in emerging markets.</p>
      
      <h3>Future Trends</h3>
      <p>The future of work will likely be hybrid, combining remote flexibility with in-person collaboration. Virtual reality offices, AI-powered productivity tools, and new management methodologies will continue to evolve.</p>
      
      <h3>Impact on Cities and Real Estate</h3>
      <p>Remote work is reshaping urban planning and real estate markets. Commercial office demand is declining while residential preferences shift toward larger homes with dedicated workspaces.</p>
    `,
  },
  "advances-in-biotechnology": {
    title: "Advances in Biotechnology",
    author: "James Kim",
    date: "May 15, 2025",
    readTime: "9 min read",
    category: "Science",
    content: `
      <p>Biotechnology is experiencing unprecedented growth, with breakthrough discoveries transforming healthcare, agriculture, and environmental science. These advances promise to address some of humanity's greatest challenges.</p>
      
      <h3>Gene Editing Revolution</h3>
      <p>CRISPR-Cas9 and newer gene editing technologies are enabling precise modifications to DNA. These tools are being used to treat genetic diseases, improve crop yields, and develop new therapeutic approaches.</p>
      
      <h3>Personalized Medicine</h3>
      <p>Advances in genomics and proteomics are enabling personalized treatment plans based on individual genetic profiles. This approach improves treatment efficacy while reducing adverse reactions.</p>
      
      <h3>Synthetic Biology</h3>
      <p>Scientists are designing and constructing new biological parts, devices, and systems. This field is creating novel solutions for drug production, biofuels, and environmental remediation.</p>
      
      <h3>Regenerative Medicine</h3>
      <p>Stem cell research and tissue engineering are advancing rapidly. Scientists are developing methods to regenerate damaged organs and tissues, offering hope for previously untreatable conditions.</p>
      
      <h3>Agricultural Innovation</h3>
      <p>Biotechnology is improving crop resistance to diseases, pests, and climate change. Genetically modified organisms and precision breeding techniques are enhancing food security.</p>
      
      <h3>Environmental Applications</h3>
      <p>Bioengineered organisms are being developed to clean up pollution, produce sustainable materials, and capture carbon dioxide. These applications could help address climate change and environmental degradation.</p>
      
      <h3>Ethical Considerations</h3>
      <p>As biotechnology advances, ethical questions about genetic modification, privacy, and access to treatments become increasingly important. Society must balance innovation with responsible development.</p>
    `,
  },
  "ai-transforming-healthcare": {
    title: "How AI is Transforming Healthcare Delivery",
    author: "Dr. Lisa Johnson",
    date: "June 10, 2025",
    readTime: "12 min read",
    category: "Healthcare",
    content: `
      <p>Artificial Intelligence is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans. The integration of AI technologies is improving patient outcomes while reducing costs and increasing efficiency across the healthcare system.</p>
      
      <h3>Diagnostic Excellence</h3>
      <p>AI-powered diagnostic tools are achieving remarkable accuracy in medical imaging, often surpassing human specialists in detecting conditions like cancer, eye diseases, and neurological disorders. Machine learning algorithms can analyze thousands of images in seconds.</p>
      
      <h3>Personalized Medicine</h3>
      <p>AI enables precision medicine by analyzing genetic data, medical history, and lifestyle factors to create personalized treatment plans. This approach improves treatment effectiveness while minimizing adverse reactions.</p>
      
      <h3>Drug Discovery Acceleration</h3>
      <p>Traditional drug development takes 10-15 years and costs billions. AI is dramatically reducing this timeline by predicting molecular behavior, identifying promising compounds, and optimizing clinical trial design.</p>
      
      <h3>Remote Patient Monitoring</h3>
      <p>Wearable devices and IoT sensors combined with AI analytics enable continuous health monitoring. This technology allows early detection of health issues and reduces the need for frequent hospital visits.</p>
      
      <h3>Administrative Efficiency</h3>
      <p>AI streamlines healthcare administration through automated scheduling, billing, and documentation. Natural language processing helps extract insights from medical records and reduces administrative burden on healthcare providers.</p>
      
      <h3>Challenges and Ethics</h3>
      <p>Despite the benefits, AI in healthcare faces challenges including data privacy concerns, algorithmic bias, and the need for regulatory frameworks. Ensuring equitable access and maintaining human oversight remain critical considerations.</p>
    `,
  },
  "evolution-smart-cities": {
    title: "The Evolution of Smart Cities",
    author: "Mark Stevens",
    date: "June 8, 2025",
    readTime: "10 min read",
    category: "Urban Tech",
    content: `
      <p>Smart cities represent the future of urban development, leveraging Internet of Things (IoT) technology, data analytics, and artificial intelligence to create more efficient, sustainable, and livable urban environments.</p>
      
      <h3>Connected Infrastructure</h3>
      <p>Smart cities integrate sensors and connectivity into infrastructure systems including traffic lights, water management, energy grids, and waste collection. This connectivity enables real-time monitoring and optimization.</p>
      
      <h3>Traffic and Transportation</h3>
      <p>Intelligent transportation systems use real-time data to optimize traffic flow, reduce congestion, and improve public transit efficiency. Autonomous vehicles and smart parking systems are becoming integral components.</p>
      
      <h3>Energy Management</h3>
      <p>Smart grids enable efficient energy distribution, integrate renewable sources, and allow for demand response programs. Buildings use smart systems to optimize heating, cooling, and lighting based on occupancy and weather conditions.</p>
      
      <h3>Environmental Monitoring</h3>
      <p>Sensor networks monitor air quality, noise levels, and environmental conditions in real-time. This data helps cities respond quickly to pollution events and make informed policy decisions.</p>
      
      <h3>Citizen Services</h3>
      <p>Digital platforms provide citizens with easy access to government services, real-time information about city services, and channels for civic engagement. Mobile apps enable reporting of issues and accessing city resources.</p>
      
      <h3>Challenges and Privacy</h3>
      <p>Smart cities face challenges including data privacy concerns, cybersecurity risks, and the digital divide. Ensuring equitable access to smart city benefits while protecting citizen privacy remains a key challenge.</p>
    `,
  },
  "cybersecurity-quantum-computing": {
    title: "Cybersecurity in the Age of Quantum Computing",
    author: "Alex Rivera",
    date: "June 5, 2025",
    readTime: "9 min read",
    category: "Security",
    content: `
      <p>Quantum computing represents both a tremendous opportunity and a significant threat to cybersecurity. As quantum computers become more powerful, they will be capable of breaking current encryption methods, necessitating a complete overhaul of cybersecurity practices.</p>
      
      <h3>The Quantum Threat</h3>
      <p>Quantum computers can potentially break RSA encryption and other public-key cryptography systems that secure most of today's digital communications. This capability could compromise everything from online banking to government communications.</p>
      
      <h3>Post-Quantum Cryptography</h3>
      <p>Researchers are developing quantum-resistant encryption algorithms that can withstand attacks from both classical and quantum computers. These new cryptographic methods are being standardized by organizations like NIST.</p>
      
      <h3>Timeline and Preparation</h3>
      <p>While large-scale quantum computers capable of breaking current encryption are still years away, organizations must begin preparing now. The transition to quantum-safe cryptography will take time and careful planning.</p>
      
      <h3>Quantum Key Distribution</h3>
      <p>Quantum mechanics principles can also enhance security through quantum key distribution (QKD), which provides theoretically unbreakable communication channels by detecting any attempt at eavesdropping.</p>
      
      <h3>Industry Response</h3>
      <p>Technology companies, governments, and security organizations are collaborating to develop and implement quantum-safe solutions. This includes updating protocols, standards, and infrastructure.</p>
      
      <h3>Implementation Challenges</h3>
      <p>Transitioning to post-quantum cryptography involves significant challenges including performance impacts, compatibility issues, and the need for widespread coordination across industries and governments.</p>
    `,
  },
}

interface ArticleDetailProps {
  params: {
    slug: string
  }
}

export default function ArticleDetail({ params }: ArticleDetailProps) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
        <Navbar />
        <div className="container max-w-[1130px] mx-auto px-4 mt-[30px] md:mt-[50px]">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/artikel" className="text-[#6A7789] hover:text-[#0D5CD7] transition-colors">
              ← Back to Articles
            </Link>
          </div>
          <div className="flex flex-col gap-[20px] md:gap-[30px] max-w-4xl">
            <div className="flex items-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit">
              <div className="w-[22px] h-[22px] flex shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
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
              <p className="font-semibold text-xs sm:text-sm">{article.category}</p>
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[14px]">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-[55px] leading-tight md:leading-[55px]">
                {article.title}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex shrink-0 rounded-full bg-[#EFF3FA] items-center justify-center">
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
              <div className="flex flex-col gap-[2px]">
                <p className="font-semibold text-sm md:text-base">{article.author}</p>
                <p className="text-xs md:text-sm text-[#6A7789]">
                  {article.date} • {article.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container max-w-[800px] mx-auto px-4 py-[50px] md:py-[100px]">
        <div className="w-full h-[300px] md:h-[400px] rounded-2xl bg-gradient-to-br from-[#EFF3FA] to-[#D1E7FF] flex items-center justify-center mb-8">
          <div className="w-24 h-24 bg-[#0D5CD7] rounded-full flex items-center justify-center">
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

        <div
          className="prose prose-lg max-w-none prose-headings:text-[#1a1a1a] prose-p:text-[#6A7789] prose-p:leading-relaxed prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="flex items-center gap-4 mt-12 p-6 bg-[#F8FAFC] rounded-2xl">
          <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex shrink-0 rounded-full bg-[#EFF3FA] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
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
          <div className="flex flex-col gap-1">
            <p className="font-bold text-base md:text-lg">{article.author}</p>
            <p className="text-sm md:text-base text-[#6A7789]">Technology Journalist & Expert</p>
            <p className="text-sm md:text-base text-[#6A7789] mt-2">
              Passionate about exploring the intersection of technology and society, with over a decade of experience in
              tech journalism.
            </p>
          </div>
        </div>
      </section>

      <section className="container max-w-[1130px] mx-auto px-4 pb-[50px] md:pb-[100px]">
        <Suspense fallback={<span>Loading...</span>}>
          <RelatedArticles
            title={
              <>
                You Might Also <br /> Like These
              </>
            }
          />
        </Suspense>
      </section>
    </>
  )
}
