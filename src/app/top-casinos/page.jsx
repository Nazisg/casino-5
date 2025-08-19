import Card from "@/components/Card";
import { casinos } from "@/data/casinos";

export default function TopCasinos() {
    return (
        <section id="top-casinos" className="min-h-screen py-10 px-4">
            <h2 className="text-[24px] lg:text-[48px] font-bold glow-text text-center text-[#8A2BE2]">Top Rated Online Casinos</h2>
            <p className="text-[#000] opacity-40 text-[16px] lg:text-[20px] text-center">Handpicked selection of the best online casinos with exclusive bonuses and verified reviews</p>
            <div className="max-w-7xl mx-auto flex flex-col gap-10 mt-4 lg:mt-8">
                {/* Cards */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-4">
                    {casinos.map((casino, index) => (
                        <Card key={index} {...casino} />
                    ))}
                </div>
            </div>
        </section>
    );
}