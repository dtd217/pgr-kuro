import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Input, Drawer, Menu } from 'antd';
import '../../Css/Navbar.css'

import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const Navbar = () => {
   const [openNotice, setOpenNotice] = useState(false);
   const [openTableOfContents, setOpenTableOfContents] = useState(false);

   const showDrawerNotice = () => setOpenNotice(true)
   const onCloseNotice = () => setOpenNotice(false)

   const showDrawerTableOfContents = () => setOpenTableOfContents(true)
   const onCloseTableOfContents = () => setOpenTableOfContents(false)

   const items: MenuItem[] = [
      {
         key: 'sub1',
         label: 'Illustrations',
         children: [
            { key: '1', label: <Link to='#'>Aircrafts Illustrations</Link>, },
            { key: '2', label: <Link to='#'>Awareness Manual</Link> },
            { key: '3', label: <Link to='#'>Arsenal</Link> },
            { key: '4', label: <Link to='#'>Auxiliary Hangar</Link> },
            { key: '5', label: <Link to='#'>Monster Manual</Link> },
            { key: '6', label: <Link to='#'>Dormitory Guide</Link> },
            { key: '7', label: <Link to='#'>Dormitory Furniture</Link> },
            { key: '8', label: <Link to='#'>Prop Guide</Link> },
            { key: '9', label: <Link to='#'>Collections</Link> },
         ],
      },
      {
         key: 'sub2',
         label: 'Gameplay Challenges',
         children: [
            { key: '10', label: <Link to='#'>Phantom Pain Cage</Link>, },
            { key: '11', label: <Link to='#'>War Zone</Link> },
            { key: '12', label: <Link to='#'>Multi-dimensional Interpretation</Link> },
         ],
      },
      {
         key: 'sub3',
         label: 'Plot',
         children: [
            { key: '13', label: <Link to='#'>Main storyline</Link>, },
            { key: '14', label: <Link to='#'>Floating Point Documentary</Link> },
            { key: '15', label: <Link to='#'>The Corridor of the Self</Link> },
            { key: '16', label: <Link to='#'>Extra News</Link> },
            { key: '17', label: <Link to='#'>Old News</Link> },
            { key: '18', label: <Link to='#'>Good feelings plot</Link> },
            { key: '19', label: <Link to='#'>Golden Vortex</Link> },
            { key: '20', label: <Link to='#'>Boundary Convention</Link> },
         ],
      },
      {
         key: 'sub4',
         label: 'Archives',
         children: [
            { key: '21', label: <Link to='#'>Profile</Link>, },
            { key: '22', label: <Link to='#'>Excerpt</Link> },
            { key: '23', label: <Link to='#'>Album</Link> },
            { key: '24', label: <Link to='#'>Nameplate</Link> },
            { key: '25', label: <Link to='#'>Communication records</Link> },
            { key: '26', label: <Link to='#'>Mail</Link> },
            { key: '27', label: <Link to='#'>Achievements Table</Link> },
            { key: '28', label: <Link to='#'>Worldview</Link> },
            { key: '29', label: <Link to='#'>Setting Set</Link> },
         ],
      },
      {
         key: 'sub5',
         label: 'Game Guide',
         children: [
            { key: '30', label: <Link to='#'>Version Guide</Link>, },
            { key: '31', label: <Link to='#'>Getting Started</Link>, },
            { key: '32', label: <Link to='#'>Role Guide</Link> },
            { key: '33', label: <Link to='#'>Gameplay</Link> },
         ],
      },
      {
         key: 'sub6',
         label: 'Latest News',
         children: [
            { key: '34', label: <Link to='#'>Update Announcement</Link> },
            { key: '35', label: <Link to='#'>Version Activity</Link> },
            { key: '36', label: <Link to='#'>News</Link> },
            { key: '37', label: <Link to='#'>Surrounding Information</Link> },
            { key: '38', label: <Link to='#'>Faos Student Union Journal</Link> },
            { key: '39', label: <Link to='#'>Emoji activity</Link> },
            { key: '40', label: <Link to='#'>Sky Garden Information Center</Link> },
            { key: '41', label: <Link to='#'>Celica's Intelligence Center</Link>, },
            { key: '42', label: <Link to='#'>This is art!!</Link> },
         ],
      },
      {
         key: 'sub7',
         label: 'Theme Video',
         children: [
            { key: '43', label: <Link to='#'>Official Video</Link> },
            { key: '44', label: <Link to='#'>Holiday greetings</Link> },
            { key: '45', label: <Link to='#'>Body Birth</Link> },
            { key: '46', label: <Link to='#'>Emoticons</Link> },
            { key: '47', label: <Link to='#'>Comics</Link> },
         ],
      },
   ];

   return (
      <header className='w-full sticky top-0 z-[51] bg-[#333333]'>
         {/* PC */}
         <div className='hidden sm:flex mx-auto my-0 h-full items-center justify-between py-3 sm:px-8 md:px-10'>
            <nav className='size-full flex items-center'>
               <Link to='/' className='flex items-center'>
                  <img src="/logo.png" alt="logo" className='h-8 w-full' />
               </Link>
            </nav>
            <div className="flex">
               <div className='w-60 h-10 shrink-0 rounded-lg bg-[#5c5c5c] flex items-center mr-6 py-0 px-3'>
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
               <div className='size-10 rounded-full'>
                  <img src="/avatar.png" alt="user" className='size-full' />
               </div>
            </div>
         </div>
         {/* Mobile */}
         <div className='flex sm:hidden mx-auto my-0 h-full flex-col gap-4 py-3 px-4'>
            <nav className='size-full flex items-center justify-between'>
               <Link to='/' className='flex items-center'>
                  <img src="/logo.png" alt="logo" className='h-8 w-full' />
               </Link>
               <div className='size-10 rounded-full'>
                  <img src="/avatar.png" alt="user" className='size-full' />
               </div>
            </nav>
            <div className='flex gap-2'>
               <div className='max-w-10 h-10 grow-[1] bg-[#5c5c5c] flex items-center py-0 px-3'>
                  <span className='cursor-pointer'>
                     <i className="fa fa-magnifying-glass text-white"></i>
                  </span>
                  <span className='hidden leading-5 bg-transparent focus:border-none focus:outline-none'>
                     <Input
                        placeholder="Search"
                        maxLength={30}
                        className='border-none outline-none text-gray-300 placeholder:text-gray-300 bg-transparent hover:bg-transparent focus:bg-transparent focus:border-none focus:outline-none focus:ring-0'
                     />
                  </span>
               </div>
               <button onClick={() => showDrawerNotice()} className="bg-[#0f71bc] grow-[1] px-1 text-center hover:opacity-90 transition ease-in duration-200 cursor-pointer">
                  <span className='whitespace-nowrap leading-10 text-white'>Notice</span>
               </button>
               <Drawer
                  title="Notice"
                  placement={'bottom'}
                  closable={true}
                  onClose={onCloseNotice}
                  open={openNotice}
                  height={'450px'}
               >
                  <div className='text-justify *:indent-6'>
                     <p>At present, some contents in the WIKI site are still being filled. If the commander finds errors during use, you can use [Player Error Correction] to submit supplementary submissions.</p>
                     <p>If you encounter any problems during use, you can submit feedback to us through the following entrance. Thank you again, commander, for your support of the Kuro WIKI.</p>
                  </div>
                  <Link to="#">
                     <div
                        className="w-full mt-4 p-2 bg-no-repeat bg-[length:100%_100%] flex justify-start"
                        style={{ backgroundImage: "url('/link-card.png')" }}
                     >
                        <img src="/link-icon.png" alt="link" className="mr-3 object-cover" />
                        <div className="w-[calc(100%-76px)] *:truncate">
                           <p className="w-full text-base font-bold leading-7 tracking-normal text-left m-[2px_0_0] p-0 text-[#666]">
                              WIKI internal test problem feedback
                           </p>
                           <p className="w-full m-[2px_0_0] p-0 text-sm font-normal leading-7 tracking-normal text-left text-[#8c95a3]">
                              Submit the questions you encounter during use
                           </p>
                        </div>
                     </div>
                  </Link>
               </Drawer>
               <button onClick={() => showDrawerTableOfContents()} className="bg-[#0f71bc] grow-[1] px-1 text-center hover:opacity-90 transition ease-in duration-200 cursor-pointer">
                  <span className='whitespace-nowrap leading-10 text-white'>Table of Contents</span>
               </button>
               <Drawer
                  placement={'right'}
                  closable={false}
                  onClose={onCloseTableOfContents}
                  open={openTableOfContents}
                  width={'230px'}
               >
                  <Menu
                     mode="inline"
                     items={items}
                  />
               </Drawer>
            </div>
         </div >
      </header >
   )
}

export default Navbar