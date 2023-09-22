import Navbar from './navbar.js'
import home from './pages/home.js';
import aboutMe from './pages/aboutMe.js';
import universityLife from './pages/universityLife.js';
import Experience from './pages/Experience.js';
import myGrades from './pages/myGrades.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return( 
  <>
    <Navbar/>
    <div className = "container">
      <Routes>
        <Route path = "/" element = {<home />} />
        <Route path = "/aboutMe" element = {<aboutMe />} />
        <Route path = "/universityLife" element = {<universityLife />} />
        <Route path = "/Experience" element = {<Experience />} />
        <Route path = "/myGrades" element = {<myGrades />} />
      </Routes>
    </div>
    
  </>
  
  )
}

export default App;
