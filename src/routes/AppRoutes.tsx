import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ContactPage } from '../pages/ContactPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<ContactPage />} />
    </Routes>
  )
}