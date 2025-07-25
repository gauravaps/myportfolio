import React from 'react';
import FooterSocialsIcons from '../Home/FooterSocialsIcons';
import './index.css';
import { Link, NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex flex-wrap items-start gap-12">
          {/* Text Section */}
          <div className="w-full md:w-6/12">
            <h2 className="heading">
              Hey! I'm <span className="highlight">Gaurav Patel</span>
              <br />
              and I'm a full stack engineer.
            </h2>
            <h2 className="text-2xl mt-5 text-gray-900 font-bold md:text-4xl">
              React development is carried out by{' '}
              <span className="highlight">passionate developers</span>
            </h2>
            <p className="description ">
              Hello! I'm Gaurav Patel, an <span className="highlight">MCA</span> graduate from Awadhesh Pratap Singh University, focused on
              building expertise in MERN and full-stack development for over two years. I have hands-on
              experience creating diverse projects, including a <span className='highlight'>Facebook</span>  clone and a comprehensive
             <span className='highlight'> eCommerce website</span> using the MERN stack. Driven to craft scalable, high-performance
              applications, I’m continually expanding my skill set to develop seamless, user-centric
              solutions.
            </p>
            <p className="description  mt-6 text-gray-600">
            i  have been rigorously preparing for a career in full-stack development for the past 1.5 years.
             I’ve successfully completed the Full Stack Web Development course from iNeuron.ai and 
             the MERN Stack course from Udemy, earning certifications and gaining expertise in technologies
              like JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL.
            
            </p>
            <p className='description'>
            During my journey, I’ve built several projects, including a weather app, a to-do list, and 
            a currency converter, honing my frontend and backend development skills. My knowledge
             extends to Linux and GitHub, making me proficient in version control and collaborative workflows.
              Web development excites me because it allows me to create impactful solutions, and I 
              strongly believe that every challenge can be overcome with determination and effort.
               Currently, I’m continuously refining my skills to contribute to the tech industry and 
               secure a role where I can make a difference.
            </p>
          </div>

         {/* Image Section */}
<div className="w-full md:w-5/12 flex flex-col items-center">
  <img
     src="https://res.cloudinary.com/gauravkacloud/image/upload/v1731759049/IMG20230327165354_zn8yks.jpg"
    alt="Startup"
    className="about-image sticky-image"
  />
  <FooterSocialsIcons />


</div>
         
        </div>

         
     </div>


      <h4 className="footer-heading text-center  py-10 ">

      <p className="business  py-8"> "Take your business or personal <span className="highlight" > portfolio </span>  
     to the next level with innovative web solutions! 
      I specialize in creating small-scale   websites, including static, dynamic, and <span className="highlight" >  MERN stack applications, </span>
      tailored for your shop,
        business promotion, or personal needs. Connect with me to bring your ideas to life!"

        <br />
          Whether you need a fast-loading landing page, a responsive e-commerce
          front, or a dynamic admin panel, I can build it using modern
          technologies. Every website I create is optimized for performance,
          mobile responsiveness, and clean UI/UX design. I also ensure
          SEO-friendly structure, so your site performs well in search engines.
          Let's collaborate and turn your concept into a fully functional
          website that adds real value to your brand or business!
        </p>

      <NavLink
        to="/contact"
        className="know-more-button "                    
    >
        &nbsp; Let's connect together!
    </NavLink>
        </h4>
    </div>
  );
};

export default About;
