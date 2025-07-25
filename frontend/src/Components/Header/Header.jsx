import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import amazon from "../Header/amazon2.png";
import menu from "../Header/menu.png";
import logo1 from "../Header/logo1.webp"
import logo2 from "../Header/logo2.webp"
import logo3 from "../Header/logo3.webp"
import logo4 from "../Header/logo4.png"
import "./index.css";
 
const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const token = localStorage.getItem("token");

 

  useEffect(() => {
    const currentPath = location.pathname;
    console.log("real path --", location.pathname);
    setActiveLink(currentPath);
  }, [location]);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setIsDarkMode(true); // Dark mode enable
      document.documentElement.classList.add("dark-mode");
    } else {
      setIsDarkMode(false); // Light mode enable
      document.documentElement.classList.remove("dark-mode");
    }
  }, []);

  //Dark mode functionality here...
  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", newDarkMode);
  };


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };



  return (

    
    <div className="header-container">
      <header className="header shadow sticky z-50 top-0">
        <nav className="nav bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="nav-inner flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link
              to="/"
              className="logo-container flex items-center hover:scale-110"
              onClick={() => setActiveLink("Home")}
            >
              <img
                src={logo2}
                className="logo mr-3 h-14 hover:scale-110"
                alt="Logo"
              /> 
            </Link>

             {/* Hamburger Icon */}


               <button
              className="menu-toggle lg:hidden"
              onClick={toggleMenu} 
            >
              <img src={menu} alt="Menu" className="h-8 w-8" />
            </button>  





            <div className="auth-links  flex items-center lg:order-2">
              <label className=" relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onChange={handleToggle}
                  checked={isDarkMode}
                />

                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 mr-2 text-sm font-medium text-gray-900">
                  mode
                </span>
              </label>


              {token ? (
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token"); 
                    window.location.reload(); 
                  }}
                  className="get-started-link text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/user"
                  className="get-started-link text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Get started
                </Link>
              )}
            </div>


              






                       {/* Menu Links */}
            <div
              className={`nav-menu lg:flex ${
                isMenuOpen ? "block" : "hidden"
              } flex-col lg:flex-row lg:space-x-8`}
            >
              <ul className="menu-list flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
                <li className="menu-item">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `menu-link block py-2 pr-4 pl-3 duration-200 ${
                        isActive || activeLink === "Home"
                          ? "text-orange-700"
                          : "text-gray-700"
                      } hover:text-orange-700 hover:scale-110 lg:p-0`
                    }
                    onClick={() => {
                      setActiveLink("Home");
                      setIsMenuOpen(false); // Close menu on click
                    }}
                  >
                    Home
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/about"
                    end
                    className={({ isActive }) =>
                      `menu-link block py-2 pr-4 pl-3 duration-200 ${
                        isActive || activeLink === "about"
                          ? "text-orange-700"
                          : "text-gray-700"
                      } hover:text-orange-700 hover:scale-110 lg:p-0`
                    }
                    onClick={() => {
                      setActiveLink("about");
                      setIsMenuOpen(false);
                    }}
                  >
                    About
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/contact"
                    end
                    className={({ isActive }) =>
                      `menu-link block py-2 pr-4 pl-3 duration-200 ${
                        isActive || activeLink === "contact"
                          ? "text-orange-700"
                          : "text-gray-700"
                      } hover:text-orange-700 hover:scale-110 lg:p-0`
                    }
                    onClick={() => {
                      setActiveLink("contact");
                      setIsMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/projects"
                    end
                    className={({ isActive }) =>
                      `menu-link block py-2 pr-4 pl-3 duration-200 ${
                        isActive || activeLink === "projects"
                          ? "text-orange-700"
                          : "text-gray-700"
                      } hover:text-orange-700 hover:scale-110 lg:p-0`
                    }
                    onClick={() => {
                      setActiveLink("projects");
                      setIsMenuOpen(false);
                    }}
                  >
                    Projects
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/certificates"
                    end
                    className={({ isActive }) =>
                      `menu-link block py-2 pr-4 pl-3 duration-200 ${
                        isActive || activeLink === "course"
                          ? "text-orange-700"
                          : "text-gray-700"
                      } hover:text-orange-700 hover:scale-110 lg:p-0`
                    }
                    onClick={() => {
                      setActiveLink("course");
                      setIsMenuOpen(false);
                    }}
                  >
                    Certificate
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;