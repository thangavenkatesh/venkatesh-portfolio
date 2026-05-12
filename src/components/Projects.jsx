import { projects } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight, FaExternalLinkAlt, } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const project = projects[current];

  return (
    <section id="projects" className="w-full py-24 bg-gray-100 overflow-hidden">
      <div className="w-[95%] lg:w-[90%] mx-auto p-3 md:p-6 cursor-default bg-white backdrop-blur-md rounded-2xl shadow-xl border flex flex-col gap-3 md:gap-5 border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}>
          <p className="text-2xl lg:text-5xl font-semibold text-gray-800 tracking-tight">
            Projects <span className="font-normal text-gray-400"> | </span>
            <span className="text-gray-500 text-sm font-normal">Turn ideas into projects</span>
          </p>
        </motion.div>
        <hr className="border-gray-300 h-0.5" />
        <div className="hidden lg:grid grid-cols-3 gap-4">
          {projects.map((project,id)=>(<motion.div key={id} initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:0.6,delay:0.3*id}} className="shadow-[0px_0px_40px_rgba(0,0,0,0.08)] cursor-default flex flex-col justify-between pb-2 bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-3xl">
              <img className="rounded-t-3xl" src={project.image} alt="" />
              <div className="px-2 flex flex-col gap-2">
              <motion.p initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{once:false}}
                  className="text-xl md:text-2xl font-bold text-gray-800 mt-3">{project.projectName}</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{once:false}} className="flex flex-row gap-3">
              <p className="px-4 py-2 text-sm rounded-full bg-cyan-100 border border-cyan-200 text-cyan-600">{project.frame1}</p>
              <p className="px-4 py-2 text-sm rounded-full bg-cyan-100 border border-cyan-200 text-blue-600">{project.frame2}</p>
              </motion.div>
              <p>{project.content.substr(0,250)}...more</p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-row justify-between">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 md:px-6 md:py-3 px-3 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition duration-300 cursor-pointer shadow-lg shadow-cyan-500/20"><FaExternalLinkAlt />Live Preview</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 md:px-6 md:py-3 px-3 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105 transition duration-300 cursor-pointer"><FaGithub />View Code</a>
                </motion.div>
              </div>
          </motion.div>))}
        </div>
        <div className="relative flex lg:hidden">
          <button onClick={prevProject} className="flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full cursor-pointer bg-white/90 border border-gray-200 text-gray-700 backdrop-blur-md hover:scale-110 hover:bg-cyan-100 transition duration-300"><FaArrowLeft /></button>
          <button onClick={nextProject} className="flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full cursor-pointer bg-white/90 border border-gray-200 text-gray-700 backdrop-blur-md hover:scale-110 hover:bg-cyan-100 transition duration-300"><FaArrowRight /></button>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -40 }}
              viewport={{once:false}}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-3 bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-3xl overflow-hidden shadow-[0px_0px_40px_rgba(0,0,0,0.08)]">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                viewport={{once:false}}
                className="overflow-hidden">
                <img src={project.image} alt="project" className="w-full h-full object-cover lg:h-[500px]" />
              </motion.div>
              <div className="p-2 md:p-6 lg:p-10 flex justify-between flex-col gap-2 md:gap-0">
                <motion.h2
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{once:false}}
                  className="text-xl md:text-3xl font-bold text-gray-800">{project.projectName}</motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{once:false}}
                  className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 text-sm rounded-full bg-cyan-100 border border-cyan-200 cursor-pointer  text-cyan-600">{project.frame1}</span>
                  <span className="px-4 py-2 text-sm rounded-full bg-blue-100 border border-blue-200 cursor-pointer text-blue-600">{project.frame2}</span>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 mt-6 leading-7">{project.content}</motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-row justify-between">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 md:px-6 md:py-3 px-3 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20 cursor-pointer"><FaExternalLinkAlt />Live Preview</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 md:px-6 md:py-3 px-3 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105 transition duration-300 cursor-pointer"><FaGithub />View Code</a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;