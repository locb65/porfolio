import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { MoreInfo } from './pages/moreInfo';
import { NavBar } from './pages/Components/navBar';
import { Footer } from './pages/Components/footer';

function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-green-500 to-white' >
    <div>
      <NavBar/>
      <div className='flex flex-col h-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/more-info' element={<MoreInfo/>}/>
        </Routes>
        </div>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
