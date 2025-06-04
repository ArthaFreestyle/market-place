export default function ArticleContent() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl md:text-3xl font-bold">The Future of Technology</h2>
      <p className="text-base md:text-lg text-[#6A7789] leading-relaxed">
        As we approach 2025, the technological landscape continues to evolve at an unprecedented pace. Artificial
        intelligence, quantum computing, and extended reality are no longer just buzzwords but tangible technologies
        that are reshaping our world in profound ways.
      </p>

      <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden my-4">
        <img src="/assets/banners/quantum.jpg" alt="AI Technology" className="w-full h-full object-cover" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold mt-4">Artificial Intelligence Revolution</h3>
      <p className="text-base md:text-lg text-[#6A7789] leading-relaxed">
        The AI revolution is well underway, with machine learning algorithms becoming increasingly sophisticated. From
        healthcare diagnostics to autonomous vehicles, AI is enhancing efficiency and enabling new possibilities across
        industries. Companies are now focusing on responsible AI development, ensuring that these powerful tools benefit
        humanity while minimizing potential risks.
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-4">Quantum Computing Breakthroughs</h3>
      <p className="text-base md:text-lg text-[#6A7789] leading-relaxed">
        Quantum computing is making significant strides, with researchers achieving quantum advantage in solving complex
        problems that classical computers cannot tackle efficiently. These breakthroughs promise to revolutionize fields
        such as cryptography, material science, and drug discovery.
      </p>

      <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden my-4">
        <img
          src="/assets/banners/quant1.jpg"
          alt="Quantum Computing"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-bold mt-4">Extended Reality: Beyond Entertainment</h3>
      <p className="text-base md:text-lg text-[#6A7789] leading-relaxed">
        Virtual, augmented, and mixed reality technologies are expanding beyond gaming and entertainment. These
        immersive technologies are transforming education, healthcare, and workplace collaboration. With more affordable
        and powerful devices entering the market, extended reality is becoming accessible to a broader audience.
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-4">Sustainable Technology</h3>
      <p className="text-base md:text-lg text-[#6A7789] leading-relaxed">
        As climate concerns intensify, the tech industry is increasingly focusing on sustainable solutions. From
        energy-efficient data centers to recyclable electronics, companies are innovating to reduce their environmental
        footprint. Green tech is not just an ethical choice but also a strategic business decision.
      </p>

      <div className="flex items-center gap-4 mt-8 p-6 bg-[#F8FAFC] rounded-2xl">
        <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex shrink-0 rounded-full overflow-hidden">
          <img src="/assets/photos/author.png" className="w-full h-full object-cover" alt="author" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-base md:text-lg">John Doe</p>
          <p className="text-sm md:text-base text-[#6A7789]">Technology Journalist & Futurist</p>
          <p className="text-sm md:text-base text-[#6A7789] mt-2">
            John has been covering technology trends for over a decade, with a focus on how emerging technologies impact
            society and business.
          </p>
        </div>
      </div>
    </div>
  )
}
