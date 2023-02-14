import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
      <HashRouter>
        <NavBar/>
        <Footer/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutme/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
