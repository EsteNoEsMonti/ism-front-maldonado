import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../components/templates/PublicLayout/PublicLayout'
import PrivateLayout from '../components/templates/PrivateLayout/PrivateLayout'
import HomePage from '../components/pages/HomePage/HomePage'
import Students from '../components/Students/Students'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
      <Route path="/students" element={<PrivateLayout><Students /></PrivateLayout>} />
      <Route path="/courses" element={<PrivateLayout>courses</PrivateLayout>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
