
import './App.css';
import Header from  './Header';
import  './Header.css';
import './Productcard.css';
import Productcard from './Productcard';
import Home from './Home';
import './Home.css';
import Footer from './Footer';
import './Footer.css';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
function App() {
  return (



    <div nav="App">
  <Router> 
                <Routes>
                   <Route path="/*" element={
                    <>
                      <Header/> 
                      <Routes>
                           <Route path='/' element={<Home/>}/>
                           <Route path='/services' element={<services/>}/>
                           <Route path='/about' element={<aboutUs/>}/>
                            <Route path='/login' element={<login/>}/>
                            <Route path='/signup' element={<signup/>}/>
                      </Routes>
                    </>
                   } />  
                </Routes>
            </Router>
     <div className='home-container'>
    
     </div>
      <Footer/>
    </div>
  );
}

export default App;
