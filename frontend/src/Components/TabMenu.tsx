import { Tabs } from 'antd';
import ListAircraft from './list/ListAircraft';
import ListAwareness from './list/ListAwareness';
import ListWeapon from './list/ListWeapon';
import ListPet from './list/ListPet';
import ListMonster from './list/ListMonster';
import ListDormitory from './list/ListDormitory';
import ListFurniture from './list/ListFurniture';
import ListProp from './list/ListProp';
import ListCollection from './list/ListCollection';

import type { TabsProps } from 'antd';

const TabMenu = () => {
   const items: TabsProps['items'] = [
      {
         key: 'tab1',
         label: 'Aircraft Illustrations',
         children: <ListAircraft />,
      },
      {
         key: 'tab2',
         label: 'Awareness Manual',
         children: <ListAwareness />,
      },
      {
         key: 'tab3',
         label: 'Weapon',
         children: <ListWeapon />,
      },
      {
         key: 'tab4',
         label: 'Auxiliary Hangar',
         children: <ListPet />,
      },
      {
         key: 'tab5',
         label: 'Monster Manual',
         children: <ListMonster />,
      },
      {
         key: 'tab6',
         label: 'Dormitory Guide',
         children: <ListDormitory />,
      },
      {
         key: 'tab7',
         label: 'Dormitory Furniture',
         children: <ListFurniture />,
      },
      {
         key: 'tab8',
         label: 'Prop Guide',
         children: <ListProp />,
      },
      {
         key: 'tab9',
         label: 'Collections',
         children: <ListCollection />,
      },
   ];
   
   return (
      <Tabs items={items} />
   )
}

export default TabMenu