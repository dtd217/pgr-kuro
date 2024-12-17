import { Tabs } from 'antd';
import ListAircraft from './ListAircraft';
import ListAwareness from './ListAwareness';
import ListWeapon from './ListWeapon';
import ListPet from './ListPet';
import ListMonster from './ListMonster';
import ListDormitory from './ListDormitory';
import ListFurniture from './ListFurniture';
import ListProp from './ListProp';
import ListCollection from './ListCollection';

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