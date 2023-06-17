import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';

function App() {
  return (
    <div class="h-screen w-screen bg-gradient-to-b from-green-500 to-white" >
    <div >
      <p className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-gray-700 fond-bold mb-5">Welcome to my Portfolio</p>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>

    </div>
    </div>
  );
}

export default App;
