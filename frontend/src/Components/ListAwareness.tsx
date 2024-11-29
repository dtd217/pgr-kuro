import { Select } from 'antd';

import type { SelectProps } from 'antd';
import { Link } from 'react-router-dom';
import { awarenessData } from '../Data/AwarenessData';

const ListAwareness = () => {
   const typeOptions: SelectProps['options'] = [
      { label: 'Omniframes', value: 'omni' },
      { label: 'Uniframes', value: 'uni' },
      { label: 'Collaborators', value: 'collab' },
   ];

   const rarityOptions: SelectProps['options'] = [
      { label: '★6', value: '6' },
      { label: '★5', value: '5' },
      { label: '★4', value: '4' },
      { label: '★3', value: '3' },
      { label: '★2', value: '2' },
   ];

   const testAware = awarenessData[0]

   return (
      <div className="relative flex flex-col">
         <div className="glossary-catalog">
            <div className='catalog-tags'>
               <div className="tags">
                  <div className="relative">
                     <Select
                        mode="tags"
                        style={{ width: '180px' }}
                        placeholder="Omniframes/Uniframes/Collaborators"
                        maxTagCount={'responsive'}
                        options={typeOptions}
                        allowClear
                     />
                  </div>
                  <div className="relative">
                     <Select
                        mode="tags"
                        style={{ width: '180px' }}
                        placeholder="Awareness Star"
                        maxTagCount={'responsive'}
                        options={rarityOptions}
                        allowClear
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className='catalog-component-wrapper ml-1'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
               <div className='w-[calc(50%-12px)] h-[224px]'>
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
                           <div className="card-inner card-star-5 main-card-inner">
                              <div className="card-content w-[376px] h-[160px]">
                                 <div className="card-content-inner pl-5 relative z-[1]">
                                    <div className="card-main-image">
                                       <img src="/supply-5.png" alt="supply" className='bg-[center] bg-[length:100%_100%] bg-no-repeat absolute bottom-0 left-0 w-[102px] h-[25px] z-[1]' />
                                       <img src={testAware.portrait[0].image} alt="awareness" />
                                    </div>
                                    <div className="card-right">
                                       <div className="card-right-title tracking-wide">
                                          <span>{testAware.name}</span>
                                       </div>
                                       <div className="card-right-subtitle">
                                          <span>{testAware.characteristics}</span>
                                       </div>
                                       <div className="card-images *:relative *:*:object-cover">
                                          <div>
                                             <img src={testAware.portrait[0].image} alt="portrait-img" />
                                          </div>
                                          <div>
                                             <img src={testAware.portrait[0].image} alt="portrait-img" />
                                          </div>
                                          <div>
                                             <img src={testAware.portrait[0].image} alt="portrait-img" />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="content-bg" style={{ backgroundImage: `url(${testAware.portrait[0].image})` }} />
                              </div>
                              <div className="card-footer w-full h-16 leading-16 px-5 text-start">
                                 <div className="card-footer-inner text-[#cad5e7] font-normal leading-[22px] size-full flex items-center">
                                    <div className="w-full">
                                       <div className="text-sm not-italic leading-[22px] flex">
                                          <span className="w-28 h-[22px] text-white font-medium inline-block truncate">
                                             {Object.keys(testAware.setSkills)[0]}
                                          </span>
                                          <span className="ml-2 text-[#cad5e7] font-normal w-full inline-block truncate">
                                             {Object.values(testAware.setSkills)[0]}
                                          </span>
                                       </div>
                                       <div className="text-sm not-italic leading-[22px] flex">
                                          <span className="w-28 h-[22px] text-white font-medium inline-block truncate">
                                             {Object.keys(testAware.setSkills)[1]}
                                          </span>
                                          <span className="ml-2 text-[#cad5e7] font-normal w-full inline-block truncate">
                                             {Object.values(testAware.setSkills)[1]}
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="bottom-left-extra" />
                                 <div className="top-right-extra" />
                                 <div className="mask" />
                                 <div className="bottom-decorate -top-[3px] left-0 *:text-[#2a313d]">
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

export default ListAwareness