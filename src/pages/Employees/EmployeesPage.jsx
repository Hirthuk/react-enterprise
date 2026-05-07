import React, { useState } from 'react'

const EmployeesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDept, setFilterDept] = useState('All')
  const [sortBy, setSortBy] = useState('name')

  const employees = [
    { id: 1, name: 'John Doe', email: 'john@company.com', department: 'Engineering', role: 'Senior Developer', joinDate: 'Jan 2020', status: 'Active', avatar: '👨‍💻' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@company.com', department: 'Sales', role: 'Sales Manager', joinDate: 'Mar 2021', status: 'Active', avatar: '👩‍💼' },
    { id: 3, name: 'Mike Johnson', email: 'mike@company.com', department: 'Engineering', role: 'DevOps Engineer', joinDate: 'Jun 2020', status: 'Active', avatar: '👨‍💻' },
    { id: 4, name: 'Emma Wilson', email: 'emma@company.com', department: 'HR', role: 'HR Specialist', joinDate: 'Feb 2022', status: 'Active', avatar: '👩‍💼' },
    { id: 5, name: 'David Brown', email: 'david@company.com', department: 'Marketing', role: 'Marketing Lead', joinDate: 'Aug 2021', status: 'On Leave', avatar: '👨‍💼' },
    { id: 6, name: 'Lisa Chen', email: 'lisa@company.com', department: 'Engineering', role: 'Frontend Developer', joinDate: 'Apr 2022', status: 'Active', avatar: '👩‍💻' },
    { id: 7, name: 'James Garcia', email: 'james@company.com', department: 'Finance', role: 'Finance Analyst', joinDate: 'Sep 2021', status: 'Active', avatar: '👨‍💼' },
    { id: 8, name: 'Rachel Kim', email: 'rachel@company.com', department: 'Sales', role: 'Sales Executive', joinDate: 'Nov 2022', status: 'Active', avatar: '👩‍💼' },
  ]

  const departments = ['All', 'Engineering', 'Sales', 'HR', 'Marketing', 'Finance']

  const filteredEmployees = employees
    .filter(emp => {
      const matchSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         emp.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchDept = filterDept === 'All' || emp.department === filterDept
      return matchSearch && matchDept
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'department') return a.department.localeCompare(b.department)
      return 0
    })

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6 sm:p-8 lg:p-12'>
      {/* Header */}
      <div className='max-w-7xl mx-auto mb-8'>
        <div className='bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl shadow-xl p-8 text-white'>
          <h1 className='text-5xl md:text-6xl font-bold mb-3'>Employee Directory</h1>
          <p className='text-xl opacity-90'>Manage and view all company employees</p>
        </div>
      </div>

      {/* Stats */}
      <div className='max-w-7xl mx-auto mb-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <p className='text-gray-600 text-sm mb-2'>Total Employees</p>
            <p className='text-4xl font-bold text-teal-600'>{employees.length}</p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <p className='text-gray-600 text-sm mb-2'>Active</p>
            <p className='text-4xl font-bold text-green-600'>{employees.filter(e => e.status === 'Active').length}</p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <p className='text-gray-600 text-sm mb-2'>Departments</p>
            <p className='text-4xl font-bold text-blue-600'>{departments.length - 1}</p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 text-center'>
            <p className='text-gray-600 text-sm mb-2'>On Leave</p>
            <p className='text-4xl font-bold text-yellow-600'>{employees.filter(e => e.status === 'On Leave').length}</p>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className='max-w-7xl mx-auto mb-8'>
        <div className='bg-white rounded-xl shadow-lg p-6 space-y-4'>
          {/* Search Bar */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Search by name or email...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-all duration-300'
            />
            <span className='absolute right-4 top-3 text-gray-400 text-xl'>🔍</span>
          </div>

          {/* Filter Controls */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Department Filter</label>
              <select
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
                className='w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-all duration-300'
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-all duration-300'
              >
                <option value='name'>Name</option>
                <option value='department'>Department</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Employees Grid */}
      <div className='max-w-7xl mx-auto'>
        <div className='mb-6'>
          <p className='text-gray-700 font-semibold'>Showing {filteredEmployees.length} employee{filteredEmployees.length !== 1 ? 's' : ''}</p>
        </div>

        {filteredEmployees.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px] overflow-hidden group'
              >
                {/* Card Header */}
                <div className='bg-gradient-to-r from-teal-500 to-green-500 p-6 text-white'>
                  <div className='flex items-start justify-between'>
                    <div className='text-5xl'>{employee.avatar}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(employee.status)}`}>
                      {employee.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-800 mb-1'>{employee.name}</h3>
                  <p className='text-teal-600 font-semibold text-sm mb-4'>{employee.role}</p>

                  <div className='space-y-3 mb-6 text-sm text-gray-600'>
                    <div className='flex items-center gap-2'>
                      <span>📧</span>
                      <a href={`mailto:${employee.email}`} className='text-teal-600 hover:underline break-all'>
                        {employee.email}
                      </a>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span>🏢</span>
                      <span>{employee.department}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span>📅</span>
                      <span>{employee.joinDate}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-2 pt-4 border-t border-gray-200'>
                    <button className='flex-1 py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm'>
                      View Profile
                    </button>
                    <button className='flex-1 py-2 border-2 border-teal-500 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 text-sm'>
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='bg-white rounded-xl shadow-lg p-16 text-center'>
            <p className='text-4xl mb-4'>🔍</p>
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>No Employees Found</h3>
            <p className='text-gray-600'>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmployeesPage