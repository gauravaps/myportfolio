import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import amazon from '../Header/amazon2.png';

const Header = () => {
    const [activeLink, setActiveLink] = useState(""); // State to track active link
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="header-container">
            <header className="header shadow sticky z-50 top-0">
                <nav className="nav bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="nav-inner flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        
                        <Link to="/" className="logo-container flex items-center hover:scale-110" onClick={() => setActiveLink("Home")}>
                            <img src={amazon} className="logo mr-3 h-14 hover:scale-110" alt="Logo" />
                        </Link>
                        
                        <div className="auth-links flex items-center lg:order-2">
                            <Link
                                to="#"
                                className="login-link text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
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

                                {/* Projects Dropdown */}
                                <li className={`menu-item projects-dropdown relative group ${activeLink === "Projects" ? "text-orange-700" : "text-gray-700"}`}
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <button
                                        className="projects-button flex items-center py-2 pr-4 pl-3 hover:text-orange-700 hover:scale-110 focus:outline-none lg:p-0"
                                        onClick={() => {
                                            setActiveLink("Projects");
                                            setIsDropdownOpen(!isDropdownOpen);
                                        }}
                                    >
                                        Projects
                                    </button>
                                    <ul
                                        className={`projects-menu absolute bg-white shadow-lg mt-2 rounded-lg transition-all duration-300 ${
                                            isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                        }`}
                                    >
                                        <li className="project-item">
                                            <NavLink
                                                to="/facebook"
                                                className="project-link block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                onClick={() => setActiveLink("Projects")}
                                            >
                                                Facebook
                                            </NavLink>
                                        </li>
                                        <li className="project-item">
                                            <NavLink
                                                to="/ecommerce"
                                                className="project-link block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                onClick={() => setActiveLink("Projects")}
                                            >
                                                Ecommerce
                                            </NavLink>
                                        </li>
                                    </ul>
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
