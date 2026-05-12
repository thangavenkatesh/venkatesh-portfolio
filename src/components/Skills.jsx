import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiNodedotjs, SiPostman, SiTailwindcss, SiVercel, } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {

  const skillSet1 = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { id: 4, name: "React JS", icon: <FaReact className="text-cyan-400" /> },
    { id: 5, name: "React-Native", icon: <FaReact className="text-cyan-400" /> },
    { id: 6, name: "Tailwind-css", icon: <SiTailwindcss className="text-sky-400" /> },
  ];

  const skillSet2 = [
    { id: 1, name: "Node JS", icon: <SiNodedotjs className="text-green-500" /> },
    { id: 2, name: "Express JS", icon: <SiExpress className="text-gray-700" /> },
    { id: 3, name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { id: 4, name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  ];

  const tools = [
    { id: 1, name: "Github", icon: <FaGithub /> },
    { id: 2, name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { id: 3, name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { id: 4, name: "Vercel", icon: <SiVercel /> },
    {
      id: 5,
      name: "Thunder Client",
      icon: <span className="text-yellow-500 font-bold">⚡</span>,
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-100 overflow-hidden">
      <div className="w-[94%] md:w-[90%] mx-auto p-3 cursor-default  md:p-6 bg-white backdrop-blur-md rounded-2xl shadow-xl border border-gray-200">
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-2xl lg:text-5xl font-semibold mb-3 text-gray-900">Skills & Experience{" "}
          <span className="text-gray-400 font-normal">|</span>
          <span className="text-gray-500 text-sm font-normal ml-2">Technologies I Work With</span>
        </motion.p>
        <hr className="border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between mt-6 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[40%]">
            <p className="text-gray-900 font-bold text-xl">Technical Skills</p>
            <hr className="h-0.5 bg-gray-300 mt-2 border-none" />
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="mt-6 p-5 rounded-2xl bg-gray-50 backdrop-blur-md border border-gray-200 shadow-lg">
              <p className="text-lg font-semibold text-gray-900 mb-3">Front-End</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {skillSet1.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex items-center justify-between px-2 md:px-3 py-2 cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300">
                    <span className="text-gray-700 text-sm">{skill.name}</span>
                    <span className="text-lg">{skill.icon}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="mt-6 p-5 rounded-2xl bg-gray-50 backdrop-blur-md border border-gray-200 shadow-lg">
              <p className="text-lg font-semibold text-gray-900 mb-3">Back-End</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {skillSet2.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex items-center justify-between px-2 md:px-3 cursor-pointer py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300" >
                    <span className="text-gray-700 text-sm">{skill.name}</span>
                    <span className="text-lg">{skill.icon}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9 }}
              className="mt-6 p-5 rounded-2xl bg-gray-50 backdrop-blur-md border border-gray-200 shadow-lg">
              <p className="text-lg font-semibold text-gray-900 mb-3">Tools</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex items-center justify-between px-2 md:px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300 cursor-pointer">
                    <span className="text-gray-700 text-sm">{tool.name}</span>
                    <span className="text-gray-900 text-lg">{tool.icon}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[50%] mt-10 lg:mt-0 flex flex-col">
            <p className="text-gray-900 font-bold text-xl">Certifications and Experience</p>
            <hr className="h-0.5 bg-gray-300 mt-2 border-none" />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9 }}
              className="mt-5 p-4 rounded-2xl bg-gray-50 backdrop-blur-md border border-gray-200 shadow-lg flex flex-col gap-2">
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="text-gray-900 bg-white border border-gray-200 py-24 text-center text-xl font-semibold rounded-2xl">MERN-Stack Certification</motion.p>
              <p className="text-gray-900 font-semibold text-lg">MERN-Stack Web Development Certification</p>
              <p className="text-[13px] text-gray-500">2026</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Successfully completed a comprehensive MERN Stack certification
                program covering MongoDB, Express.js, React.js, and Node.js.
                Gained hands-on experience in building scalable full-stack
                applications with REST APIs, authentication systems,
                responsive UI development, and database integration.
              </p>
              <ul className="list-disc ml-5 mt-3 text-sm space-y-1 text-gray-600">
                <li>Built responsive full-stack MERN applications</li>
                <li>Implemented authentication & authorization systems</li>
                <li>Created RESTful APIs using Express.js</li>
                <li>Integrated MongoDB for database management</li>
                <li>Worked with Git, Github & deployment platforms</li>
              </ul>
              <a href="/mern_stack_certification.pdf" target="_blank" className="inline-block mt-4 text-cyan-600 text-sm font-medium hover:underline">View Certificate →</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;