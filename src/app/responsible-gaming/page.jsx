
export default function ResponsibleGaming() {
    return (
        <section className="px-4 py-5 lg:py-10">
            <div className="max-w-6xl mx-auto flex flex-col">
                <h2 className="text-[24px] lg:text-[48px] font-bold glow-text text-center mb-3 lg:mb-5">
                    Responsible Gaming
                </h2>
                <p className=" text-base lg:text-xl text-black leading-relaxed mb-3 lg:mb-6">
                    We're committed to providing a safe and enjoyable gaming environment. Use our tools and resources to stay in control of your gaming.
                </p>

                <div className="mb-6 lg:mb-12 p-3 lg:p-6 bg-green-600/10 border border-green-600 rounded-lg">
                    <h2 className=" text-base lg:text-2xl font-bold text-green-400 mb-2">Gaming Should Be Fun</h2>
                    <p className="text-black text-sm lg:text-base">Gambling should be an entertaining activity, not a way to make money or solve financial problems. If gambling stops being fun, it's time to take a break. We're here to help you maintain control.</p>
                </div>

                <div className="">
                    <h2 className="text-3xl font-bold text-center mb-8">Tips for Safe Gaming</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="rounded-xl border border-[#FFD700] bg-[#300832] p-3 lg:p-6 text-center">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-lg font-bold mb-2 text-white">Set a Budget</h3>
                            <p className="text-gray-400 text-sm">Only gamble with money you can afford to lose. Never chase losses.</p>
                        </div>
                        
                        <div className="rounded-xl border border-[#FFD700] bg-[#300832] p-3 lg:p-6 text-center">
                            <div className="text-4xl mb-4">⏰</div>
                            <h3 className="text-lg font-bold mb-2 text-white">Set Time Limits</h3>
                            <p className="text-gray-400 text-sm">Decide how long you'll play before you start and stick to it.</p>
                        </div>
                        
                        <div className="rounded-xl border border-[#FFD700] bg-[#300832] p-3 lg:p-6 text-center">
                            <div className="text-4xl mb-4">🚫</div>
                            <h3 className="text-lg font-bold mb-2 text-white">Don't Chase Losses</h3>
                            <p className="text-gray-400 text-sm">Accept losses as part of the game. Don't try to win back money.</p>
                        </div>
                        
                        <div className="rounded-xl border border-[#FFD700] bg-[#300832] p-3 lg:p-6 text-center">
                            <div className="text-4xl mb-4">🍺</div>
                            <h3 className="text-lg font-bold mb-2 text-white">Avoid Alcohol</h3>
                            <p className="text-gray-400 text-sm">Don't gamble when under the influence of alcohol or drugs.</p>
                        </div>
                        
                        <div className="rounded-xl border border-[#FFD700] bg-[#300832] p-3 lg:p-6 text-center">
                            <div className="text-4xl mb-4">⚖️</div>
                            <h3 className="text-lg font-bold mb-2 text-white">Keep Balance</h3>
                            <p className="text-gray-400 text-sm">Maintain other interests and activities outside of gambling.</p>
                        </div>
                        
                        <div className="rounded-xl border border-[#FFD700] bg-[#300832] p-3 lg:p-6 text-center">
                            <div className="text-4xl mb-4">👥</div>
                            <h3 className="text-lg font-bold mb-2 text-white">Talk to Someone</h3>
                            <p className="text-gray-400 text-sm">Share your concerns with friends, family, or professional counselors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
