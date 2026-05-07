import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Home from '../pages/common/Home'
import EmployeesPage from '../pages/Employees/EmployeesPage'
import About from '../pages/common/About'
import Profile from '../pages/common/Profile'
import Analytics from '../pages/common/Analytics'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/employees" element= {<EmployeesPage />} />
        <Route path="/analytics" element= {<Analytics />} />
        <Route path="/about" element= {<About />} />
        <Route path="/profile" element= {<Profile />} />

        <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes