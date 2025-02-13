import Features from './components/Features';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Banner from './components/Banner'
import Choose from './components/Choose';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "../src/pages/Home"
import Models from './pages/Models';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/models' element={<Models/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App;