import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App flex-auto mx-auto bg-blue-50 rounded-xl">
      <p className="text-8xl text-gray-700 fond-bolder mb-5">Welcome</p>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
