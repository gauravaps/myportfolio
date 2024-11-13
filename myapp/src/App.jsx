
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Layout from './Layout'
import About from './Components/About/About'
import Contactus from './Components/Contactus/Contactus'
import User from './Components/User/User'
import Github from './Components/Github/Github'
import Courses from './Components/Course/Courses'


function App() {
  const user ='gaurav';

  return (
  <>
    
      <BrowserRouter>
     <Routes> 
        <Route path='/' element={<Layout/>}>

          <Route path='' element={<Home/>} />

          <Route path='/about' element={<About/>}/>
          
          
          

          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/user/:id' element={<User/>}/>
          <Route path='/course' element={<Courses/>}/>
          <Route path='git' element={<Github/>}/>
          
          </Route> 
        </Routes>
 
       
      
      </BrowserRouter>

    </>
  )
}

export default App
