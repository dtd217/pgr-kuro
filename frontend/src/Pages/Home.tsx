import '../Css/Home.css'
import Layout from "../Layout/Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

import ListNavigation from '../Components/ListNavigation';
import TabMenu from '../Components/TabMenu';

const Home = () => {
   return (
      <Layout>
         <div
            className="relative px-4 sm:px-8 md:px-10 w-full text-[#333333]"
            style={{ backgroundImage: "url('/home-bg.jpg')" }}
         >
            <div className="bg-no-repeat bg-top overflow-hidden">
               <div
                  className="absolute top-0 left-0 z-0 w-full h-[500px] bg-[100%_auto] bg-no-repeat"
                  style={{ backgroundImage: "url('/home-bg-top.png')" }}
               />
               <div className="max-w-screen-xl relative mt-4 sm:mt-8 md:mt-16 lg:mt-28 mx-auto">
                  <div className="h-auto flex">
                     <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        effect={'fade'}
                        autoplay={{
                           delay: 3000,
                           disableOnInteraction: false,
                        }}
                        pagination={{
                           clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, EffectFade, Pagination, Navigation]}
                        className="mySwiper lg:basis-2/3 basis-full h-full bg-black relative"
                     >
                        <SwiperSlide>
                           <Link to='/'>
                              <img src="/home-banner-1.jpg" alt="banner" className="size-full" />
                              <div className="absolute w-full h-10 bg-black/50 bottom-0 left-0 z-10 flex justify-start items-center py-3 px-4 max-w-full overflow-hidden">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.79785 0H1.97003L0 1.97003V4.79785L4.79785 0ZM0 7.62628L7.62628 0H10.4556L0 10.4556V7.62628ZM0 13.284V16H0.112305L16 0.112305V0H13.284L0 13.284ZM16 2.94073L2.94073 16H5.7688L16 5.7688V2.94073ZM16 8.59723L8.59723 16H11.4263L16 11.4263V8.59723ZM16 14.2547L14.2547 16H16V14.2547Z" fill="#F45546"></path></svg>
                                 <span className="truncate ml-2 text-white font-semibold">Ishmael: Parhelion Wiki Updates</span>
                              </div>
                           </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                           <Link to='/'>
                              <img src="/home-banner-2.jpg" alt="banner" className="size-full" />
                              <div className="absolute w-full h-10 bg-black/50 bottom-0 left-0 z-10 flex justify-start items-center py-3 px-4 max-w-full 
                              -hidden">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.79785 0H1.97003L0 1.97003V4.79785L4.79785 0ZM0 7.62628L7.62628 0H10.4556L0 10.4556V7.62628ZM0 13.284V16H0.112305L16 0.112305V0H13.284L0 13.284ZM16 2.94073L2.94073 16H5.7688L16 5.7688V2.94073ZM16 8.59723L8.59723 16H11.4263L16 11.4263V8.59723ZM16 14.2547L14.2547 16H16V14.2547Z" fill="#F45546"></path></svg>
                                 <span className="truncate ml-2 text-white font-semibold">Rusty Night Chasing Light New Version Strategy Collection</span>
                              </div>
                           </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                           <Link to='/'>
                              <img src="/home-banner-3.jpg" alt="banner" className="size-full" />
                              <div className="absolute w-full h-10 bg-black/50 bottom-0 left-0 z-10 flex justify-start items-center py-3 px-4 max-w-full overflow-hidden">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.79785 0H1.97003L0 1.97003V4.79785L4.79785 0ZM0 7.62628L7.62628 0H10.4556L0 10.4556V7.62628ZM0 13.284V16H0.112305L16 0.112305V0H13.284L0 13.284ZM16 2.94073L2.94073 16H5.7688L16 5.7688V2.94073ZM16 8.59723L8.59723 16H11.4263L16 11.4263V8.59723ZM16 14.2547L14.2547 16H16V14.2547Z" fill="#F45546"></path></svg>
                                 <span className="truncate ml-2 text-white font-semibold">Novice Commander Upgrade Guide</span>
                              </div>
                           </Link>
                        </SwiperSlide>
                     </Swiper>
                     <div className="hidden lg:block bg-white h-auto basis-1/3">
                        <div
                           className="bg-no-repeat bg-[length:100%_100%] relative pb-2 border-b-[6px] border-[#3289FA]"
                           style={{ backgroundImage: "url('/announcement-bg.png')" }}
                        >
                           <img src="/notice.svg" alt="notice" className="px-4" />
                        </div>
                        <div className='overflow-auto p-4'>
                           <div className='*:indent-6 text'>
                              <p>At present, some contents in the WIKI site are still being filled. If the commander finds errors during use, you can use [Player Error Correction] to submit supplementary submissions.</p>
                              <p>If you encounter any problems, you can submit feedback to us through the following entrance. Thank you again, commander, for your support of the Kuro WIKI.</p>
                           </div>
                           {/* <Link to="#">
                              <div
                                 className="mt-2 p-2 bg-no-repeat bg-[length:100%_100%] flex justify-start"
                                 style={{ backgroundImage: "url('/link-card.png')" }}
                              >
                                 <img src="/link-icon.png" alt="link" className="mr-3 object-cover" />
                                 <div className="w-full overflow-hidden">
                                    <p className="truncate w-full text-base font-bold leading-7 tracking-normal text-left m-[2px_0_0] p-0 text-[#666]">
                                       WIKI internal test problem feedback
                                    </p>
                                    <p className="truncate w-full m-[2px_0_0] p-0 text-sm font-normal leading-7 tracking-normal text-left text-[#8c95a3]">
                                       Submit the questions you encounter during use
                                    </p>
                                 </div>
                              </div>
                           </Link> */}
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col md:flex-row mt-5">
                     <div className="md:w-2/3 w-full flex flex-col gap-5">
                        <div
                           className='bg-no-repeat bg-[#ffffff] border border-[#0000001a] relative outline-none'
                           style={{
                              backgroundImage: "url('/title-bg.svg')",
                              backgroundPositionX: ' calc(100% - 12px)',
                              backgroundPositionY: '12px',
                           }}
                        >
                           {/* Title */}
                           <div className="flex flex-col relative mb-5 mx-5">
                              <div className='flex flex-col py-4'>
                                 <span className="w-full text-xl font-bold truncate outline-none ">Quick Navigation</span>
                                 <img src="/title-underline.svg" alt="title-underline" className="mt-1 h-1 w-fit pointer-events-none" />
                              </div>
                              <div className='absolute bottom-0 pointer-events-none w-full h-[2px] bg-[#e6e6e6] flex justify-between'>
                                 <div className='w-2 h-[1px] bg-black' />
                                 <div className='w-2 h-[1px] bg-black' />
                              </div>
                           </div>
                           {/* Left line */}
                           <div className="absolute top-0 left-0 size-full overflow-hidden pointer-events-none">
                              <div className="left-line">
                                 <span>PUNISHING</span>
                              </div>
                           </div>
                           {/* Content */}
                           <ListNavigation />
                        </div>
                        <div
                           className='bg-no-repeat bg-[#ffffff] border border-[#0000001a] relative outline-none'
                           style={{
                              backgroundImage: "url('/title-bg.svg')",
                              backgroundPositionX: ' calc(100% - 12px)',
                              backgroundPositionY: '12px',
                           }}
                        >
                           {/* Title */}
                           <div className="flex flex-col relative mb-2 mx-5">
                              <div className='flex flex-col py-4'>
                                 <div className="flex justify-between items-center">
                                    <div className='flex gap-2'>
                                       <img src="/illustrations.png" alt="illustrations" className='size-7' />
                                       <span className="w-full text-xl font-bold truncate outline-none ">Illustrations</span>
                                    </div>
                                    <Link to='/search/1' className='hover:text-gray-600 w-20 sm:w-fit truncate'>
                                       <span className='mr-2 '>Check the detail</span>
                                       <i className='fa fa-chevron-right fa-xs'></i>
                                    </Link>
                                 </div>
                                 <img src="/title-underline.svg" alt="title-underline" className="mt-1 h-1 w-fit pointer-events-none" />
                              </div>
                              <div className='absolute bottom-0 pointer-events-none w-full h-[2px] bg-[#e6e6e6] flex justify-between'>
                                 <div className='w-2 h-[1px] bg-black' />
                                 <div className='w-2 h-[1px] bg-black' />
                              </div>
                           </div>
                           {/* Left line */}
                           <div className="absolute top-0 left-0 size-full overflow-hidden pointer-events-none">
                              <div className="left-line">
                                 <span>PUNISHING</span>
                              </div>
                           </div>
                           {/* Content */}
                           <div className="mx-5 mb-5">
                              <TabMenu />
                           </div>
                        </div>
                     </div>
                     <div className="md:w-1/3 w-full h-full">
                        <div className='bg-white h-60 left-6 w-[calc(100%-20px)] md:ml-5'></div>
                     </div>
                  </div>
                  <footer
                     className="hidden sm:block size-full mt-6"
                     style={{ backgroundImage: "url('/footer-bg.png')" }}
                  >
                     <div className="flex bg-[#edeeed] py-6 gap-4 justify-evenly items-center flex-col md:flex-row">
                        <div className="">
                           <img src="/logo-footer.svg" alt="footer-logo" className="size-full" />
                        </div>
                        <div className="flex flex-col">
                           <div className="opacity-50 mb-4">
                              <span>Copyright©2024Guangzhou Kuro Technology Co., Ltd.</span>
                           </div>
                           <div className="h-[2px] bg-no-repeat w-full" style={{ backgroundImage: "url('/seperate-line.png')" }}></div>
                           <div className="mt-4 flex justify-between gap-4">
                              <section>
                                 <h2 className="font-bold">LINK</h2>
                                 <ul>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Kuro Game</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Official Website</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Wuthering Waves</Link>
                                    </li>
                                 </ul>
                              </section>
                              <section>
                                 <h2 className="font-bold">ABOUT</h2>
                                 <ul>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>About Us</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Contact Kuro</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Join Kuro</Link>
                                    </li>
                                 </ul>
                              </section>
                              <section>
                                 <h2 className="font-bold">INFORMATION</h2>
                                 <ul>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>User Agreement</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Privacy Policy</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="whitespace-nowrap opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Children's Agreement</Link>
                                    </li>
                                 </ul>
                              </section>
                           </div>
                        </div>
                     </div>
                  </footer>
               </div>
               {/* Back to top */}
               <div></div>
            </div>
         </div>
      </Layout >
   )
}

export default Home