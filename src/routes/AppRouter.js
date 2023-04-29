import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../components/templates/PublicLayout/PublicLayout'
import PrivateLayout from '../components/templates/PrivateLayout/PrivateLayout'
import HomePage from '../components/pages/HomePage/HomePage'
import Students from '../components/pages/Students/Students'
import Course from '../components/pages/Course/Course'
import Courses from '../components/pages/Courses/Courses'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
      <Route path="/students" element={<PrivateLayout><Students /></PrivateLayout>} />
      <Route path="/courses" element={<PrivateLayout><Courses /></PrivateLayout>} />
      <Route path="/courses/:id" element={<PrivateLayout><Course /></PrivateLayout>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
