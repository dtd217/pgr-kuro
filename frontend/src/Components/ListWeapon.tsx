import { Select } from 'antd';

import type { SelectProps } from 'antd';
import { Link } from 'react-router-dom';
import { weaponData } from '../Data/WeaponData';

const ListWeapon = () => {
   const starOptions: SelectProps['options'] = [
      { label: '★6', value: '6' },
      { label: '★5', value: '5' },
      { label: '★4', value: '4' },
      { label: '★3', value: '3' },
      { label: '★2', value: '2' },
   ];

   const typeOptions: SelectProps['options'] = [
      { label: 'Dual Guns', value: 'dual-guns' },
      { label: 'Katana', value: 'katana' },
      { label: 'Bow', value: 'bow' },
      { label: 'Saw', value: 'saw' },
      { label: 'Greatsword', value: 'greatsword' },
      { label: 'Cannon', value: 'cannon' },
      { label: 'Dagger', value: 'dagger' },
      { label: 'Scythe', value: 'scythe' },
      { label: 'Spear Shield', value: 'spear-shield' },
      { label: 'Gauntlets', value: 'gauntlets' },
      { label: 'Amplifier', value: 'amplifier' },
      { label: 'Gun Set', value: 'gun-set' },
      { label: 'Gunblade', value: 'gunblade' },
      { label: 'Co-Bot', value: 'co-bot' },
      { label: 'Banner Spear', value: 'banner-spear' },
      { label: 'Scepter', value: 'scepter' },
      { label: 'Flute Sword', value: 'flute-sword' },
      { label: 'Mega Saw', value: 'mega-saw' },
      { label: 'Blast Hammer', value: 'blast-hammer' },
      { label: 'Swordstaff', value: 'swordstaff' },
      { label: 'Mantis Blades', value: 'mantis-blades' },
      { label: 'Composite Armaments', value: 'composite-armaments' },
      { label: 'Beam Gunlance', value: 'beam-gunlance' },
      { label: 'Daisho', value: 'daisho' },
      { label: 'Folding Fan', value: 'folding-fan' },
      { label: 'Claw Blades', value: 'claw-blades' },
      { label: 'Robotic Arm', value: 'robotic-arm' },
      { label: 'Halberd Blade', value: 'halberd-blade' },
      { label: 'Trailblade', value: 'trailblade' },
      { label: 'Longsword', value: 'longsword' },
      { label: 'Tactical Headphones', value: 'tactical-headphones' },
      { label: 'Chakram', value: 'chakram' },
      { label: 'Tactical Tonfas', value: 'tactical-tonfas' },
      { label: 'Pipa', value: 'pipa' },
      { label: 'Revolver', value: 'revolver' },
      { label: 'Lustrous Katana', value: 'lustrous-katana' },
      { label: 'Power Arms', value: 'power-arms' },
      { label: 'Charge Blade', value: 'charge-blade' },
      { label: 'Uniframe: Greatsword', value: 'uniframe-greatsword' },
      { label: 'Uniframe: Glaive', value: 'uniframe-glaive' },
      { label: 'Uniframe: Cello Blade', value: 'uniframe-cello-blade' },
      { label: 'Uniframe: Chain Blade', value: 'uniframe-chain-blade' },
      { label: 'Uniframe: Dragon Axe', value: 'uniframe-dragon-axe' },
      { label: 'Uniframe: Rev Blade', value: 'uniframe-rev-blade' },
      { label: 'Katana & Greatsword', value: 'katana-&-greatsword' },
      { label: 'Tactical Lance', value: 'tactical-lance' },
      { label: 'Bladed Cannon', value: 'bladed-cannon' },
      { label: 'Pipa', value: 'pipa' },

   ];

   const testWea = weaponData[0]

   return (
      <div className="relative flex flex-col">
         <div className="glossary-catalog">
            <div className='catalog-tags'>
               <div className="tags">
                  <div className="relative">
                     <Select
                        mode="tags"
                        style={{ width: '180px' }}
                        placeholder="Weapon Stars"
                        maxTagCount={'responsive'}
                        options={starOptions}
                        allowClear
                     />
                  </div>
                  <div className="relative">
                     <Select
                        mode="tags"
                        style={{ width: '180px' }}
                        placeholder="Weapon Type"
                        maxTagCount={'responsive'}
                        options={typeOptions}
                        allowClear
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className='catalog-component-wrapper ml-1'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
               <div className='w-[114px] h-[154px]'>
                  <Link to='#' className="relative">
                     <div className="catalogue-card figure-card">
                        <div className="card-top-right-fixed">
                           <div className="card-skill-attr-box" />
                        </div>
                        <div className="card-outline">
                           <div className="top" />
                           <div className="right" />
                           <div className="bottom" />
                           <div className="left" />
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none" className="bottom-icon">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 14.071L9.92871 13.9997H10.0712L9.99998 14.071ZM17 7.07102L16.0712 7.99973H13.2428L14.1715 7.07102L9.99998 2.89947L5.82843 7.07102L6.75714 7.99973L3.92871 7.99973L3 7.07102L4.41421 5.65681L8.58576 1.48526L9.99998 0.0710449L11.4142 1.48526L15.5857 5.65681L17 7.07102ZM9.99995 4.2426L7.17152 7.07102L9.99995 9.89945L12.8284 7.07102L9.99995 4.2426Z" fill="#00D2D6"></path>
                           </svg>
                        </div>
                        <div className="invalid-status">
                           <div className="card-inner !bg-[#e8e8e8] !bg-[length:100px_100px] !bg-[8px_8px]" style={{ backgroundImage: "url('/type-small-entry-star-normal.svg')" }}>
                              <div className="card-content size-[114px]">
                                 <div className="card-content-inner relative border-8 border-white">
                                    <img src={`/supply-${testWea.star}.png`} alt="supply" className='absolute bottom-0 right-0' />
                                    <img src={testWea.image} alt="image-wp" />
                                 </div>
                              </div>
                              <div className="card-footer w-full h-10 leading-10 px-1 text-center">
                                 <div className="card-footer-inner">
                                    <span>{testWea.name}</span>
                                 </div>
                                 <div className="bottom-left-extra" />
                                 <div className="top-right-extra" />
                                 <div className="mask" />
                                 <div className="bottom-decorate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="3" viewBox="0 0 60 3" fill="none">
                                       <path d="M4.09091 0H55.9091L60 3H0L4.09091 0Z" fill="currentColor">
                                       </path>
                                    </svg>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   )
}

export default ListWeapon