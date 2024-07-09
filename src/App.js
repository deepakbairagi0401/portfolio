import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './Media.css'
import Home from './component/Home';
import NavBar from './component/NavBar.jsx';
import About from './component/About.jsx';
import Project from './component/Project.jsx';
import Contact from './component/Contact.jsx';
 
function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
