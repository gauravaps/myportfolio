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
import ProtectedRoute from './Components/User/ProtectedRoute';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; 


function App() {
  return (
    <>
      <BrowserRouter>
        {/* Insert RemoveAdminOnNavigation inside the BrowserRouter */}
        <RemoveAdminOnNavigation />

        <ToastContainer 
          position="top-right" // Position of Toast (e.g., top-right, bottom-left)
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
            <Route path="/course" element={<Courses />} />
            <Route path="/user" element={<User />} />
            <Route
              path="/addproject"
              element={
                <ProtectedRoute>
                  <AddProject />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Add the RemoveAdminOnNavigation Component
function RemoveAdminOnNavigation() {
  const location = useLocation(); 

  useEffect(() => {
 
    if (location.pathname !== '/addproject') {
        
      localStorage.removeItem('isAdmin');
    }
  }, [location]); 

  return null; 
}


export default App;
