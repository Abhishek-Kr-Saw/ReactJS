import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Product from './pages/Product'
import CourseDetail from './pages/CourseDetail'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Errorpage from './pages/Errorpage'
import Navbar2 from './components/Navbar2'

function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 /> 
      <Footer />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </ Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  )
}

export default App