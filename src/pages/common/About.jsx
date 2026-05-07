import React from 'react'

const About = () => {
  const team = [
    { id: 1, name: 'Alex Turner', role: 'Founder & CEO', image: '👨‍💼', bio: '15+ years in HR tech' },
    { id: 2, name: 'Emma Wilson', role: 'CTO', image: '👩‍💻', bio: 'Full-stack developer extraordinaire' },
    { id: 3, name: 'David Brown', role: 'Head of Design', image: '👨‍🎨', bio: 'UX/UI design specialist' },
    { id: 4, name: 'Lisa Chen', role: 'Product Manager', image: '👩‍💼', bio: 'Strategic product visionary' },
  ]

  const values = [
    { title: 'Innovation', desc: 'Constantly pushing boundaries to deliver cutting-edge solutions', icon: '💡' },
    { title: 'Integrity', desc: 'Building trust through transparency and ethical practices', icon: '🤝' },
    { title: 'Excellence', desc: 'Committed to highest standards in everything we do', icon: '⭐' },
    { title: 'Collaboration', desc: 'Strong teamwork and partnership with our clients', icon: '👥' },
  ]

  const milestones = [
    { year: '2018', event: 'Company Founded' },
    { year: '2019', event: '1st Major Client Partnership' },
    { year: '2021', event: 'Series A Funding' },
    { year: '2023', event: '10,000+ Users Milestone' },
    { year: '2024', event: 'Global Expansion' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-slate-50'>
      {/* Header */}
      <section className='py-20 px-6 sm:px-8 lg:px-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>About EMP Portal</h1>
          <p className='text-xl opacity-90'>Transforming employee management through innovative technology</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-20 px-6 sm:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg'>
            <h2 className='text-3xl font-bold text-blue-900 mb-4'>🎯 Our Mission</h2>
            <p className='text-gray-700 text-lg leading-relaxed'>
              To revolutionize how organizations manage and nurture their workforce by providing intelligent, user-friendly solutions that empower both employers and employees to achieve their full potential.
            </p>
          </div>
          <div className='bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg'>
            <h2 className='text-3xl font-bold text-purple-900 mb-4'>🚀 Our Vision</h2>
            <p className='text-gray-700 text-lg leading-relaxed'>
              To be the global leader in employee management solutions, trusted by thousands of organizations to create thriving workplaces where talent flourishes and success is shared.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='py-20 px-6 sm:px-8 lg:px-16 bg-slate-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-gray-800'>Our Core Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div key={index} className='bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 text-center'>
                <div className='text-5xl mb-4'>{value.icon}</div>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>{value.title}</h3>
                <p className='text-gray-600'>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className='py-20 px-6 sm:px-8 lg:px-16'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-gray-800'>Our Journey</h2>
          <div className='space-y-8'>
            {milestones.map((milestone, index) => (
              <div key={index} className='flex gap-6 items-center'>
                <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-xl flex-shrink-0'>
                  {milestone.year}
                </div>
                <div className='bg-white rounded-lg p-6 shadow-md flex-grow hover:shadow-lg transition-all duration-300'>
                  <p className='text-xl font-semibold text-gray-800'>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 px-6 sm:px-8 lg:px-16 bg-slate-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-gray-800'>Meet Our Team</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {team.map((member) => (
              <div key={member.id} className='bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]'>
                <div className='text-6xl mb-4'>{member.image}</div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>{member.name}</h3>
                <p className='text-purple-600 font-semibold mb-3'>{member.role}</p>
                <p className='text-gray-600 text-sm'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-20 px-6 sm:px-8 lg:px-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6'>Get In Touch</h2>
          <p className='text-xl mb-8 opacity-90'>Have questions? We'd love to hear from you</p>
          <button className='px-10 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300'>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default About