import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTo = (id) => {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setShow(false);

  };

  return (
    <>
      <div className={`fixed z-50 flex items-center justify-between transition-all duration-300 cursor-default backdrop-blur-xl border border-gray-200 shadow-2xl bg-white/80
        ${scrolled
          ? "w-full top-0 rounded-none px-6 py-2 md:py-3"
          : "w-[90%] left-[5%] top-5 rounded-full px-6 py-2 md:py-3"
        }`}>
        <motion.h1
          initial={{ opacity: 0, y: -40, }}
          animate={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.5, }}
          className="text-lg md:text-xl lg:text-2xl font-black text-gray-800 tracking-wide">
          <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">THANGA VENKATESH</span>
        </motion.h1>
        <nav className="hidden lg:flex gap-4 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full shadow-lg">
          {["home", "about", "skills", "projects", "contact"].map(
            (item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -30, }}
                animate={{ opacity: 1, y: 0, }}
                viewport={{once:false}}
                transition={{ duration: 0.4 + i * 0.2, }}
                onClick={() => scrollTo(item)}
                className="cursor-pointer capitalize px-4 py-2 text-gray-600  hover:bg-linear-to-r from-white to-gray-50 rounded-full transition duration-300">{item}</motion.span>
            )
          )}
        </nav>
        <div className="lg:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setShow(!show)}>
          <div className="w-5 h-1 rounded-full bg-gray-700"></div>
          <div className="w-5 h-1 rounded-full bg-gray-700"></div>
          <div className="w-5 h-1 rounded-full bg-gray-700"></div>
        </div>
      </div>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -40, }}
          animate={{ opacity: 1, y: 0, }}
          viewport={{once:false}}
          transition={{ duration: 0.4, }}
          className="lg:hidden fixed top-20 w-[90%] left-[5%] p-2 bg-white/95 backdrop-blur-xl border border-gray-200 text-gray-800 shadow-2xl rounded-2xl  z-50">
            <p className="font-bold text-xl text-end" onClick={()=>setShow(false)}>X</p>
            <div className="gap-5 py-6 flex flex-col items-center">
          {["home", "about", "skills", "projects", "contact"].map(
            (item, i) => (
              <span key={i} onClick={() => scrollTo(item)} className="cursor-pointer capitalize text-lg text-gray-600 hover:text-cyan-600 transition duration-300">{item}</span>
            )
          )}
          </div>
        </motion.div>
      )}
    </>
  );
};
export default Header;