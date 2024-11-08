import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>   
    </div>
  );
}

export default App;
 