import Navbar from './navbar.js'
// eslint-disable-next-line no-unused-vars
import Home from './pages/home.js';
import AboutMe from './pages/AboutMe.js';
import UniversityLife from './pages/universityLife.js';
import Experience from './pages/Experience.js';
import MyGrades from './pages/myGrades.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return( 
  <>
    <Navbar/>
    <div className = "container">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/aboutMe" element = {<AboutMe />} />
        <Route path = "/universityLife" element = {<UniversityLife />} />
        <Route path = "/Experience" element = {<Experience />} />
        <Route path = "/myGrades" element = {<MyGrades />} />
      </Routes>
    </div>
    
  </>
  
  )
}

export default App;
