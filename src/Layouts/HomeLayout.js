import Footer from '@/components/Global/Footer/Footer'
import Navbar from '@/components/Global/Navbar/Navbar'
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <>
       <Navbar />
      {children}
      <Footer /> 
    </>
  )
}

export default HomeLayout
