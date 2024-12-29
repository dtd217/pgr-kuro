import { Select } from 'antd';

import type { SelectProps } from 'antd';
import { Link } from 'react-router-dom';
import { dormitoryData } from '../../Data/DormitoryData';

const ListDormitory = () => {
   const mateOptions: SelectProps['options'] = [
      { label: 'Construct', value: 'Construct' },
      { label: 'Unique Domain', value: 'unique-domain' },
      { label: 'Erosion', value: 'erosion' },
      { label: 'Human', value: 'human' },
      { label: 'Collaborators', value: 'Collaborators' },
   ];

   const testDorm = dormitoryData[0]

   return (
      <div className="relative flex flex-col">
         <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 mb-5">
            <Select
               mode="tags"
               placeholder="Dormitory Mates"
               maxTagCount={'responsive'}
               options={mateOptions}
               allowClear
            />
         </div>
         <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(246px,1fr))] gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
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
                           <path fillRule="evenodd" clipRule="evenodd" d="M9.99998 14.071L9.92871 13.9997H10.0712L9.99998 14.071ZM17 7.07102L16.0712 7.99973H13.2428L14.1715 7.07102L9.99998 2.89947L5.82843 7.07102L6.75714 7.99973L3.92871 7.99973L3 7.07102L4.41421 5.65681L8.58576 1.48526L9.99998 0.0710449L11.4142 1.48526L15.5857 5.65681L17 7.07102ZM9.99995 4.2426L7.17152 7.07102L9.99995 9.89945L12.8284 7.07102L9.99995 4.2426Z" fill="#00D2D6"></path>
                        </svg>
                     </div>
                     <div className="invalid-status">
                        <div className="card-inner bg-no-repeat !bg-[length:100%_100%]" style={{ backgroundImage: "url('/multiple-tag-bg.png')" }}>
                           <div className="card-content !border-none">
                              <div className="card-content-inner relative p-4">
                                 <div
                                    className="size-16 bg-[length:100%_100%]"
                                    style={{ backgroundImage: "url('/multiple-tag-empty.png')" }}
                                 >
                                    <img src="/aircrafts/lucia-lotus/chibi.png" alt="chibi-icon" className='size-full' />
                                 </div>
                                 <div className='card-tags'>
                                    <div className="card-tag tag-type-2">
                                       {/* <i className='catalog-multiple-tags-tag-beauty catalog-multiple-tags-tag' /> */}
                                       <span>{testDorm.tagType[0].charAt(0).toUpperCase() + testDorm.tagType[0].slice(1)}</span>
                                    </div>
                                    <div className="card-tag tag-type-4">
                                       <span>Love</span>
                                    </div>
                                    <div className="card-tag tag-type-0">
                                       {/* <i className='catalog-multiple-tags-tag-comfort catalog-multiple-tags-tag' /> */}
                                       <span>{testDorm.tagType[1].charAt(0).toUpperCase() + testDorm.tagType[1].slice(1)}</span>
                                    </div>
                                    <div className="card-tag tag-type-3">
                                       <span>Favorite</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="card-footer w-full h-10 leading-10 px-1 text-center">
                              <div className="card-footer-inner">
                                 <span>{testDorm.name}</span>
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
            ))}
         </div>
      </div>
   )
}

export default ListDormitory