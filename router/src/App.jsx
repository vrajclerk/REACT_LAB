import {Route,Routes} from 'react-router-dom'
import './App.css'
import Navigation from './component/Navigation';
import TeacherLayout from './component/TeacherLayout';
import AdminLayout from './component/AdminLayout';


function App() {
 
  return (
    <>
      <div>
        <Navigation />
        <Routes>
        <Route element={<Navigation />} />  
          <Route path='/' element={<div>Home</div>} />
          <Route path='/home' element={<div>Home</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/*' element={<div>Not Found</div>} />
          <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<div>Teacher Overview</div>}></Route>
          {/* <Route path="/teacher/overview" element={<div>Teacher Overview</div>}></Route> */}
          <Route path="/teacher/subjects" element={<div>Teacher Subjects</div>}></Route>
          <Route path="/teacher/lectures" element={<div>Teacher Lectures</div>}></Route>
          <Route path="/teacher/plan" element={<div>Teacher Plan</div>}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<div>Admin Overview</div>}></Route>
          <Route path="/admin/overview" element={<div>Admin Overview</div>}></Route>
          <Route path="/admin/add-staff" element={<div>Add Staff</div>}></Route>
          <Route path="/admin/delete-staff" element={<div>Delete Staff</div>}></Route>
        </Route>
        </Routes>
      </div>
        
    </>
  )
}

export default App
