import Navbar from '@/components/Global/Navbar/Navbar'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
         <Navbar />
      {children}
      {/* <MainFooter /> */}
    </>
  )
}

export default MainLayout
