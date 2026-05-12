import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import Counter from "./Counter"
import { FaReact, FaNodeJs, FaDatabase, FaCode, } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full py-28 bg-gray-100 overflow-hidden">
      <div className="flex flex-col bg-linear-to-br from-white via-gray-50 to-gray-100 cursor-default backdrop-blur-md shadow-2xl w-[94%] md:w-[90%] mx-auto p-2 md:p-4 pb-6 rounded-3xl border border-gray-200">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-semibold mb-2 text-gray-900"
        >About me{" "}<span className="text-gray-400 font-normal">|</span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-gray-500 text-sm font-normal ml-2">Full-Stack Developer</motion.span>
        </motion.p>
        <hr className="border-gray-300" />
        <div className="w-full flex flex-col lg:flex-row gap-3 justify-between items-stretch mt-8">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[30%]">
            <div className="h-full bg-linear-to-br from-gray-50 to-white rounded-3xl border border-gray-200 shadow-2xl p-2 md:p-4 flex flex-col md:flex-row lg:flex-col justify-between">
              <img className="w-full md:w-[45%] lg:w-full object-contain  rounded-3xl" src={assets.me} alt="profile" />
              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 w-full md:w-[45%] lg:w-full gap-3 mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-2xl p-4 text-center">
                  <p className="text-2xl md:text-8xl lg:text-2xl font-bold text-cyan-500">10+</p>
                  <p className="text-xs md:text-2xl lg:text-xs text-gray-500 mt-1">Technologies</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.7 }}
                  className="bg-white border border-gray-200 rounded-2xl p-4 text-center">
                  <p className="text-2xl md:text-8xl lg:text-2xl font-bold text-pink-500">5+</p>
                  <p className="text-xs md:text-2xl lg:text-xs text-gray-500 mt-1">Projects</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[38%]">
            <div className="h-full bg-linear-to-br from-gray-50 to-white text-gray-700 p-5 md:p-6 flex flex-col justify-between rounded-3xl shadow-2xl border border-gray-200">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-500 text-xl border border-cyan-200">
                    <FaCode />
                  </div>
                  <div>
                    <h2 className="text-gray-900 text-xl font-semibold">MERN Stack Developer</h2>
                    <p className="text-gray-500 text-sm">Full-Stack Web Development</p>
                  </div>
                </div>
                <p className="leading-8 text-[15px] text-gray-700">
                  I’m a passionate MERN Stack Developer focused on building
                  responsive, scalable, and modern web applications using
                  MongoDB, Express.js, React.js, and Node.js. I enjoy creating
                  clean user interfaces, developing secure REST APIs, and
                  integrating databases to deliver smooth and efficient user
                  experiences. I continuously improve my skills by building
                  real-world full-stack applications and exploring modern
                  technologies.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-2xl p-4">
                  <FaReact className="text-cyan-500 text-2xl mb-2" />
                  <p className="text-gray-900 text-sm">Frontend</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.7 }}
                  className="bg-white border border-gray-200 rounded-2xl p-4">
                  <FaNodeJs className="text-green-500 text-2xl mb-2" />
                  <p className="text-gray-900 text-sm">Backend</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.9 }}
                  className="bg-white border border-gray-200 rounded-2xl p-4">
                  <FaDatabase className="text-yellow-500 text-2xl mb-2" />
                  <p className="text-gray-900 text-sm">Database</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 1.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-4">
                  <FaCode className="text-pink-500 text-2xl mb-2" />
                  <p className="text-gray-900 text-sm">Clean Code</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[30%]">
            <div className="h-full bg-linear-to-br from-gray-50 to-white text-gray-700 shadow-2xl p-5 rounded-3xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-500">🎓</div>
                  <div>
                    <p className="text-gray-900 text-lg font-semibold">Education</p>
                    <p className="text-gray-500 text-sm">Academic Info</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-900">B.Sc Computer Science</p>
                    <p className="text-gray-500 text-sm mt-1">2022 - 2025</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="text-cyan-500">Einstein College of Arts and Science</p>
                    <p className="text-gray-500 text-sm mt-1">Tirunelveli</p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1 }}
                className="mt-5">
                <Counter />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
