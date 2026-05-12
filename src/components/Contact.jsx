import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="w-[94%] md:w-[90%] cursor-default mx-auto p-6 bg-white backdrop-blur-md rounded-2xl shadow-xl border border-gray-200">
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:false}}
          transition={{ duration: 0.8 }}
          className="text-2xl lg:text-5xl font-semibold mb-3 text-gray-800">Contact Me <span className="text-gray-400 font-normal">|</span>
          <span className="text-gray-500 text-sm font-normal ml-2">Let’s work together </span>
        </motion.p>
        <hr className="border-gray-200" />
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:false}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6">
            <p className="text-gray-500">
              Feel free to reach out if you have any questions,
              opportunities, or just want to connect.
            </p>
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm">
              <FaPhoneAlt className="text-green-500" />
              <span className="text-gray-700">+91 63796 70300</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm">
              <FaEnvelope className="text-cyan-500" />
              <span className="text-gray-700">thangavenkateshr@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm">
              <FaMapMarkerAlt className="text-red-500" />
              <span className="text-gray-700">Tirunelveli, India</span>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{once:false}}
            onSubmit={handleSubmit}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-5 shadow-lg">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" className="w-full bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" className="w-full bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Write your message..." className="w-full bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" ></textarea>
            </div>
            <button type="submit" className="w-full bg-linear-to-r from-cyan-500 to-blue-600 cursor-pointer text-white font-semibold py-2 rounded-lg hover:opacity-90 transition">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;