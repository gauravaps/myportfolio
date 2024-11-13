import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import amazon from '../Header/amazon2.png';
import './index.css';

const Header = () => {
    const [activeLink, setActiveLink] = useState(""); // State to track active link
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            setIsDarkMode(true); // Dark mode enable
            document.documentElement.classList.add('dark-mode');
        } else {
            setIsDarkMode(false); // Light mode enable
            document.documentElement.classList.remove('dark-mode');
        }
    }, []);
    

    //Dark mode functionality here...
    const handleToggle = () => {
        const newDarkMode =!isDarkMode
        setIsDarkMode(newDarkMode);
        if (!isDarkMode) {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode' ,newDarkMode);
      };



    return (
        <div className="header-container">
            <header className="header shadow sticky z-50 top-0">
                <nav className="nav bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="nav-inner flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        
                        <Link to="/" className="logo-container flex items-center hover:scale-110" onClick={() => setActiveLink("Home")}>
                            <img src={amazon} className="logo mr-3 h-14 hover:scale-110" alt="Logo" />
                        </Link>
                        
                        <div className="auth-links flex items-center lg:order-2">

                        <label className="relative inline-flex items-center cursor-pointer">
                        
                        <input
                             type="checkbox"
                            value=""
                            className="sr-only peer"
                             onChange={handleToggle}
                            checked={isDarkMode}
                         />
                         
                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                         <span className="ml-3 mr-2 text-sm font-medium text-gray-900">Mode</span>
                     </label>

                            <Link
                                to="#"
                                className="get-started-link text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Get started
                            </Link>
                        </div>

                        <div className="nav-menu flex justify-between items-center w-full lg:w-auto lg:order-1">
                            <ul className="menu-list flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                
                                <li className="menu-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `menu-link block py-2 pr-4 pl-3 duration-200 ${isActive || activeLink === "Home" ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 hover:scale-110 lg:p-0`
                                        }
                                        onClick={() => setActiveLink("Home")}
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li className="menu-item">
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `menu-link block py-2 pr-4 pl-3 duration-200 ${isActive || activeLink === "About" ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 hover:scale-110 lg:p-0`
                                        }
                                        onClick={() => setActiveLink("About")}
                                    >
                                        About
                                    </NavLink>
                                </li>

                                <li className="menu-item">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `menu-link block py-2 pr-4 pl-3 duration-200 ${isActive || activeLink === "Contact Us" ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 hover:scale-110 lg:p-0`
                                        }
                                        onClick={() => setActiveLink("Contact Us")}
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>

                                <li className="menu-item">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `menu-link block py-2 pr-4 pl-3 duration-200 ${isActive || activeLink === "Contact Us" ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 hover:scale-110 lg:p-0`
                                        }
                                        onClick={() => setActiveLink("Contact Us")}
                                    >
                                        projects
                                    </NavLink>
                                </li>

                                

                                <li className="menu-item">
                                    <NavLink
                                        to="/course"
                                        className={({ isActive }) =>
                                            `menu-link block py-2 pr-4 pl-3 duration-200 ${isActive || activeLink === "course" ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 hover:scale-110 lg:p-0`
                                        }
                                        onClick={() => setActiveLink("course")}
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
