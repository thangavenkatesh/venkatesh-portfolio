import { useState, createContext, useContext } from "react";

// Theme Context
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  // 🎨 Individual Component Colors
  const colors = dark
    ? {
        header: "bg-gray-800 text-white",
        home: "bg-gray-900 text-blue-400",
        about: "bg-gray-800 text-green-400",
        skills: "bg-gray-900 text-yellow-400",
        projects: "bg-gray-800 text-pink-400",
        contact: "bg-gray-900 text-purple-400",
      }
    : {
        header: "bg-blue-100 text-black",
        home: "bg-blue-50 text-blue-700",
        about: "bg-green-50 text-green-700",
        skills: "bg-yellow-50 text-yellow-700",
        projects: "bg-pink-50 text-pink-700",
        contact: "bg-purple-50 text-purple-700",
      };
        return (
    <ThemeContext.Provider value={{ dark, toggleTheme, colors }}>
      <div className="min-h-screen transition-all duration-300">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};