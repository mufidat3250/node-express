import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SinglePage from './pages/singlePage'

function App() {
  
return (
    <div className='app'> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      <Route path='/:id' element={<SinglePage/>}/>
      </Routes>
    </div>
  )
}

export default App
