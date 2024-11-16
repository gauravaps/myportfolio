import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import FooterSocialsIcons from "./FooterSocialsIcons";
import './footer.css';

const Home = () => {
    const [showFirstImage, setShowFirstImage] = useState(true);

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
                <Link className="download-button" to="/about">
                    Download Resume
                </Link>


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

        {/* Know Me More Button - This goes below images */}
        <h4 className="footer-heading text-left text-2xl py-10 ">
        <Link
            className="know-more-button i"
            to="about"
        >
            &nbsp; Know me more!
        </Link>
        </h4>

            </div>  

            


        </div>
    );
};

export default Home;
