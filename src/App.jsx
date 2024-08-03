
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='experience' element={<Experience/>}/>
        <Route path='certificates' element={<Certificates/>}/>
        <Route path='skills' element={<Skills/>}/>
      </Route>
    </Routes>

      
    </>
  )
}

export default App
