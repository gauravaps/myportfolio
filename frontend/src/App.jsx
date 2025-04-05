import './App.css';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Layout';
import About from './Components/About/About';
import Contactus from './Components/Contactus/Contactus';
import User from './Components/User/User';
import Courses from './Components/Course/Courses';
import Project from './Components/projects/Project';
import AddProject from './Components/projects/AddProject';

import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; 
import { LoggedInRoutes } from './routes/LoggedInRoutes ';
import NotLoggedInRoutes from './routes/NotLoggedInRoutes';
import AddCertificate from './Components/Course/AddCertificate';
 
      
function App() {
  return (
    <>
      <BrowserRouter>
    

        <ToastContainer 
          position="top-right" 
          autoClose={3000}    // Auto close in milliseconds (3 seconds here)
          hideProgressBar={false} // Show/Hide progress bar
          newestOnTop={false} // Show newest toast on top
          closeOnClick        // Close toast on click
          pauseOnHover        // Pause toast on hover
        />

        <Routes>
          <Route path="/" element={<Layout />}>

          
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/certificates" element={<Courses />} />
            <Route path="/user" element={<User />} />
            


            <Route element={<LoggedInRoutes/>}> 
            <Route   path="/addproject"  element= {<AddProject /> }/> 
            <Route path='/addcertificate' element={<AddCertificate/>}/>
            {/* <Route path='/editproject' element={<EditModal/>}/> */}
            
            </Route>
           
           
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;
