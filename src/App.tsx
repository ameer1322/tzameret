import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'
import StoneSuite from './pages/stone_suite/StoneSuite'
import WoodSuite from './pages/wood_suite/WoodSuite'
import Suite1_2 from './pages/suite_1_2/Suite1_2'
import Suite3 from './pages/suite_3/Suite3'
import ScrollToTop from './components/scroll_to_top/ScrollToTop'


function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stone-suite" element={<StoneSuite />} />
          <Route path="/wood-suite" element={<WoodSuite />} />
          <Route path="/suite1-2" element={<Suite1_2 />} />
          <Route path="/suite3" element={<Suite3 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
