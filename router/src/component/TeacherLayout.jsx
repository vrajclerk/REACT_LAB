//import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherNavigation from './TeacherNavigation'

const TeacherLayout = () => {
  return (
    <div>
      <TeacherNavigation />
       <Outlet /> {/*The Outlet component is used to render the child routes of the current route. */}
    </div>
  )
}

export default TeacherLayout;