import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center bg-blue-50 rounded-xl h-screen w-screen">
      <p className="text-8xl text-gray-700 fond-bolder mb-5">Welcome to my Portfolio</p>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
