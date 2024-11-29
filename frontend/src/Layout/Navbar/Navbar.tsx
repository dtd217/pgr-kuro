import { Link } from 'react-router-dom'
import { Input } from 'antd';

const Navbar = () => {
   return (
      <header className='w-full h-16 sticky top-0 z-[51] bg-[#333333]'>
         <div className='mx-auto my-0 h-full flex items-center justify-between py-0 px-[50px]'>
            <nav className='size-full flex items-center'>
               <Link to='/' className='flex items-center'>
                  <img src="/logo.png" alt="logo" className='h-8' />
               </Link>
            </nav>
            <div className='flex'>
               <div className='w-72 h-10 shrink-0 rounded-lg bg-[#5c5c5c] flex items-center mr-9 py-0 px-3'>
                  <span className='cursor-pointer'>
                     <i className="fa fa-magnifying-glass text-white"></i>
                  </span>
                  <span className='leading-5 bg-transparent focus:border-none focus:outline-none'>
                     <Input
                        placeholder="Search"
                        maxLength={30}
                        className='border-none outline-none text-gray-300 placeholder:text-gray-300 bg-transparent hover:bg-transparent focus:bg-transparent focus:border-none focus:outline-none focus:ring-0'
                     />
                  </span>
               </div>
               <div className='size-10 rounded-full overflow-hidden'>
                  <img src="/avatar.png" alt="user" className='size-full' />
               </div>
            </div>
         </div>
      </header>
   )
}

export default Navbar