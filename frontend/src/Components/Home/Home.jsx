import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Skills from "./Skills";
import FooterSocialsIcons from "./FooterSocialsIcons";
import './footer.css';
import Sdata from "../../Sdata";

const Home = () => {
    const [showFirstImage, setShowFirstImage] = useState(true);
    const [activeLink, setActiveLink] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstImage((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            {/* Left side - Image and Footer icons */}
            <div className="image-container">
                {showFirstImage ? (
                    <img
                        src="https://res.cloudinary.com/gauravkacloud/image/upload/v1730367002/pexels-mikhail-nilov-7988114_yjgmbz.jpg"
                        alt="Illustration 1"
                    />
                ) : (
                    <img
                        src="https://res.cloudinary.com/gauravkacloud/image/upload/v1730366508/pexels-olia-danilevich-4974922_mrhqpn.jpg"
                        alt="Illustration 2"
                    />
                )}
                <FooterSocialsIcons /> {/* Icons yaha specific position me rahenge */}
            </div>

            {/* Right side - Text content */}
            <div className="text-content">
                <h2 className="heading">
                    Hey! welcome I'm <span className="highlight">Gaurav Patel</span>
                    <br />
                    and I'm a full stack engineer.
                </h2>
                <p className="description">
                    Hello! I'm Gaurav Patel, an MCA graduate from Awadhesh Pratap Singh University, focused on building expertise in MERN and full-stack development for over two years. I have hands-on experience creating diverse projects, including a Facebook clone and a comprehensive eCommerce website using the MERN stack. Driven to craft scalable, high-performance applications, I’m continually expanding my skill set to develop seamless, user-centric solutions.
                </p>
                <Skills />

                {/* Updated Resume Button */}
                <a
                    className="download-button "
                    href="/gaurav_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Download Resume
                </a>


                {/* Toggling Images - This goes below Download Resume button */}
        <div className="images-section flex justify-start mb-6  mt-6 " >               
        {showFirstImage ? (
            <img
                className="illustration w-80 md:w-96"
                src="https://res.cloudinary.com/gauravkacloud/image/upload/v1730367002/pexels-mikhail-nilov-7988114_yjgmbz.jpg"
                alt="Illustration 1"
            />
        ) : (
            <img
                className="illustration w-80 md:w-96"
                src="https://res.cloudinary.com/gauravkacloud/image/upload/v1730366508/pexels-olia-danilevich-4974922_mrhqpn.jpg"
                alt="Illustration 2"
            />
        )}
        </div>

            <p className="text-left text-lg py-7"> "Take your business or personal <span className="highlight" > portfolio</span>  to the next level with innovative web solutions! 
                I specialize in creating small-scale <span className="highlight">  websites, including static, dynamic, and MERN stack applications,</span>
                 tailored for your shop,
                 business promotion, or personal needs. Connect with me to bring your ideas to life!"
                 </p>

        <h4 className="footer-heading text-left  py-10 ">
        <NavLink
                 to="/about"
            className= "know-more-button "
            >
            &nbsp; Know me more!
            </NavLink>
        </h4>
            </div>  

        </div>
    );
};

export default Home;
