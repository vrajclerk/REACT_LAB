import {Route,Routes} from 'react-router-dom'
import './App.css'
import Navigation from './component/Navigation';
import NavigationInformation from './component/NavigationInformation';
import Teacher from './component/Teacher';



function App() {
 
  return (
    <>
      <div>
        <Navigation />
        <NavigationInformation />
        <Routes>
        <Route element={<Navigation />} />  
          <Route path='/' element={<div>Home</div>} />
          <Route path='/home' element={<div>Home</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
          <Route path='/teacher/:teacherId' element={<div><Teacher /></div>} />
          <Route path='/feedback' element={<div>Feedback</div>} />
          <Route path="/*" element={<div>Not Found</div>} />
        
        </Routes>
      </div>
        
    </>
  )
}

export default App
