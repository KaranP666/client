import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import Body from './Body'

const GetAttendance = () => {
  return (
    <>
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
    </>
  )
}

export default GetAttendance