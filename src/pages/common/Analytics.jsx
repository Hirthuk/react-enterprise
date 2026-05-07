import React from 'react'

const Analytics = () => {
  const stats = [
    { label: 'Total Employees', value: '1,250', icon: '👥', color: 'from-blue-500 to-blue-600' },
    { label: 'Active Projects', value: '45', icon: '📊', color: 'from-purple-500 to-purple-600' },
    { label: 'Departments', value: '12', icon: '🏢', color: 'from-pink-500 to-pink-600' },
    { label: 'Revenue', value: '$2.5M', icon: '💰', color: 'from-green-500 to-green-600' },
  ]

  const departments = [
    { name: 'Engineering', employees: 450, growth: '+12%', icon: '⚙️' },
    { name: 'Sales', employees: 280, growth: '+8%', icon: '📈' },
    { name: 'Marketing', employees: 120, growth: '+15%', icon: '📢' },
    { name: 'HR', employees: 85, growth: '+5%', icon: '💼' },
    { name: 'Finance', employees: 95, growth: '+3%', icon: '💳' },
    { name: 'Operations', employees: 220, growth: '+10%', icon: '🔧' },
  ]

  const recentActivity = [
    { action: 'New employee hired', name: 'John Doe', department: 'Engineering', time: '2 hours ago' },
    { action: 'Project completed', name: 'Mobile App v2.0', department: 'Engineering', time: '5 hours ago' },
    { action: 'Promotion announced', name: 'Sarah Smith', department: 'Sales', time: '1 day ago' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8'>
      {/* Header */}
      <div className='mb-12'>
        <h1 className='text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3'>
          Company Analytics
        </h1>
        <p className='text-gray-600 text-lg'>Real-time insights and performance metrics</p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden'
          >
            <div className={`bg-gradient-to-br ${stat.color} p-6 text-white`}>
              <div className='flex justify-between items-start'>
                <div>
                  <p className='text-sm opacity-90 mb-2'>{stat.label}</p>
                  <p className='text-4xl font-bold'>{stat.value}</p>
                </div>
                <span className='text-4xl'>{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Departments Section */}
      <div className='mb-12'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-3xl font-bold text-gray-800'>Department Overview</h2>
          <button className='px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300'>
            View All
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {departments.map((dept, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-gradient-to-r border-cyan-500'
            >
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <div className='text-3xl mb-2'>{dept.icon}</div>
                  <h3 className='text-xl font-bold text-gray-800'>{dept.name}</h3>
                </div>
                <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold'>
                  {dept.growth}
                </span>
              </div>
              <div className='pt-4 border-t border-gray-200'>
                <p className='text-gray-600 text-sm'>Total Employees</p>
                <p className='text-3xl font-bold text-cyan-600'>{dept.employees}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className='bg-white rounded-2xl shadow-lg p-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Recent Activity</h2>
        
        <div className='space-y-4'>
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className='flex items-center justify-between p-4 border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50 to-transparent rounded-lg hover:shadow-md transition-all duration-300'
            >
              <div className='flex-1'>
                <p className='font-semibold text-gray-800'>{activity.action}</p>
                <p className='text-sm text-gray-600'>{activity.name} • {activity.department}</p>
              </div>
              <span className='text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className='mt-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center'>
        <h3 className='text-2xl font-bold mb-3'>Ready to dive deeper?</h3>
        <p className='text-cyan-100 mb-6'>Access detailed reports and advanced analytics for better insights</p>
        <button className='px-8 py-3 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'>
          Generate Report
        </button>
      </div>
    </div>
  )
}

export default Analytics
