"use client";

export default function Footer() {
  return (
    <footer className="px-4 pt-5 lg:pt-20 pb-5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 lg:gap-4">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Top Section: Brand & Links */}
          <div className="col-span-1 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 lg:gap-10">
            {/* Brand Info */}
            <div className="max-w-lg">
              <a href="#"
                className="text-xl font-bold cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <img src="/icons/casino-logo.png" alt="logo" className="w-20 mb-2" /></a>
              <p className="text-[14px] text-gray-400 text-sm">
                Your premier destination for online casino entertainment. Play responsibly.</p>
              <p className="text-gray-500 text-xs mt-2">Visit us at: <span className="text-[#dda435]">casino</span></p>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-[#dda435] font-semibold mb-4">Quick Links</h2>
            <div className="space-y-2">
              <a href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} className="block text-gray-400 hover:text-[#DDA435] transition-colors text-sm">Home</a>
              <a href="#about-us" className="block text-gray-400 hover:text-[#DDA435] transition-colors text-sm">About Us</a>
              <a href="#top-casinos" className="block text-gray-400 hover:text-[#DDA435] transition-colors text-sm">Top Casinos</a>
              <a href="#terms" className="block text-gray-400 hover:text-[#DDA435] transition-colors text-sm">Terms & Conditions</a>
            </div>
          </div>

          <div className="col-span-1">
            <h2 className="text-[#dda435] font-semibold mb-4">Support</h2>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>24/7 Customer Support</p>
              <p>Email: support@top10royalcasino.co.uk</p>
              <p>Live Chat Available</p>
            </div>
          </div>

          <div className="col-span-1">
            <h2 className="text-[#dda435] font-semibold mb-4">Responsible Gaming</h2>
            <div className="space-y-2">
              <a href="https://www.gambleaware.org/" target="_blank" className="block text-gray-400 hover:text-[#DDA435] transition-colors text-sm">BeGambleAware.org</a>
              <a href="https://www.gamcare.org.uk/" target="_blank" className="block text-gray-400 hover:text-[#DDA435] transition-colors text-sm">GamCare.org.uk</a>
              <a href="https://gamblingtherapy.org/" target="_blank" className="block text-gray-400 hover:text-[#DDA435] transition-colors text-sm">GamblingTherapy.org</a>
              <a href="https://www.gamstop.co.uk/" target="_blank" className="block text-gray-400 hover:text-[#DDA435] transition-colors text-sm">GamStop.co.uk</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#DDA435]/20 mt-2"></div>

        <div className="flex flex-col gap-4 justify-center items-center ">
          <h2 className="text-[#dda435] font-semibold">Gambling Awareness & Support</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className=" bg-gray-800/80 flex items-center justify-center rounded-[12px] w-[140px] h-[60px]">
              <a href="https://www.begambleaware.org" target="_blank" className="h-[40px] w-[120px] flex items-center"> <img src="/icons/footer-logo-1.webp" className="object-contain" alt="footer-logo" /></a>
            </div>
            <div className=" bg-gray-800/80 flex items-center justify-center rounded-[12px] w-[140px] h-[60px]">
              <a href="https://www.begambleaware.org" target="_blank" className="h-[40px] w-[120px] flex items-center" > <img src="/icons/footer-logo-2.webp" className="object-contain" alt="footer-logo" /></a>
            </div>
            <div className=" bg-gray-800/80 flex items-center justify-center rounded-[12px] w-[140px] h-[60px]">
              <a href="https://www.begambleaware.org" target="_blank" className="h-[40px] w-[120px] flex items-center"> <img src="https://www.top10royalcasino.co.uk/grd.svg" className="object-contain" alt="footer-logo" /></a>
            </div>
            <div className=" bg-gray-800/80 flex items-center justify-center rounded-[12px] w-[140px] h-[60px]">
              <a href="https://www.begambleaware.org" target="_blank" className="h-[40px] w-[120px] flex items-center"> <img src="/icons/footer-logo-4.svg" className="object-contain" alt="footer-logo" /></a>
            </div>
            <div className=" bg-gray-800/80 flex items-center justify-center rounded-[12px] w-[140px] h-[60px]">
              <a href="https://www.begambleaware.org" target="_blank" className="h-[40px] w-[120px] flex items-center"> <img src="/icons/footer-logo-5.webp" className="object-contain" alt="footer-logo" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#DDA435]/20 mt-2"></div>

        <div className="bg-red-900/10 border border-red-500/30 rounded-lg p-4">
          <div className="text-center text-[14px]">
            <h4 className="text-red-400 font-bold text-lg mb-3">⚠️ IMPORTANT DISCLAIMER ⚠️</h4>
            <div className="text-black-300 text-sm space-y-2 leading-relaxed">
              <p><strong className="text-black">18+ ONLY. </strong>Gambling can be addictive. Please play responsibly.</p>
              <p>This website contains information about gambling and betting services. We do not provide gambling services directly.</p>
              <p>All casino operators listed are independently owned and operated. Please check local laws before gambling online.</p>
              <p><strong className="text-[#dda435] mt-3">If gambling is becoming a problem, seek help immediately.</strong></p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-gray-800/10 rounded-lg border border-gray-700/30">
            <div className="text-3xl mb-2">
              🔞
            </div>
            <h5 className="text-[#dda435] font-semibold mb-2 "> Age Verification</h5>
            <p className="text-gray text-xs">You must be 18 or over to use gambling services. Age verification checks are mandatory.</p>
          </div>

          <div className="text-center p-4 bg-gray-800/10 rounded-lg border border-gray-700/30">
            <div className="text-3xl mb-2">
              🛡️
            </div>
            <h5 className="text-[#dda435] font-semibold mb-2 ">Licensed Operators</h5>
            <p className="text-gray text-xs">All featured casinos are licensed by reputable gambling authorities and regulated.</p>
          </div>

          <div className="text-center p-4 bg-gray-800/10 rounded-lg border border-gray-700/30">
            <div className="text-3xl mb-2">
              🚫
            </div>
            <h5 className="text-[#dda435] font-semibold mb-2 ">Play Within Limits</h5>
            <p className="text-gray text-xs">Set deposit limits, take breaks, and never gamble more than you can afford to lose.</p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">© 2025 Casino. All rights reserved. This website is for informational purposes only.</p>
          <p className="text-gray-600 text-xs mt-2">Gambling can be harmful if not controlled. Please gamble responsibly and within your means.</p>
        </div>
      </div>
    </footer>
  );
}