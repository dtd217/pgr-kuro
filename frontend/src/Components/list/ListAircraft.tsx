import { Select } from 'antd';

import type { SelectProps } from 'antd';
import { Link } from 'react-router-dom';
import { aircraftData } from '../../Data/AircraftData';
import CardAircraft from '../card/CardAircraft';

const ListAircraft = () => {
   const elementOptions: SelectProps['options'] = [
      { label: 'Fire', value: 'fire' },
      { label: 'Lightning', value: 'lightning' },
      { label: 'Dark', value: 'dark' },
      { label: 'Ice', value: 'ice' },
      { label: 'Physical', value: 'physical' },
      { label: 'Mix', value: 'mix' },
      { label: 'Void', value: 'void' },
   ];

   const typeOptions: SelectProps['options'] = [
      { label: 'Omniframes', value: 'omni' },
      { label: 'Uniframes', value: 'uni' },
      { label: 'Collaborators', value: 'collab' },
   ];

   const qualityOptions: SelectProps['options'] = [
      { label: 'S', value: 's' },
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b' },
   ];

   const classOptions: SelectProps['options'] = [
      { label: 'Attacker', value: 'attacker' },
      { label: 'Tank', value: 'tank' },
      { label: 'Support', value: 'support' },
      { label: 'Amplifier', value: 'amplifier' },
      { label: 'Vanguard', value: 'vanguard' },
      { label: 'Annihilator', value: 'annihilator' },
      { label: 'Observer', value: 'observer' },
   ];

   return (
      <div className="relative flex flex-col">
         <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 mb-5">
            <Select
               mode="tags"
               placeholder="Element"
               maxTagCount={'responsive'}
               options={elementOptions}
               allowClear
            />
            <Select
               mode="tags"
               placeholder="Omniframes/Uniframes/Collaborators"
               maxTagCount={'responsive'}
               options={typeOptions}
               allowClear
            />
            <Select
               mode="tags"
               placeholder="Initial Quality"
               maxTagCount={'responsive'}
               options={qualityOptions}
               allowClear
            />
            <Select
               mode="tags"
               placeholder="Aircraft Class"
               maxTagCount={'responsive'}
               options={classOptions}
               allowClear
            />
         </div>
         <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4">
            {aircraftData.map((character, index) => (
               <CardAircraft character={character} key={index} />
            ))}
         </div>
      </div>
   )
}

export default ListAircraft