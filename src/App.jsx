import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Contact from './components/contact/Contact';
// import {BsArrowUpCircle} from "react-icons/bs"
function App() {
  return (
    <>
      <Navbar className="nav"/>
        <div className='main'>
          <img src = "back.jpg" className="background" alt="jaefja"/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              {/* <Route path="*" element={<Error/>}/> */}
              {/* <Route path='/contact'><Contact/></Route> */}
            </Routes>
          </BrowserRouter>
          {/* <button className='top'><BsArrowUpCircle/>Reach To Top</button> */}
      </div>
    </>
  );
}

export default App;
