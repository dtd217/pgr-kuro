import { Select } from 'antd';

import type { SelectProps } from 'antd';
import { Link } from 'react-router-dom';
import { propData } from '../Data/PropData';

const ListProp = () => {
   const classificationOptions: SelectProps['options'] = [
      { label: '★6', value: '6' },
      { label: '★5', value: '5' },
      { label: '★4', value: '4' },
      { label: '★3', value: '3' },
      { label: '★2', value: '2' },
   ];

   const qualityOptions: SelectProps['options'] = [
      { label: '★6', value: '6' },
      { label: '★5', value: '5' },
      { label: '★4', value: '4' },
      { label: '★3', value: '3' },
      { label: '★2', value: '2' },
   ];

   const testProp = propData[0]

   return (
      <div className="relative flex flex-col">
         <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 mb-5">
            <Select
               mode="tags"
               placeholder="Classification"
               maxTagCount={'responsive'}
               options={classificationOptions}
               allowClear
            />
            <Select
               mode="tags"
               placeholder="Quality"
               maxTagCount={'responsive'}
               options={qualityOptions}
               allowClear
            />
         </div>
         <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4'>
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
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 14.071L9.92871 13.9997H10.0712L9.99998 14.071ZM17 7.07102L16.0712 7.99973H13.2428L14.1715 7.07102L9.99998 2.89947L5.82843 7.07102L6.75714 7.99973L3.92871 7.99973L3 7.07102L4.41421 5.65681L8.58576 1.48526L9.99998 0.0710449L11.4142 1.48526L15.5857 5.65681L17 7.07102ZM9.99995 4.2426L7.17152 7.07102L9.99995 9.89945L12.8284 7.07102L9.99995 4.2426Z" fill="#00D2D6"></path>
                        </svg>
                     </div>
                     <div className="invalid-status">
                        <div className="card-inner !bg-[#e8e8e8] !bg-[length:120%_120%] !bg-[80%_80%]" style={{ backgroundImage: "url('/type-small-entry-star-normal.svg')" }}>
                           <div className="card-content">
                              <div className="card-content-inner relative border-8 border-white">
                                 <img src={`/supply-${testProp.star}.png`} alt="supply" className='absolute z-10 w-full bottom-0 right-0' />
                                 <img src={testProp.image} alt="image-wp" />
                              </div>
                           </div>
                           <div className="card-footer w-full h-10 leading-10 px-1 text-center">
                              <div className="card-footer-inner">
                                 <span>{testProp.name}</span>
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

export default ListProp