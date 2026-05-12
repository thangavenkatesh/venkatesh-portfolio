import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = () => {
  const [views, setViews] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setViews((prev) => {
        if (prev >= 90) {
          return 10; // restart again
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between flex-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">1+</h1>
        <p className="text-slate-400 text-sm mt-1">Year Experience</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{views}+k</h1>
        <p className="text-slate-400 text-sm mt-1">Portfolio Views</p>
      </motion.div>
    </div>
  );
};

export default Counter;