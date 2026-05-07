import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <nav className='bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-600 shadow-2xl sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link to="/" className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300'>
              EMP
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='flex space-x-1'>
            <Link 
              to="/" 
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/') 
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/employees" 
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/employees') 
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Employees
            </Link>
            <Link 
              to="/about" 
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/about') 
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>
            <Link 
              to="/analytics" 
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/analytics') 
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Analytics
            </Link>
            <Link 
              to="/profile" 
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/profile') 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar