import Layout from "../Layout/Layout"
import '../Css/Search.css'
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import ListAircraft from "../Components/list/ListAircraft";

import { useState } from "react";
import ListAwareness from "../Components/list/ListAwareness";
import ListWeapon from "../Components/list/ListWeapon";
import ListPet from "../Components/list/ListPet";
import ListMonster from "../Components/list/ListMonster";
import ListDormitory from "../Components/list/ListDormitory";
import ListFurniture from "../Components/list/ListFurniture";
import ListProp from "../Components/list/ListProp";
import ListCollection from "../Components/list/ListCollection";
import TabMenu from "../Components/TabMenu";

const Search = () => {
   const [data, setData] = useState(<ListAircraft />);

   const items: any[] = [
      {
         key: 'sub1',
         label: 'Illustrations',
         children: [
            { key: 1, label: 'Aircraft Illustrations', icon: <Link to='/search/1' onClick={() => setData(<ListAircraft />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 2, label: 'Awareness Manual', icon: <Link to='/search/2' onClick={() => setData(<ListAwareness />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 3, label: 'Weapon', icon: <Link to='/search/3' onClick={() => setData(<ListWeapon />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 4, label: 'Auxiliary Hangar', icon: <Link to='/search/4' onClick={() => setData(<ListPet />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 5, label: 'Monster Manual', icon: <Link to='/search/5' onClick={() => setData(<ListMonster />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 6, label: 'Dormitory Guide', icon: <Link to='/search/6' onClick={() => setData(<ListDormitory />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 7, label: 'Dormitory furniture', icon: <Link to='/search/7' onClick={() => setData(<ListFurniture />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 8, label: 'Prop Guide', icon: <Link to='/search/8' onClick={() => setData(<ListProp />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 9, label: 'Collections', icon: <Link to='/search/9' onClick={() => setData(<ListCollection />)}><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
         ],
      },
      {
         key: 'sub2',
         label: 'Gameplay Challenges',
         children: [
            { key: 10, label: 'Phantom Pain Cage', icon: <Link to='/search/10'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 11, label: 'War Zone', icon: <Link to='/search/11'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 12, label: 'Multi-dimensional interpretation', icon: <Link to='/search/12'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
         ],
      },
      {
         key: 'sub3',
         label: 'Plot',
         children: [
            { key: 13, label: 'Main storyline', icon: <Link to='/search/13'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 14, label: 'Floating Point Documentary', icon: <Link to='/search/14'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 15, label: 'The Corridor of the Self', icon: <Link to='/search/15'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 16, label: 'Extra News', icon: <Link to='/search/16'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 17, label: 'Old News', icon: <Link to='/search/17'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 18, label: 'Good feelings plot', icon: <Link to='/search/18'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 19, label: 'Golden Vortex', icon: <Link to='/search/19'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 20, label: 'Boundary Convention', icon: <Link to='/search/20'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 21, label: 'Activity gameplay plot', icon: <Link to='/search/21'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 22, label: 'Festival Event Story', icon: <Link to='/search/22'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 23, label: 'Fitting', icon: <Link to='/search/23'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 24, label: 'Linkage', icon: <Link to='/search/24'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 25, label: 'Multi-dimensional interpretation of the plot', icon: <Link to='/search/25'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 26, label: 'Palette Wars', icon: <Link to='/search/26'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
         ],
      },
      {
         key: 'sub4',
         label: 'Archives',
         children: [
            { key: 27, label: 'Profile', icon: <Link to='/search/27'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 28, label: 'Excerpt', icon: <Link to='/search/28'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 29, label: 'Picture album', icon: <Link to='/search/29'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 30, label: 'Nameplate', icon: <Link to='/search/30'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 31, label: 'Communication records', icon: <Link to='/search/31'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 32, label: 'Mail', icon: <Link to='/search/32'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 33, label: 'Achievements Table', icon: <Link to='/search/33'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 34, label: 'Worldview', icon: <Link to='/search/34'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 35, label: 'Setting Set', icon: <Link to='/search/35'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
         ],
      },
      {
         key: 'sub5',
         label: 'Game Guide',
         children: [
            { key: 36, label: 'Version Guide', icon: <Link to='/search/36'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 37, label: 'Getting Started', icon: <Link to='/search/37'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 38, label: 'Role Guide', icon: <Link to='/search/38'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 39, label: 'Gameplay', icon: <Link to='/search/39'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
         ],
      },
      {
         key: 'sub6',
         label: 'Latest News',
         children: [
            { key: 40, label: 'Update Announcement', icon: <Link to='/search/40'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 41, label: 'Version Activity', icon: <Link to='/search/41'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 42, label: 'News', icon: <Link to='/search/42'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 43, label: 'Surrounding Information', icon: <Link to='/search/43'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 44, label: 'Faos Student Union Journal', icon: <Link to='/search/44'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 45, label: 'Emoji activity', icon: <Link to='/search/45'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 46, label: 'Sky Garden Information Center', icon: <Link to='/search/46'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 47, label: 'Celica\'s Intelligence Center', icon: <Link to='/search/47'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 48, label: 'This is art!!', icon: <Link to='/search/48'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
         ],
      },
      {
         key: 'sub7',
         label: 'Theme Video',
         children: [
            { key: 49, label: 'Official Video', icon: <Link to='/search/49'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 50, label: 'Holiday greetings', icon: <Link to='/search/50'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 51, label: 'Body Birth', icon: <Link to='/search/51'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 52, label: 'Emoticons', icon: <Link to='/search/52'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
            { key: 53, label: 'Comics', icon: <Link to='/search/53'><img src="/ant-menu-item-icon.png" alt='item-icon' className="size-4" /></Link> },
         ],
      },
   ];

   const searchId = Number(window.location.pathname.split('/')[2])
   const title = items
      .find(item => item.children && item.children.some((child: any) => child.key === searchId))
      ?.children.find((child: any) => child.key === searchId)?.label;

   return (
      <Layout>
         <div className="text-[#333] bg-center bg-no-repeat h-[100dvh]" style={{ backgroundImage: 'url(/catalog-bg.jpg)' }}>
            <div className="mx-6 py-6 flex flex-col lg:flex-row justify-center gap-4 relative">
               <div className="block lg:hidden"><TabMenu /></div>
               <div className="hidden lg:block">
                  <div className="w-60 rounded-lg bg-white overflow-auto h-[calc(100vh - 108px)]">
                     <div className="text-2xl font-semibold p-5 flex justify-between sticky top-0 bg-white z-[31]">
                        <span>Table of contents</span>
                     </div>
                     <div className="pb-5">
                        <Menu mode="inline" items={items} />
                     </div>
                  </div>
               </div>

               <div className="lg:block hidden h-[100vh] rounded-lg w-full">
                  <div className="min-h-full py-9 px-12 rounded-lg bg-white m-[0_auto_36px] relative bg-center bg-cover">
                     <h1 className="text-[#333] text-[40px] leading-[48px] mb-6">{title}</h1>
                     {data}
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Search