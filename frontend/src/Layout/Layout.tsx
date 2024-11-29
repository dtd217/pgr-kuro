import React from 'react'
import Navbar from './Navbar/Navbar'

type Props = {
   children: React.ReactNode
}

const Layout = ({ children }: Props) => {
   return (
      <div className='min-w-[1380px] scroll-smooth bg-no-repeat bg-center bg-cover bg-fixed flex flex-col overflow-auto'>
         <Navbar />
         {children}
      </div >
   )
}

export default Layout