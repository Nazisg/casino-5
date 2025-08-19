export default function AboutUs() {
  return (
    <section id="about-us" className="px-4 py-10 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[24px] lg:text-[48px] font-bold glow-text text-center text-[#8A2BE2]">Find Your Favorite Game</h2>
        <p className="text-[#000] opacity-40 text-[16px] lg:text-[20px] text-center">Explore the most popular online casino games and find new ones to play</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-8 pt-5 lg:pt-10 justify-items-center">
          <div className="flex flex-col bg-[#8A2BE2]/5 rouneded-[8px] gap-2 w-full items-center cursor-pointer group backdrop-blur-sm border-2 border-[#8A2BE2] rounded-2xl p-6 text-center hover:bg-text-[#FFD700] transition-all duration-300 hover:scale-105">
            <img src="/icons/about-1.png" alt="icon" />
            <h3 className="font-bold  lg:text-[20px]">Slots</h3>
            <p className="text-[12px] lg:text-[14px] opacity-60">Spin the reels for a chance at massive jackpots and exciting bonus rounds.</p>
          </div>
          <div className="flex flex-col bg-[#8A2BE2]/5 rouneded-[8px] gap-2 w-full items-center cursor-pointer group backdrop-blur-sm border-2 border-[#8A2BE2] rounded-2xl p-6 text-center hover:bg-text-[#8A2BE2] transition-all duration-300 hover:scale-105">
            <img src="/icons/about-2.png" alt="icon" />
            <h3 className="font-bold  lg:text-[20px]">Blackjack</h3>
            <p className="text-[12px] lg:text-[14px] opacity-60">Challenge the dealer in this classic card game of skill and strategy.</p>
          </div>
          <div className="flex flex-col bg-[#8A2BE2]/5 rouneded-[8px] gap-2 w-full items-center cursor-pointer group backdrop-blur-sm border-2 border-[#8A2BE2] rounded-2xl p-6 text-center hover:bg-text-[#8A2BE2] transition-all duration-300 hover:scale-105">
            <img src="/icons/about-3.png" alt="icon" />
            <h3 className="font-bold  lg:text-[20px]">Roulette</h3>
            <p className="text-[12px] lg:text-[14px] opacity-60">Place your bets and feel the thrill as the wheel spins.</p>
          </div>
          <div className="flex flex-col bg-[#8A2BE2]/5 rouneded-[8px] gap-2 w-full items-center cursor-pointer group backdrop-blur-sm border-2 border-[#8A2BE2] rounded-2xl p-6 text-center hover:bg-text-[#8A2BE2] transition-all duration-300 hover:scale-105">
            <img src="/icons/about-4.png" alt="icon" />
            <h3 className="font-bold lg:text-[20px]">Live Casino</h3>
            <p className="text-[12px] lg:text-[14px] opacity-60">Experience real-time action with live dealers for an immersive game.</p>
          </div>

        </div>
      </div>
    </section>
  );
}