import React from 'react'
import Navbar from './Navbar/Navbar'

type Props = {
   children: React.ReactNode
}

const Layout = ({ children }: Props) => {
   return (
      <div className='max-w-screen-2xl mx-auto min-h-screen bg-no-repeat bg-center bg-cover bg-fixed flex flex-col'>
         <Navbar />
         {children}
      </div >
   )
}

export default Layout