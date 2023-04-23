import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../components/templates/PublicLayout/PublicLayout'
import PrivateLayout from '../components/templates/PrivateLayout/PrivateLayout'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout>Home</PublicLayout>} />
      <Route path="/students" element={<PrivateLayout>students</PrivateLayout>} />
      <Route path="/courses" element={<PrivateLayout>courses</PrivateLayout>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
