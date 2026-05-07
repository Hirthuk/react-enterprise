import React, { useState } from 'react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const userProfile = {
    name: 'Sarah Anderson',
    role: 'Senior HR Manager',
    department: 'Human Resources',
    email: 'sarah.anderson@company.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'Jan 15, 2020',
    avatar: '👩‍💼',
  }

  const stats = [
    { label: 'Teams Led', value: '5', icon: '👥' },
    { label: 'Projects', value: '23', icon: '📊' },
    { label: 'Experience', value: '8 yrs', icon: '📈' },
    { label: 'Rating', value: '4.9/5', icon: '⭐' },
  ]

  const skills = [
    'Team Leadership', 'HR Strategy', 'Recruitment', 'Employee Relations',
    'Performance Management', 'Conflict Resolution', 'Training & Development', 'Analytics'
  ]

  const achievements = [
    { title: 'Employee of the Month', date: 'March 2024', icon: '🏆' },
    { title: 'Leadership Excellence Award', date: 'December 2023', icon: '🎖️' },
    { title: 'Project Success Recognition', date: 'September 2023', icon: '✨' },
    { title: 'Team Building Champion', date: 'June 2023', icon: '🥇' },
  ]

  const recentActivity = [
    { action: 'Updated project status', time: '2 hours ago', icon: '📝' },
    { action: 'Conducted team meeting', time: '5 hours ago', icon: '📞' },
    { action: 'Approved leave request', time: '1 day ago', icon: '✅' },
    { action: 'Submitted performance review', time: '2 days ago', icon: '📋' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6 sm:p-8 lg:p-12'>
      {/* Profile Header Card */}
      <div className='max-w-6xl mx-auto mb-8'>
        <div className='bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white'>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
            <div className='text-8xl'>{userProfile.avatar}</div>
            <div className='flex-grow text-center md:text-left'>
              <h1 className='text-4xl md:text-5xl font-bold mb-2'>{userProfile.name}</h1>
              <p className='text-2xl opacity-90 mb-4'>{userProfile.role}</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm opacity-80'>
                <div>
                  <p className='opacity-75'>Department</p>
                  <p className='font-semibold'>{userProfile.department}</p>
                </div>
                <div>
                  <p className='opacity-75'>Email</p>
                  <p className='font-semibold break-all'>{userProfile.email}</p>
                </div>
                <div>
                  <p className='opacity-75'>Phone</p>
                  <p className='font-semibold'>{userProfile.phone}</p>
                </div>
                <div>
                  <p className='opacity-75'>Joined</p>
                  <p className='font-semibold'>{userProfile.joinDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='max-w-6xl mx-auto mb-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {stats.map((stat, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300'>
              <div className='text-4xl mb-3'>{stat.icon}</div>
              <p className='text-gray-600 text-sm mb-2'>{stat.label}</p>
              <p className='text-3xl font-bold text-cyan-600'>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <div className='max-w-6xl mx-auto'>
        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
          {/* Tab Navigation */}
          <div className='flex border-b border-gray-200'>
            {['overview', 'skills', 'achievements', 'activity'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 text-center capitalize ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='p-8'>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className='space-y-6'>
                <div>
                  <h3 className='text-2xl font-bold text-gray-800 mb-3'>About</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    Experienced HR Manager with 8+ years of expertise in team leadership, employee development, and organizational strategy. Passionate about creating positive workplace cultures and driving business success through effective people management.
                  </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6'>
                    <h4 className='font-bold text-gray-800 mb-2'>Current Focus</h4>
                    <p className='text-gray-700'>Leading the digital transformation of HR processes and implementing new employee engagement strategies.</p>
                  </div>
                  <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6'>
                    <h4 className='font-bold text-gray-800 mb-2'>Strengths</h4>
                    <p className='text-gray-700'>Strategic planning, team motivation, problem-solving, and stakeholder management across all levels.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div>
                <h3 className='text-2xl font-bold text-gray-800 mb-6'>Core Skills</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                  {skills.map((skill, index) => (
                    <div key={index} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg p-4 text-center font-semibold hover:shadow-lg transition-all duration-300'>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className='text-2xl font-bold text-gray-800 mb-6'>Achievements & Awards</h3>
                <div className='space-y-4'>
                  {achievements.map((achievement, index) => (
                    <div key={index} className='flex items-center gap-4 p-4 border-l-4 border-cyan-500 bg-cyan-50 rounded-lg hover:shadow-md transition-all duration-300'>
                      <div className='text-4xl'>{achievement.icon}</div>
                      <div className='flex-grow'>
                        <h4 className='font-bold text-gray-800'>{achievement.title}</h4>
                        <p className='text-sm text-gray-600'>{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Activity Tab */}
            {activeTab === 'activity' && (
              <div>
                <h3 className='text-2xl font-bold text-gray-800 mb-6'>Recent Activity</h3>
                <div className='space-y-4'>
                  {recentActivity.map((activity, index) => (
                    <div key={index} className='flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300'>
                      <div className='text-3xl'>{activity.icon}</div>
                      <div className='flex-grow'>
                        <p className='font-semibold text-gray-800'>{activity.action}</p>
                        <p className='text-sm text-gray-500'>{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='max-w-6xl mx-auto mt-8 flex gap-4 justify-center flex-wrap'>
        <button className='px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
          Edit Profile
        </button>
        <button className='px-8 py-3 bg-white border-2 border-cyan-600 text-cyan-600 rounded-lg font-bold hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300'>
          Download Resume
        </button>
        <button className='px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300'>
          Settings
        </button>
      </div>
    </div>
  )
}

export default Profile