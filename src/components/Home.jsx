import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const roles = ["Full-Stack Developer"];

  const [displayText, setDisplayText] = useState("");
  const [index, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[0];

    let speed = isDeleting ? 100 : 120;

    const timeOut = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, index + 1));
        setTextIndex(index + 1);

        if (index + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(current.substring(0, index - 1));
        setTextIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeOut);
  }, [index, isDeleting]);

  const scrollTo = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-3">
      <div className="w-full cursor-default max-w-7xl mt-20 md:mt-16 rounded-2xl flex flex-col-reverse md:flex-row items-center justify-between py-5 px-5 md:px-5 shadow-2xl backdrop-blur-md bg-white md:border-0 border border-gray-200">
        <div className="flex flex-col gap-3 md:gap-6 md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit mx-auto lg:mx-0 items-center gap-2 px-4 py-2 rounded-full border border-cyan-200 bg-cyan-100 text-cyan-600 text-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Available For Work
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-lg">Hello There</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl lg:text-6xl font-bold leading-tight text-gray-800">I'm{" "}
            <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Thanga Venkatesh</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl sm:text-3xl lg:text-5xl font-semibold text-gray-700">And I'm a{" "}
            <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">{displayText}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-500 max-w-xl">
            I build responsive, scalable, and high-quality full-stack web
            applications using the MERN stack (MongoDB, Express.js, React,
            and Node.js). I develop both frontend and backend systems,
            including RESTful APIs, authentication, and database management.
            I enjoy transforming ideas into complete, functional products
            with clean, maintainable code and seamless user experiences.
          </motion.p>
          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <motion.button
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="border border-cyan-500 text-cyan-600 px-3 md:px-6 py-2 rounded-full font-semibold hover:bg-linear-to-r from-cyan-500 to-blue-600 hover:text-white transition duration-300 cursor-pointer" onClick={() => scrollTo("contact")}>Get in Touch</motion.button>
            <a href="/Thanga_venkatesh_resume.pdf"><motion.button
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="border border-purple-400 text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-linear-to-r hover:border-purple-400 from-purple-500 to-pink-500 hover:text-white transition duration-300 cursor-pointer">Download CV</motion.button></a>
          </div>
          <div className="flex gap-5 text-2xl mt-2 justify-center md:justify-start text-gray-500">
            <motion.a href="https://github.com/thangavenkatesh" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2 }} className="hover:text-black transition"><FaGithub /></motion.a>
            <motion.a href="https://www.linkedin.com/in/thanga-venkatesh-410039314/" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2 }} className="hover:text-blue-500 transition"><FaLinkedin /></motion.a>
            <motion.a href="https://www.instagram.com/venky_web_design/?hl=en" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2 }} className="hover:text-pink-500 transition"><FaInstagram /></motion.a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 md:mb-0">
          <img src={assets.gif} alt="profile" className="w-[260px] sm:w-[320px] md:w-[400px] object-contain drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;