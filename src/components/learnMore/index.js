import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const LearnMore = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="w-full pb-20 overflow-hidden text-white/70 pt-36 homeFontNormal">
            <div className="flex flex-col items-center justify-center w-full py-3 gap-y-2">
                <div className="w-full lg:w-[96%] xl:w-[80%] pb-2 pt-3 px-3 lg:mt-4">
                    <div className="items-start w-full relative text-[25px] md:text-[35px] font-semibold text-white/90 capitalize">
                        🚀 *Why should you invest in Rabbit?* 🐇
                    </div>{" "}
                    {/* info */}
                    <div className=" w-full text-[14px] sm:text-[16px] md:text-lg  py-4">
                        <p
                            className=""
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-delay="100"
                        >
                            Simply put, we're not just another cryptocurrency.
                            We've built an ecosystem that keeps our currency
                            always flying to the moon! 🌕
                        </p>
                        <p
                            className="mt-3"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-delay="100"
                        >
                            Once you buy Rabbit, you start receiving daily
                            rewards in USDT at a rate of 6%. 💸 All you have to
                            do is hold it in your wallet. 🏦
                        </p>
                        <p
                            className="mt-3"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-delay="200"
                        >
                            And if you want to double your rewards, you can
                            purchase an NFT from our marketplace. 🎨 There are
                            several types of NFTs:
                        </p>
                        <ul class="list-disc ps-10 mt-3">
                            <li>NFT x2 doubles your rewards twice ✌️</li>
                            <li>NFT x3 triples them 💎</li>
                            <li>NFT x4 quadruples them 🎯</li>
                        </ul>
                        <p
                            className="mt-3"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-delay="300"
                        >
                            When you purchase an NFT, 60% goes to the rewards
                            wallet 💰, 20% is burned 🔥 (removed from the
                            available token supply, increasing its value 📈),
                            and the remaining 20% contributes to building the
                            Rabbit Life Taxi game 🚖.
                        </p>
                        <p
                            className="mt-3"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-delay="300"
                        >
                            This game will give our project value and make it
                            one of the top P2E currencies 🎮. NFT holders will
                            also receive a special NFT in the game, allowing
                            them to earn additional profits while enjoying the
                            gameplay 🕹️.
                        </p>
                        <p
                            className="mt-3"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-delay="300"
                        >
                            All you have to do is safely drive your customers to
                            their destinations 🏁 and earn more Rabbit tokens
                            🐇💰. You can even sell or rent out your car to
                            others and share the profits. 🤝
                        </p>
                        <p
                            className="mt-3"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-delay="300"
                        >
                            So, what are you waiting for? Join us today and tell
                            your friends! 💬 This could be your chance to own an
                            NFT with real utility! 🏆
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
