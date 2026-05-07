import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    { icon: '📊', title: 'Real-time Analytics', desc: 'Track employee metrics and performance data instantly' },
    { icon: '👥', title: 'Team Management', desc: 'Organize and manage your workforce efficiently' },
    { icon: '📈', title: 'Growth Tracking', desc: 'Monitor departmental growth and progress' },
    { icon: '🔒', title: 'Secure System', desc: 'Enterprise-grade security for your data' },
  ]

  const testimonials = [
    { name: 'John Smith', role: 'HR Manager', company: 'Tech Corp', message: 'This system transformed how we manage our employees!' },
    { name: 'Sarah Johnson', role: 'CEO', company: 'Digital Solutions', message: 'Best investment for streamlining HR processes.' },
    { name: 'Mike Chen', role: 'Operations Lead', company: 'Global Enterprises', message: 'Incredible platform with amazing support.' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100'>
      {/* Hero Section */}
      <section className='relative overflow-hidden px-6 py-24 sm:px-8 lg:px-16'>
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-100 to-transparent opacity-30'></div>
        <div className='relative max-w-5xl mx-auto text-center'>
          <h1 className='text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Welcome to EMP Portal
          </h1>
          <p className='text-2xl text-gray-700 mb-8 leading-relaxed'>
            Revolutionize your employee management with our cutting-edge platform
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <Link to="/employees" className='px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
              Explore Employees
            </Link>
            <Link to="/analytics" className='px-8 py-4 bg-white border-2 border-cyan-600 text-cyan-600 rounded-lg font-bold text-lg hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300'>
              View Analytics
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-6 sm:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-4 text-gray-800'>Powerful Features</h2>
          <p className='text-center text-gray-600 mb-16 text-lg'>Everything you need to manage your workforce effectively</p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]'>
                <div className='text-5xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 px-6 sm:px-8 lg:px-16 bg-gradient-to-r from-cyan-600 to-blue-600'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center'>
            <div className='p-6'>
              <div className='text-5xl font-bold mb-2'>1250+</div>
              <p className='text-cyan-100 text-lg'>Active Employees</p>
            </div>
            <div className='p-6'>
              <div className='text-5xl font-bold mb-2'>45+</div>
              <p className='text-cyan-100 text-lg'>Projects Running</p>
            </div>
            <div className='p-6'>
              <div className='text-5xl font-bold mb-2'>12</div>
              <p className='text-cyan-100 text-lg'>Departments</p>
            </div>
            <div className='p-6'>
              <div className='text-5xl font-bold mb-2'>99.9%</div>
              <p className='text-cyan-100 text-lg'>Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 px-6 sm:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-gray-800'>What Our Users Say</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300'>
                <div className='flex gap-1 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-yellow-400 text-xl'>★</span>
                  ))}
                </div>
                <p className='text-gray-700 mb-6 italic'>\"\"{testimonial.message}\"\"</p>
                <div>
                  <p className='font-bold text-gray-800'>{testimonial.name}</p>
                  <p className='text-sm text-gray-600'>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 sm:px-8 lg:px-16 bg-gradient-to-r from-purple-600 to-pink-600'>
        <div className='max-w-4xl mx-auto text-center text-white'>
          <h2 className='text-4xl font-bold mb-6'>Ready to Get Started?</h2>
          <p className='text-xl mb-8 opacity-90'>Join hundreds of companies using our platform</p>
          <button className='px-10 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300'>
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home