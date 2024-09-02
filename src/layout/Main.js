import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { IoIosArrowUp } from "react-icons/io";

const Main = props => {
	const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
	return (
		<>
		<div className="w-full text-white/90 min-h-[100vh] bg-[#1d0729]">
		{showArrow && (
            <a href="#">
              <IoIosArrowUp
                size={35}
                type="button"
                className="p-1 cursor-pointer  z-20 rounded-xl hidden lg:inline-block fixed bottom-8 right-8 bg-[#e647bf] text-white shadow shadow-[#e647bf]"
              />
            </a>
          )}
			<Header/>
			{props.children}
			<Footer/>
		</div>
		</>
	);
};

export default Main;
