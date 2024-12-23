import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { aircraftData } from "../Data/AircraftData"
import { Tabs, Collapse } from 'antd';
import '../Css/Single.css'

import type { TabsProps } from 'antd';
import { useEffect } from "react";

type LeapSkills = {
   id: number,
   name: string,
   icon: string,
   description: string
}

const SingleAircraft = () => {
   const { id } = useParams()

   const selectedCharacter = aircraftData?.find((character) => character.id === Number(id))
   const selectedCharacterLeapSkills: LeapSkills | any = selectedCharacter?.skills.leapSkills

   let modifiedText: any = (text: string) => text?.toLowerCase().replace(/ /g, '-');

   const renderDescription = (description: string, color: string) => {
      return description.split('\n').map((line, lineIndex) => (
         <span key={lineIndex} className="first:text-[#24baff] first:font-medium">
            {line.split(/(\d+\.\d+%?)|(\d+?s?)/g).map((part, partIndex) => {
               if (/^\d+\.\d+%?$/.test(part)) {
                  return (
                     <span key={partIndex} style={{ color: color }}>
                        {part}
                     </span>
                  );
               }

               if (/(\d+)|(\d+)?%/g.test(part)) {
                  return (
                     <span key={partIndex} style={{ color: color }}>
                        {part}
                     </span>
                  );
               }
               return part;
            })}
            <br />
         </span>
      ));
   };

   const items: TabsProps['items'] = [
      {
         key: 'tab1',
         label: 'Information',
         children:
            <div>
               <div className="mb-2">
                  <div className="bg-[#d2d2d24d] text-base pl-3 py-1 font-semibold tracking-wide">
                     <span>Features</span>
                  </div>
                  <div className="py-2 px-3 bg-[#ffffff80]">
                     <table className="w-full border-0 *:align-middle">
                        <tr className="text-xs sm:text-sm *:text-[#666] *:pr-3 border-b border-slate-300 *:pb-1">
                           <td className="whitespace-nowrap"><span>{selectedCharacter && Object.keys(selectedCharacter.features)[0]}</span></td>
                           <td><span>{selectedCharacter && Object.values(selectedCharacter.features)[0]}</span></td>
                        </tr>
                        <tr className="text-xs sm:text-sm *:text-[#666] *:pr-3 *:pt-1">
                           <td className="whitespace-nowrap"><span>{selectedCharacter && Object.keys(selectedCharacter.features)[1]}</span></td>
                           <td><span>{selectedCharacter && Object.values(selectedCharacter.features)[1]}</span></td>
                        </tr>
                     </table>
                  </div>
               </div>
               <div>
                  <div className="bg-[#d2d2d24d] text-base pl-3 py-1 font-semibold tracking-wide">
                     <span>Elements</span>
                  </div>
                  <div className="py-2 px-3 bg-[#ffffff80] text-lg flex gap-4">
                     {selectedCharacter?.elements.map((element, index) => (
                        <div className="flex items-center w-1/2" key={index}>
                           <img src={`/filter/aircraft/element/${element}.png`} alt="element" className="size-8 sm:size-16 invert inline-block" />
                           <span className="capitalize font-semibold text-base sm:text-lg">{element}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         ,
      },
      {
         key: 'tab2',
         label: 'Stats',
         children:
            <div className="bg-white w-full flex flex-col gap-4 py-3 px-4">
               <div className="flex justify-between truncate">
                  <div className="flex gap-2 items-center font-semibold truncate sm:text-lg text-[#666]">
                     <img src="/health.png" alt="health" className="size-[18px]" />
                     <span>Life/HEALTH</span>
                  </div>
                  <div className="flex gap-2 items-center truncate sm:text-lg text-[#333]">
                     <span>{selectedCharacter?.stats.health}</span>
                  </div>
               </div>
               <div className="flex justify-between truncate">
                  <div className="flex gap-2 items-center font-semibold truncate sm:text-lg text-[#666]">
                     <img src="/attack.png" alt="attack" className="size-[18px]" />
                     <span>Attack/ATK</span>
                  </div>
                  <div className="flex gap-2 items-center truncate sm:text-lg text-[#333]">
                     <span>{selectedCharacter?.stats.attack}</span>
                  </div>
               </div>
               <div className="flex justify-between truncate">
                  <div className="flex gap-2 items-center font-semibold truncate sm:text-lg text-[#666]">
                     <img src="/defense.png" alt="defense" className="size-[18px]" />
                     <span>Defense/DEF</span>
                  </div>
                  <div className="flex gap-2 items-center truncate sm:text-lg text-[#333]">
                     <span>{selectedCharacter?.stats.defense}</span>
                  </div>
               </div>
               <div className="flex justify-between truncate">
                  <div className="flex gap-2 items-center font-semibold truncate sm:text-lg text-[#666]">
                     <img src="/crit.png" alt="crit" className="size-[18px]" />
                     <span>Critial Hit</span>
                  </div>
                  <div className="flex gap-2 items-center truncate sm:text-lg text-[#333]">
                     <span>{selectedCharacter?.stats.crit}</span>
                  </div>
               </div>
            </div>
         ,
      },
      {
         key: 'tab3',
         label: 'File',
         children:
            <div className="bg-white w-full flex flex-col gap-2 py-2.5 px-4">
               <div className="flex justify-center">
                  <div className="min-w-32 font-semibold text-lg text-[#333] text-center" style={{ backgroundImage: 'repeating-linear-gradient(-65deg, #1b374f0a 0, #1b374f0a 6px, transparent 6px, transparent 12px)' }}>
                     <span>{selectedCharacter && selectedCharacter.name.split(' ')[0]}</span>
                  </div>
               </div>
               <div className="mt-1 w-full flex justify-center items-center">
                  <div className="w-1/2 bg-[#0000001a] h-[1px] after:content-[''] after:block after:h-full after:w-1 after:bg-[#000000cc]" />
                  <div className="shrink-0 min-w-36 text-center text-base text-[#8c95a3]">
                     <span>{selectedCharacter && selectedCharacter.name.substring(selectedCharacter.name.indexOf(" ") + 1)}</span>
                  </div>
                  <div className="w-1/2 bg-[#0000001a] h-[1px] before:content-[''] before:block before:h-full before:w-1 before:ml-auto before:bg-[#000000cc]" />
               </div>
               <div className="mt-1 flex flex-col gap-2">
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Launch Day</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.file.launchDay}</span>
                  </div>
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Height</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.file.height}</span>
                  </div>
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Weight</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.file.weight}</span>
                  </div>
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Circulating fluid type</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.file.fluidType}</span>
                  </div>
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Mental age</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.file.mentalAge} years old</span>
                  </div>
               </div>
            </div>
         ,
      },
      {
         key: 'tab4',
         label: 'Materials',
         children:
            <div className="w-full flex flex-col gap-4 py-2.5 px-4">
               <div className="flex flex-wrap my-0 max-auto gap-3 justify-center">
                  <div className="flex flex-col gap-1">
                     <span className="text-[#8c95a3] text-center">Weapon type</span>
                     <div className="size-[83px] bg-[#ffffff80] flex items-center justify-center">
                        <img src={`/filter/weapon/${modifiedText(selectedCharacter?.weapon.type)}.png`} alt="weapon-type" className="max-w-full max-h-full object-cover" />
                     </div>
                     <span className="w-[83px] text-center whitespace-wrap">{selectedCharacter?.weapon.type}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-[#8c95a3] text-center">Signature</span>
                     <div className="size-[83px] bg-[#ffffff80] flex items-center justify-center">
                        <img src={selectedCharacter?.weapon.image} alt="signature" className="max-w-full max-h-full object-cover" />
                     </div>
                     <span className="w-[83px] text-center whitespace-wrap">{selectedCharacter?.weapon.signature}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-[#8c95a3] text-center">Affiliation</span>
                     <div className="size-[83px] bg-[#ffffff80] flex items-center justify-center">
                        <img src={`/affiliation/${modifiedText(selectedCharacter?.information.affiliation)}.png`} alt="affiliation" className="max-w-full max-h-full object-cover" />
                     </div>
                     <span className="w-[83px] text-center whitespace-wrap">{selectedCharacter?.information.affiliation}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-[#8c95a3] text-center">Gift</span>
                     <div className="size-[83px] bg-[#ffffff80] flex items-center justify-center">
                        <img src={`/prop/${modifiedText(selectedCharacter?.information.gift)}.png`} alt="gift" className="max-w-full max-h-full object-cover" />
                     </div>
                     <span className="w-[83px] text-center whitespace-wrap">{selectedCharacter?.information.gift}</span>
                  </div>
               </div>
            </div>,
      },
   ];

   const skillItems: TabsProps['items'] = [
      {
         key: '1',
         label: 'Basic skills',
         children:
            <table className="w-full">
               <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                  <tr>
                     <td className="text-center align-middle w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.basicSkills[0].icon} alt="b1" />
                        <p className="text-[#ed5563] font-medium">{selectedCharacter?.skills.basicSkills[0].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.basicSkills[0].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.basicSkills[1].icon} alt="b2" />
                        <p className="text-[#e79451] font-medium">{selectedCharacter?.skills.basicSkills[1].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.basicSkills[1].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.basicSkills[2].icon} alt="b3" />
                        <p className="text-[#548bf0] font-medium">{selectedCharacter?.skills.basicSkills[2].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.basicSkills[2].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.basicSkills[3].icon} alt="b4" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.basicSkills[3].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.basicSkills[3].description ?? '', 'red')}
                     </td>
                  </tr>
               </tbody>
            </table>
      },
      {
         key: '2',
         label: 'Special skills',
         children:
            <table className="w-full">
               <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                  <tr>
                     <td rowSpan={2} className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.specialSkills[0].icon} alt="s1" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.specialSkills[0].name}</p>
                     </td>
                     <td>
                        <img src={selectedCharacter?.skills.specialSkills[0]?.corePassive} alt="core-passive" className="w-fit sm:w-[500px]" />
                     </td>
                  </tr>
                  <tr>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.specialSkills[0].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.specialSkills[1].icon} alt="s2" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.specialSkills[1].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.specialSkills[1].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.specialSkills[2].icon} alt="s3" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.specialSkills[2].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.specialSkills[2].description ?? '', 'red')}
                     </td>
                  </tr>
               </tbody>
            </table>
      },
      {
         key: '3',
         label: 'Common effects',
         children:
            <table className="w-full">
               <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.commonEffects[0].icon} alt="c1" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.commonEffects[0].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.commonEffects[0].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.commonEffects[1].icon} alt="c2" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.commonEffects[1].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.commonEffects[1].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.commonEffects[2].icon} alt="c3" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.commonEffects[2].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.commonEffects[2].description ?? '', 'red')}
                     </td>
                  </tr>
               </tbody>
            </table>
      },
      {
         key: '4',
         label: 'Evolution effects',
         children:
            <table className="w-full">
               <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.evolutionEffects[0].icon} alt="e1" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.evolutionEffects[0].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.evolutionEffects[0].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.evolutionEffects[1].icon} alt="e2" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.evolutionEffects[1].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.evolutionEffects[1].description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacter?.skills.evolutionEffects[2].icon} alt="e3" />
                        <p className="text-white font-medium">{selectedCharacter?.skills.evolutionEffects[2].name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacter?.skills.evolutionEffects[2].description ?? '', 'red')}
                     </td>
                  </tr>
               </tbody>
            </table>
      },
   ];

   const skinItems: TabsProps['items'] = selectedCharacter?.skins?.map((skin) => {
      return {
         key: skin.id.toString(),
         label: skin.name || 'Skin',
         children:
            <div className="flex flex-col">
               <div className="w-full sm:w-1/2 md:w-2/3 mx-auto">
                  <img src={selectedCharacter?.skins[skin.id - 1].image} alt={selectedCharacter?.skins[skin.id - 1].name} className="size-full object-contain" />
               </div>
               <table className="w-full">
                  <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                     <tr>
                        <td rowSpan={2} className="text-center align-middle">
                           <img src={selectedCharacter?.skins[skin.id - 1].icon} alt={selectedCharacter?.skins[skin.id - 1].name} className="min-w-[100px] min-h-[100px] size-[100px]" />
                           <img src={`/supply-${selectedCharacter?.skins[skin.id - 1].star}.png`} alt="star" className="min-w-[100px] w-[100px]" />
                        </td>
                        <td>
                           <span className="font-medium">{selectedCharacter?.skins[skin.id - 1].name}</span>
                        </td>
                     </tr>
                     <tr>
                        <td className="text-left">
                           {selectedCharacter?.skins[skin.id - 1].description}
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2} className="text-left">
                           <strong>How to obtain: </strong>
                           {selectedCharacter?.skins[skin.id - 1].howToObtain}
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>,
      };
   }) || []

   if (Array.isArray(selectedCharacter?.skills.leapSkills) && selectedCharacter?.skills.leapSkills !== undefined && selectedCharacter?.skills.leapSkills.length > 0) {
      skillItems.push({
         key: '5',
         label: 'Leap skills',
         children:
            <table className="w-full">
               <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacterLeapSkills?.icon ?? ''} alt="l1" />
                        <p className="text-white font-medium">{selectedCharacterLeapSkills?.name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacterLeapSkills?.description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacterLeapSkills?.icon} alt="l2" />
                        <p className="text-white font-medium">{selectedCharacterLeapSkills?.name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacterLeapSkills?.description ?? '', 'red')}
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center align-middle bg-[#4d5864] w-24 *:py-1.5 *:w-[70px] *:mx-auto">
                        <img src={selectedCharacterLeapSkills?.icon} alt="l3" />
                        <p className="text-white font-medium">{selectedCharacterLeapSkills?.name}</p>
                     </td>
                     <td className="text-left">
                        {renderDescription(selectedCharacterLeapSkills?.description ?? '', 'red')}
                     </td>
                  </tr>
               </tbody>
            </table>
         ,
      });
   }

   const archivalItems: TabsProps['items'] = [
      {
         key: '1',
         label: 'Good feeling plot',
         children:
            <div className="w-full text-[#333] text-center align-middle hover:text-[#1db5b8] cursor-pointer">
               <span className="text-lg sm:text-2xl md:text-xl lg:text-2xl font-bold">Click to view the favorability plot&gt;&gt;</span>
            </div>
      },
      {
         key: '2',
         label: 'Material',
         children:
            <table className="w-full">
               {selectedCharacter?.archives?.material.map((material) => (
                  <tbody key={material.id} className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                     <tr>
                        <th className="bg-[#4d5864] text-white font-medium text-center text-sm">
                           No.00{material.id} Trust <span className="text-[#ea9034]">Level {material.id} </span>Unlock
                        </th>
                     </tr>
                     <tr>
                        <td className="text-left whitespace-pre-line text-sm">
                           {material.content}
                        </td>
                     </tr>
                  </tbody>
               ))}
            </table>
      },
      {
         key: '3',
         label: 'Secret',
         children:
            <table className="w-full">
               <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                  {selectedCharacter?.archives?.secrets.map((secret) => (
                     <tr key={secret.id}>
                        <th className="bg-[#4d5864] text-white text-sm font-medium text-center align-middle w-1/4 min-w-[90px] *:py-1.5">
                           <p>Secret of {selectedCharacter?.name} {secret.id}</p>
                           <p className="text-xs">Unlocked at Trust <span className="text-[#ea9034]">Level {secret.unlockedAt}</span></p>
                        </th>
                        <th className="font-normal text-left w-3/4 text-sm">
                           <p>{secret.content}</p>
                        </th>
                     </tr>
                  ))}
               </tbody>
            </table>
      },
   ]

   const voiceItems: TabsProps['items'] = selectedCharacter?.voices?.map((voice, index) => {
      return {
         key: index.toString(),
         label: voice,
         children: ''
      };
   }) || []

   const equipmentItems: TabsProps['items'] = [
      {
         key: '1',
         label: 'Awareness Recommendation',
         children:
            <div className="overflow-x-auto scrollbar-hide">
               <table className="w-full">
                  <colgroup>
                     <col className="min-w-52" />
                     <col className="min-w-44" />
                     <col className="min-w-44" />
                     <col className="min-w-44" />
                     <col className="min-w-44" />
                     <col className="min-w-44" />
                  </colgroup>
                  {selectedCharacter?.equipment.awareness.map((set, index) => (
                     <tbody key={index} className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                        <tr className="*:align-middle *:text-center *:*:mx-auto h-36">
                           <td rowSpan={3}>
                              <span className="text-[#7e8c8d] text-lg">{set.title}</span>
                           </td>
                           <td className="bg-[#34495e]">
                              <img src={`/awareness/${set.set4.name}/14.png`} alt={set.set4.name} className="size-[100px]" />
                           </td>
                           <td className="bg-[#34495e]">
                              <img src={`/awareness/${set.set2.name}/14.png`} alt={set.set2.name} className="size-[100px]" />
                           </td>
                           <td rowSpan={set.resonance.length === 1 ? 2 : 1} className="bg-[#34495e]">
                              {set.resonance.length === 1 && <span className="py-1.5 text-white text-2xl">{set.resonance[0]}</span>}
                              {set.resonance.length === 2 &&
                                 <div className="w-full flex justify-between items-center text-white">
                                    <img src={`/awareness/${set.resonance[0]}/14.png`} alt="" />
                                    or
                                    <img src={`/awareness/${set.resonance[1]}/14.png`} alt="" />
                                 </div>
                              }
                           </td>
                           <td className="bg-[#34495e]">
                              <img src={set.set4.resonanceImg} alt={set.set4.resonance} className="size-[60px]" />
                           </td>
                           <td className="bg-[#34495e]">
                              <img src={set.set2.resonanceImg} alt={set.set2.resonance} className="size-[60px]" />
                           </td>
                        </tr>
                        <tr className="*:align-middle *:text-center *:*:mx-auto h-11 text-[#7e8c8d]">
                           <td className="capitalize">{set.set4.name} &#10799;4</td>
                           <td className="capitalize">{set.set2.name} &#10799;2</td>
                           {set.resonance.length === 2 && <td className="capitalize">{set.resonance.join(' / ')}</td>}
                           <td className="capitalize">{set.set4.resonance} &#10799;6</td>
                           <td className="capitalize">{set.set2.resonance} &#10799;6</td>
                        </tr>
                        <tr>
                           <td colSpan={5} className="align-middle text-center mx-auto h-11 text-[#2d49e0] font-medium">
                              Note: {set.note}
                           </td>
                        </tr>
                     </tbody>
                  ))}
               </table>
            </div>
      },
      {
         key: '2',
         label: 'Weapon Recommendations',
         children:
            <div className="overflow-x-auto scrollbar-hide">
               <table className="w-full">
                  <colgroup>
                     <col className="min-w-56" />
                     <col className="min-w-[140px]" />
                     <col className="min-w-60" />
                     <col className="min-w-60" />
                     <col className="min-w-60" />
                  </colgroup>
                  <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                     <tr className="*:align-middle *:text-center *:*:mx-auto h-40">
                        <td rowSpan={3}>
                           <img src={selectedCharacter?.weapon.image} alt="signature" className="max-w-full max-h-full object-cover size-[150px]" />
                           <span className="text-[#7e8c8d] text-lg">{selectedCharacter?.weapon.signature}</span>
                        </td>
                        <td rowSpan={2} className="bg-[#34495e]">
                           <span className="py-1.5 text-white text-xl">Weapon Resonance</span>
                        </td>
                        <td className="bg-[#34495e]">
                           <img src={selectedCharacter?.weapon.resonance[0].image} alt={selectedCharacter?.weapon.resonance[0].name} className="size-[60px]" />
                        </td >
                        <td className="bg-[#34495e]">
                           <img src={selectedCharacter?.weapon.resonance[1].image} alt={selectedCharacter?.weapon.resonance[1].name} className="size-[60px]" />
                        </td>
                        <td className="bg-[#34495e]">
                           <img src={selectedCharacter?.weapon.resonance[2].image} alt={selectedCharacter?.weapon.resonance[2].name} className="size-[60px]" />
                        </td>
                     </tr>
                     <tr className="*:align-middle *:text-center *:*:mx-auto h-11 text-[#7e8c8d] text-sm">
                        <td className="capitalize">{selectedCharacter?.weapon.resonance[0].name}</td>
                        <td className="capitalize">{selectedCharacter?.weapon.resonance[1].name}</td>
                        <td className="capitalize">{selectedCharacter?.weapon.resonance[2].name}</td>
                     </tr>
                     <tr className="*:align-middle *:text-center *:*:mx-auto">
                        <td className="bg-[#34495e]">
                           <span className="py-1.5 text-white text-lg">Brief Analysis</span>
                        </td>
                        <td colSpan={3} className="*:text-left *:py-0.5 text-sm text-[#7e8c8d]">
                           {selectedCharacter?.weapon.briefs.map((brief, index) => (
                              <span key={index} className="block">{brief}</span>
                           ))}
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} className="align-middle text-center mx-auto h-11 text-[#2d49e0] font-medium">
                           Note: {selectedCharacter?.weapon.note}
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div >
      },
      {
         key: '3',
         label: 'Auxiliary machine recommendation',
         children:
            <div className="overflow-x-auto scrollbar-hide">
               <table className="w-full">
                  <colgroup>
                     <col className="min-w-[200px]" />
                     <col className="min-w-40" />
                     <col className="min-w-[120px]" />
                     <col className="min-w-[120px]" />
                     <col className="min-w-[120px]" />
                     <col className="min-w-[120px]" />
                     <col className="min-w-[120px]" />
                     <col className="min-w-[120px]" />
                  </colgroup>
                  <tbody className="*:*:border *:*:border-[#d9d9d9] *:*:p-3">
                     <tr className="*:align-middle *:text-center *:*:mx-auto h-[120px]">
                        <td rowSpan={3}>
                           <img src={selectedCharacter?.pet.image} alt="pet" className="max-w-full max-h-full object-cover size-[150px] mb-1.5" />
                           <span className="text-[#7e8c8d] text-lg capitalize">{selectedCharacter?.pet.name}</span>
                        </td>
                        <td rowSpan={2} className="bg-[#34495e]">
                           <span className="py-1.5 text-white text-xl">Skills</span>
                        </td>
                        {selectedCharacter?.pet.resonance.map((reso, index) => (
                           <td key={index} className="bg-[#34495e]">
                              <img src={reso.image} alt={reso.name} className="size-[60px]" />
                           </td>
                        ))}
                     </tr>
                     <tr className="*:align-middle *:text-center *:*:mx-auto h-11 text-[#7e8c8d] text-sm">
                        {selectedCharacter?.pet.resonance.map((reso, index) => (
                           <td key={index} className="capitalize">{reso.name}</td>
                        ))}
                     </tr>
                     <tr className="*:align-middle *:text-center *:*:mx-auto">
                        <td className="bg-[#34495e]">
                           <span className="py-1.5 text-white text-lg">Brief Analysis</span>
                        </td>
                        <td colSpan={6} className="*:text-left *:py-0.5 text-sm text-[#7e8c8d]">
                           {selectedCharacter?.pet.briefs.map((brief, index) => (
                              <span key={index} className="block">{brief}</span>
                           ))}
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={8} className="align-middle text-center mx-auto h-11 text-[#2d49e0] font-medium">
                           Note: {selectedCharacter?.pet.note}
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div >
      },
   ]

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <Layout>
         <div className="text-[#333] bg-center bg-cover bg-fixed bg-no-repeat h-full" style={{ backgroundImage: 'url(/catalog-bg.jpg)' }}>
            <div className="max-w-screen-xl flex flex-col justify-center mx-auto my-6 lg:p-12 p-5 gap-6 relative 2xl:rounded-xl bg-white">
               <div className="relative flex items-center bg-gradient-to-r from-gray-200 to-gray-50 outline-none text-[#333] text-2xl font-bold">
                  <div className="inline-block w-2 h-8 bg-[#1b374f] mr-5" />
                  <span className="truncate uppercase">Introduce</span>
               </div>

               {/* MOBILE */}
               <div
                  className="md:hidden grid col-span-1 bg-[length:100%_100%] bg-no-repeat bg-center w-full p-4 lg:p-10 bg-white relative"
                  style={{ backgroundImage: 'url(/role-bg.png)' }}
               >
                  <div className="h-16 w-full bg-[#ffffff66] flex items-center justify-start pl-3 relative">
                     <div className="absolute top-0 left-0 block w-1 h-full bg-[#3289fa]" />
                     <div className="shrink-0 size-12">
                        <img src={selectedCharacter?.icon} alt="icon" className="size-full" />
                     </div>
                     <div className="ml-4 text-[#333] text-sm sm:text-base font-semibold overflow-hidden text-ellipsis">
                        <span>{selectedCharacter?.maxim}</span>
                     </div>
                  </div>

                  <div className="size-full sm:h-[613px] mx-auto relative">
                     <img src={selectedCharacter?.poster} alt="poster" className="size-full object-contain" />
                     <img src={`/filter/aircraft/quality/${selectedCharacter?.information.rank}.png`} alt="rank" className="absolute top-0 right-0 size-1/5 md:w-1/6 md:h-1/5 block sm:hidden" />
                  </div>

                  <div className="flex flex-col mt-4 gap-4">
                     <div className="flex justify-between bg-[#ffffff66] p-3">
                        <div className="flex flex-col gap-6">
                           <div className="flex w-full justify-start">
                              <div className="relative flex items-start justify-center flex-col mr-3 sm:mr-8 w-16">
                                 <div className="size-14 sm:size-20">
                                    <img src='/filter/aircraft/class/attacker.png' alt="class" className="max-w-full max-h-full object-cover" />
                                 </div>
                                 <div className="w-14 sm:w-20 mt-1.5 py-0.5 bg-[#333] text-white text-[10px] sm:text-sm font-semibold text-center">
                                    <span>{selectedCharacter?.information.class}</span>
                                 </div>
                                 <img src="/divider.png" alt="divider" className="absolute h-full w-auto -right-3 sm:-right-8" />
                              </div>
                              <div className="ml-3 sm:ml-5 w-full flex flex-col justify-between">
                                 <div className="w-full text-[#181818] text-xl whitespace-nowrap sm:text-3xl font-semibold">
                                    <span>{selectedCharacter?.name}</span>
                                 </div>
                                 <div className="w-full text-xl sm:text-2xl font-semibold text-[#666]">
                                    <span>{selectedCharacter?.name.split(' ')[0]}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <img src={`/filter/aircraft/quality/${selectedCharacter?.information.rank}.png`} alt="rank" className="size-[110px] hidden sm:block" />
                     </div>
                     <div className="w-full p-3 font-normal text-sm sm:text-base text-[#333] bg-[#ffffff66]">
                        <span>{selectedCharacter?.introduction}</span>
                     </div>
                     <div className="w-full p-3 single-mobile" style={{ backgroundImage: 'linear-gradient(180deg, #e9edf3 0%, #c9d6e7 100%)' }}>
                        <Tabs items={items} />
                     </div>
                  </div>
               </div>
               {/* PC */}
               <div
                  className="md:grid hidden bg-[length:100%_100%] bg-no-repeat bg-center w-full p-10 bg-white relative grid-cols-2"
                  style={{ backgroundImage: 'url(/role-bg.png)' }}
               >
                  <div className="col-span-2 flex justify-between h-full z-10">
                     <div className="flex flex-col gap-6">
                        <div className="flex w-full justify-start">
                           <div className="relative flex items-start justify-center flex-col mr-5 w-16">
                              <div className="size-16">
                                 <img src='/filter/aircraft/class/attacker.png' alt="class" className="max-w-full max-h-full object-cover" />
                              </div>
                              <div className="w-16 mt-1.5 py-0.5 bg-[#333] text-white text-sm font-semibold text-center">
                                 <span>Attacker</span>
                              </div>
                              <img src="/divider.png" alt="divider" className="absolute h-full w-auto -right-5" />
                           </div>
                           <div className="ml-5 w-full flex flex-col justify-between">
                              <div className="w-full text-[#181818] text-4xl font-semibold">
                                 <span>{selectedCharacter?.name}</span>
                              </div>
                              <div className="w-full font-semibold text-[#666]">
                                 <span>{selectedCharacter?.name.split(' ')[0]}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <img src={`/filter/aircraft/quality/${selectedCharacter?.information.rank}.png`} alt="rank" className="size-[118px]" />
                  </div>
                  <div className="col-span-1 flex flex-col gap-6 z-10">
                     <div className="h-16 w-full bg-[#ffffff66] flex items-center justify-start pl-3 relative">
                        <div className="absolute top-0 left-0 block w-1 h-full bg-[#3289fa]" />
                        <div className="shrink-0 size-12">
                           <img src={selectedCharacter?.icon} alt="icon" className="size-full" />
                        </div>
                        <div className="ml-4 text-[#333] text-lg font-semibold overflow-hidden text-ellipsis">
                           <span>{selectedCharacter?.maxim}</span>
                        </div>
                     </div>
                     <div className="w-full p-3 font-normal text-[#333] bg-[#ffffff66]">
                        <span>{selectedCharacter?.introduction}</span>
                     </div>
                     <div className="w-full p-3 single md:h-[440px] lg:h-[323px]" style={{ backgroundImage: 'linear-gradient(180deg, #e9edf3 0%, #c9d6e7 100%)' }}>
                        <Tabs items={items} />
                     </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-1/2 h-[calc(100%-94px)]">
                     <img src={selectedCharacter?.poster} alt="poster" className="size-full object-cover" />
                  </div>
               </div>

               <div className="mx-0 w-full introduce-collapse flex flex-col md:flex-row justify-between gap-6 md:gap-0">
                  <Collapse
                     items={[
                        {
                           key: '1',
                           label: <span className="text-white text-lg tracking-wide">Skills</span>,
                           children:
                              <Tabs items={skillItems} />,
                        },
                     ]}
                     defaultActiveKey={['1']}
                     className="size-full md:w-3/5 lg:w-[70%]"
                     expandIconPosition="end"
                  />
                  <Collapse
                     items={[
                        {
                           key: '1',
                           label: <span className="text-white text-lg tracking-wide">Skins</span>,
                           children:
                              <Tabs items={skinItems} />,
                        },
                     ]}
                     defaultActiveKey={['1']}
                     className="size-full md:w-[calc(40%-24px)] lg:w-[calc(30%-24px)]"
                     expandIconPosition="end"
                  />
               </div>

               <div className="relative flex items-center bg-gradient-to-r from-gray-200 to-gray-50 outline-none text-[#333] text-2xl font-bold">
                  <div className="inline-block w-2 h-8 bg-[#1b374f] mr-5" />
                  <span className="truncate uppercase">Data display</span>
               </div>

               <div className="mx-0 w-full introduce-collapse flex flex-col gap-6">
                  <Collapse
                     items={[
                        {
                           key: '1',
                           label: <span className="text-white text-lg tracking-wide">Archivals Materials</span>,
                           children:
                              <Tabs items={archivalItems} />,
                        },
                     ]}
                     defaultActiveKey={['1']}
                     className="size-full"
                     expandIconPosition="end"
                  />
                  <Collapse
                     items={[
                        {
                           key: '1',
                           label: <span className="text-white text-lg tracking-wide">Character Voices</span>,
                           children:
                              <Tabs items={voiceItems} />,
                        },
                     ]}
                     defaultActiveKey={['1']}
                     className="size-full"
                     expandIconPosition="end"
                  />
               </div>

               <div className="relative flex items-center bg-gradient-to-r from-gray-200 to-gray-50 outline-none text-[#333] text-2xl font-bold">
                  <div className="inline-block w-2 h-8 bg-[#1b374f] mr-5" />
                  <span className="truncate uppercase">Recommended strategies</span>
               </div>

               <div className="mx-0 w-full introduce-collapse flex flex-col gap-6">
                  <Collapse
                     items={[
                        {
                           key: '1',
                           label: <span className="text-white text-lg tracking-wide">Equipment Recommendations</span>,
                           children:
                              <Tabs items={equipmentItems} />,
                        },
                     ]}
                     defaultActiveKey={['1']}
                     className="size-full"
                     expandIconPosition="end"
                  />
               </div>

            </div>
         </div>
      </Layout>
   )
}

export default SingleAircraft