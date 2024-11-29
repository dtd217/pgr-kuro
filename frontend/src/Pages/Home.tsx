import '../Css/Home.css'
import Layout from "../Layout/Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import ListAircraft from "../Components/ListAircraft";
import ListAwareness from '../Components/ListAwareness';
import ListWeapon from '../Components/ListWeapon';
import { Link } from "react-router-dom";
import { Tabs } from 'antd';

import type { TabsProps } from 'antd';
import ListPet from '../Components/ListPet';
import ListMonster from '../Components/ListMonster';

const Home = () => {
   const items: TabsProps['items'] = [
      {
         key: '1',
         label: 'Aircraft Illustrations',
         children: <ListAircraft />,
      },
      {
         key: '2',
         label: 'Awareness Manual',
         children: <ListAwareness />,
      },
      {
         key: '3',
         label: 'Weapon',
         children: <ListWeapon />,
      },
      {
         key: '4',
         label: 'Auxiliary Hangar',
         children: <ListPet />,
      },
      {
         key: '5',
         label: 'Monster Manual',
         children: <ListMonster />,
      },
      {
         key: '6',
         label: 'Dormitory Guide',
         children: 'Content of Tab Pane 4',
      },
      {
         key: '7',
         label: 'Dormitory Furniture',
         children: 'Content of Tab Pane 4',
      },
      {
         key: '8',
         label: 'Prop Guide',
         children: 'Content of Tab Pane 4',
      },
      {
         key: '9',
         label: 'Collections',
         children: 'Content of Tab Pane 4',
      },
   ];

   return (
      <Layout>
         <div className="relative overflow-auto w-full text-[#333333]">
            <div
               className="bg-[#f4f4f4] bg-no-repeat bg-top overflow-hidden"
               style={{ backgroundImage: "url('/home-bg.jpg')" }}
            >
               <div
                  className="absolute top-0 left-0 z-0 w-full h-[500px] bg-[100%_auto] bg-no-repeat"
                  style={{ backgroundImage: "url('/home-bg-top.png')" }}
               />
               <div className="relative w-[1200px] mt-[74px] mb-auto mx-auto pb-2.5">
                  <div className="h-[466px] flex">
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
                        className="mySwiper w-[828px] h-full bg-black relative"
                     >
                        <SwiperSlide>
                           <Link to='/'>
                              <img src="/home-banner-1.jpg" alt="banner" className="size-full" />
                              <div className="absolute w-full h-10 bg-black/50 bottom-0 left-0 z-10 flex justify-start items-center py-3 px-4 max-w-full overflow-hidden">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.79785 0H1.97003L0 1.97003V4.79785L4.79785 0ZM0 7.62628L7.62628 0H10.4556L0 10.4556V7.62628ZM0 13.284V16H0.112305L16 0.112305V0H13.284L0 13.284ZM16 2.94073L2.94073 16H5.7688L16 5.7688V2.94073ZM16 8.59723L8.59723 16H11.4263L16 11.4263V8.59723ZM16 14.2547L14.2547 16H16V14.2547Z" fill="#F45546"></path></svg>
                                 <span className="truncate ml-2 text-white font-semibold">Ishmael: Parhelion Wiki Updates</span>
                              </div>
                           </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                           <Link to='/'>
                              <img src="/home-banner-2.jpg" alt="banner" className="size-full" />
                              <div className="absolute w-full h-10 bg-black/50 bottom-0 left-0 z-10 flex justify-start items-center py-3 px-4 max-w-full overflow-hidden">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.79785 0H1.97003L0 1.97003V4.79785L4.79785 0ZM0 7.62628L7.62628 0H10.4556L0 10.4556V7.62628ZM0 13.284V16H0.112305L16 0.112305V0H13.284L0 13.284ZM16 2.94073L2.94073 16H5.7688L16 5.7688V2.94073ZM16 8.59723L8.59723 16H11.4263L16 11.4263V8.59723ZM16 14.2547L14.2547 16H16V14.2547Z" fill="#F45546"></path></svg>
                                 <span className="truncate ml-2 text-white font-semibold">Rusty Night Chasing Light New Version Strategy Collection</span>
                              </div>
                           </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                           <Link to='/'>
                              <img src="/home-banner-3.jpg" alt="banner" className="size-full" />
                              <div className="absolute w-full h-10 bg-black/50 bottom-0 left-0 z-10 flex justify-start items-center py-3 px-4 max-w-full overflow-hidden">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.79785 0H1.97003L0 1.97003V4.79785L4.79785 0ZM0 7.62628L7.62628 0H10.4556L0 10.4556V7.62628ZM0 13.284V16H0.112305L16 0.112305V0H13.284L0 13.284ZM16 2.94073L2.94073 16H5.7688L16 5.7688V2.94073ZM16 8.59723L8.59723 16H11.4263L16 11.4263V8.59723ZM16 14.2547L14.2547 16H16V14.2547Z" fill="#F45546"></path></svg>
                                 <span className="truncate ml-2 text-white font-semibold">Novice Commander Upgrade Guide</span>
                              </div>
                           </Link>
                        </SwiperSlide>
                     </Swiper>
                     <div className="w-[372px] bg-white h-full">
                        <div
                           className="bg-no-repeat h-[102px] relative pt-[14px] border-b-[6px] border-[#3289FA]"
                           style={{ backgroundImage: "url('/announcement-bg.png')" }}
                        >
                           <img src="/notice.svg" alt="notice" className="pl-6" />
                        </div>
                        <div className="py-4 pl-6 pr-1 relative">
                           <div className="h-[332px] overflow-auto pr-4 text-pretty">
                              <div className="min-h-[196px] text-base font-medium leading-7 tracking-normal">
                                 <p>At present, some contents in the WIKI site are still being filled. If the commander finds errors during use, he can use [Player Error Correction] to submit supplementary submissions.</p>
                                 <br />
                                 <p>If you encounter any problems during use, you can submit feedback to us through the following entrance. Thank you again, commander, for your support of the Ku Block WIKI.</p>
                              </div>
                              <Link to="#">
                                 <div
                                    className="w-full mt-2 p-2 bg-no-repeat bg-[length:100%_100%] flex justify-start"
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
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-between mt-5">
                     <div className="main-components">
                        <div className="home-module">
                           <div className="module-title">
                              <div className="title-left">
                                 <div className="title-wrapper">
                                    <span className="title truncate">Quick Navigation</span>
                                    <img src="/title-underline.svg" alt="title-underline" className="title-underline" />
                                 </div>
                              </div>
                              <div className="bottom-line">
                                 <div className="black-block" />
                                 <div className="black-block" />
                              </div>
                           </div>
                           <div className="home-module-ov">
                              <div className="left-line">
                                 <span>PUNISHING</span>
                              </div>
                           </div>
                           <div>
                              <div className="shortcuts-inner">
                                 <div className="shortcuts-card-container">
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/aircrafts.png" alt="aircrafts" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Aircraft Illustrations</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/awareness-manual.png" alt="awareness-manual" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Awareness Manual</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/popular-activities.png" alt="popular-activities" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Popular Activities</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/version-guide.png" alt="version-guide" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Version Guide</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/monster-manual.png" alt="monster-manual" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Monster Manual</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/getting-started.png" alt="getting-started" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Getting Started</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/plot-review.png" alt="plot-review" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Plot Review</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/news.png" alt="news" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">News</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/official-website.png" alt="official-website" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Official Website</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                    <div>
                                       <Link to="#" className="relative">
                                          <div className="shortcuts-card">
                                             <img src="/wallpaper.png" alt="wallpaper" className="content-img" />
                                             <div className="footer">
                                                <p className="text-base font-bold leading-7 text-white text-center m-0 pt-1 px-2 flex items-center justify-center gap-1">
                                                   <span className="truncate">Wallpaper</span>
                                                </p>
                                                <span className="absolute text-[8px] font-bold leading-7 text-[#ffffff1a] tracking-[1em] w-full text-center bottom-0.5 pointer-events-none">
                                                   PUNISHING
                                                </span>
                                                <div className="footer-text-underline transition-all pointer-events-none ease-linear duration-300 absolute w-16 h-[3px] bg-[#0f71bc] bottom-1 left-1/2 -translate-x-1/2" />
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="main-components">
                           <div className="home-module">
                              <div className="module-title">
                                 <div className="title-left">
                                    <div className="title-wrapper">
                                       <span className="title truncate">Illustrations</span>
                                       <img src="/title-underline.svg" alt="title-underline" className="title-underline" />
                                    </div>
                                 </div>
                                 <div className="bottom-line">
                                    <div className="black-block" />
                                    <div className="black-block" />
                                 </div>
                              </div>
                              <div className="home-module-ov">
                                 <div className="left-line">
                                    <span>PUNISHING</span>
                                 </div>
                              </div>
                              <div className="module-content">
                                 <div className="home-catalogue-component">
                                    <div className="catalog-item-scroll">
                                       <div className="catalog-item-wrapper">
                                          <Tabs defaultActiveKey="1" items={items} />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <footer className="pb-6 text-[#333333] bg-[#edeeed]" style={{ backgroundImage: "url('/footer-bg.png')" }}>
                     <div className="w-[1280px] my-0 mx-auto flex overflow-hidden bg-[#edeeed]">
                        <div className="grow-0 shrink-0 basis-[400px]">
                           <div className="mt-20 relative w-[252px] h-[72px] box-content">
                              <img src="/logo-footer.svg" alt="footer-logo" className="size-full" />
                           </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                           <div className="pt-9 px-0 pb-6 flex flex-wrap justify-between leading-5">
                              <div className="flex-none opacity-50">
                                 <span>Copyright©2024Guangzhou Kuro Technology Co., Ltd.</span>
                              </div>
                           </div>
                           <div className="h-[2px] bg-no-repeat w-full" style={{ backgroundImage: "url('/seperate-line.png')" }}></div>
                           <div className="mt-6 flex justify-between *:basis-[240px]">
                              <section>
                                 <h2 className="font-bold">LINK</h2>
                                 <ul>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Kuro Game</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Official Website</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Wuthering Waves</Link>
                                    </li>
                                 </ul>
                              </section>
                              <section>
                                 <h2 className="font-bold">ABOUT</h2>
                                 <ul>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>About Us</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Contact Kuro</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Join Kuro</Link>
                                    </li>
                                 </ul>
                              </section>
                              <section>
                                 <h2 className="font-bold">INFORMATION</h2>
                                 <ul>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>User Agreement</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Privacy Policy</Link>
                                    </li>
                                    <li className="mt-1.5">
                                       <Link to='/' className="opacity-50 cursor-pointer hover:text-[#14c4bc] transition duration-200" target='_blank'>Children's Agreement</Link>
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
      </Layout>
   )
}

export default Home