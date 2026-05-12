import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-200 bg-white cursor-default">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-lg font-black tracking-[3px] text-gray-800">
          <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">THANGA</span>{" "}VENKATESH</h2>
        <div className="flex items-center gap-5 text-xl">         
          <a href="https://github.com/thangavenkatesh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition duration-300 hover:-translate-y-1"><FaGithub /></a>
          <a  href="https://www.linkedin.com/in/thanga-venkatesh-410039314/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-gray-100 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 hover:-translate-y-1"><FaLinkedin /></a>
          <a href="https://www.instagram.com/venky_web_design/?hl=en" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-gray-100 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 hover:-translate-y-1"><FaInstagram /></a>
        </div>
        <p className="text-sm text-gray-500">© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;