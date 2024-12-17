import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { aircraftData } from "../Data/AircraftData"
import { Tabs } from 'antd';
import '../Css/Single.css'

import type { TabsProps } from 'antd';


const SingleAircraft = () => {
   const { id } = useParams()

   const selectedCharacter = aircraftData.find((character) => character.id === Number(id) + 1)

   let modifiedText: any = (text: string) => text.toLowerCase().replace(/ /g, '-');

   const items: TabsProps['items'] = [
      {
         key: 'tab1',
         label: 'Information',
         children:
            <div>
               <div className="mb-2">
                  <div className="bg-[#d2d2d24d] text-sm pl-3 py-1 font-semibold tracking-wide">
                     <span>Features</span>
                  </div>
                  <div className="py-2 px-3 bg-[#ffffff80] text-sm">
                     <table className="w-full border-0 *:align-middle">
                        <tr className="*:text-[#666] *:pr-3 border-b border-slate-300 *:pb-1">
                           <td className="whitespace-nowrap"><span>{selectedCharacter && Object.keys(selectedCharacter.features)[0]}</span></td>
                           <td><span>{selectedCharacter && Object.values(selectedCharacter.features)[0]}</span></td>
                        </tr>
                        <tr className="*:text-[#666] *:pr-3 *:pt-1">
                           <td className="whitespace-nowrap"><span>{selectedCharacter && Object.keys(selectedCharacter.features)[1]}</span></td>
                           <td><span>{selectedCharacter && Object.values(selectedCharacter.features)[1]}</span></td>
                        </tr>
                     </table>
                  </div>
               </div>
               <div>
                  <div className="bg-[#d2d2d24d] text-sm pl-3 py-1 font-semibold tracking-wide">
                     <span>Elements</span>
                  </div>
                  <div className="py-2 px-3 bg-[#ffffff80] text-lg flex gap-4">
                     {selectedCharacter?.elements.map((element, index) => (
                        <div className="flex items-center w-1/2" key={index}>
                           <img src={`/filter/aircraft/element/${element}.png`} alt="element" className="size-16 invert inline-block" />
                           <span className="capitalize font-semibold">{element}</span>
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
                  <div className="flex gap-2 items-center font-semibold truncate text-lg text-[#666]">
                     <img src="/health.png" alt="health" className="size-[18px]" />
                     <span>Life/HEALTH</span>
                  </div>
                  <div className="flex gap-2 items-center truncate text-lg text-[#333]">
                     <span>{selectedCharacter && Array.isArray(selectedCharacter.stats.health) ? selectedCharacter.stats.health[0] + '+' + selectedCharacter.stats.health[1] : ''}</span>
                  </div>
               </div>
               <div className="flex justify-between truncate">
                  <div className="flex gap-2 items-center font-semibold truncate text-lg text-[#666]">
                     <img src="/attack.png" alt="attack" className="size-[18px]" />
                     <span>Attack/ATK</span>
                  </div>
                  <div className="flex gap-2 items-center truncate text-lg text-[#333]">
                     <span>{selectedCharacter && Array.isArray(selectedCharacter.stats.attack) ? selectedCharacter.stats.attack[0] + '+' + selectedCharacter.stats.attack[1] : ''}</span>
                  </div>
               </div>
               <div className="flex justify-between truncate">
                  <div className="flex gap-2 items-center font-semibold truncate text-lg text-[#666]">
                     <img src="/defense.png" alt="defense" className="size-[18px]" />
                     <span>Defense/DEF</span>
                  </div>
                  <div className="flex gap-2 items-center truncate text-lg text-[#333]">
                     <span>{selectedCharacter && Array.isArray(selectedCharacter.stats.defense) ? selectedCharacter.stats.defense[0] + '+' + selectedCharacter.stats.defense[1] : ''}</span>
                  </div>
               </div>
               <div className="flex justify-between truncate">
                  <div className="flex gap-2 items-center font-semibold truncate text-lg text-[#666]">
                     <img src="/crit.png" alt="crit" className="size-[18px]" />
                     <span>Critial Hit</span>
                  </div>
                  <div className="flex gap-2 items-center truncate text-lg text-[#333]">
                     <span>{selectedCharacter && Array.isArray(selectedCharacter.stats.crit) ? selectedCharacter.stats.crit[0] + '+' + selectedCharacter.stats.crit[1] : ''}</span>
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
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.
                        file.launchDay}</span>
                  </div>
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Height</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.
                        file.height}</span>
                  </div>
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Weight</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.
                        file.weight}</span>
                  </div>
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Circulating fluid type</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.
                        file.fluidType}</span>
                  </div>
                  <div className="flex justify-between truncate text-sm">
                     <span className="text-[#515151]">Mental age</span>
                     <span className="text-[#333] min-w-[100px] inline-block text-center bg-[#d9dcdf4d]">{selectedCharacter?.
                        file.mentalAge} years old</span>
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
                        <img src={`/weapons/${modifiedText(selectedCharacter?.weapon.signature)}.png`} alt="signature" className="max-w-full max-h-full object-cover" />
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

   return (
      <Layout>
         <div className="text-[#333] bg-center bg-no-repeat" style={{ backgroundImage: 'url(/catalog-bg.jpg)' }}>
            <div className="max-w-screen-xl flex flex-col justify-center mx-auto my-6 lg:p-12 p-5 gap-6 relative 2xl:rounded-xl bg-white">
               <div className="relative h-6 flex items-center outline-none text-[#333] text-2xl font-bold">
                  <div className="inline-block w-2 h-6 bg-[#1b374f] mr-5" />
                  <span className="truncate uppercase">Introduce</span>
               </div>
               {/* MOBILE */}
               <div
                  className="lg:hidden grid col-span-1 bg-[length:100%_100%] bg-no-repeat bg-center w-full p-4 lg:p-10 bg-white relative"
                  style={{ backgroundImage: 'url(/role-bg.png)' }}
               >
                  <div className="h-16 w-full bg-[#ffffff66] flex items-center justify-start pl-3 relative">
                     <div className="absolute top-0 left-0 block w-1 h-full bg-[#3289fa]" />
                     <div className="shrink-0 size-12">
                        <img src={selectedCharacter?.icon} alt="icon" className="size-full" />
                     </div>
                     <div className="ml-4 text-[#333] text-xl font-semibold overflow-hidden text-ellipsis">
                        <span>{selectedCharacter?.maxim}</span>
                     </div>
                  </div>
                  <div className="sm:h-4/5 md:h-3/5">
                     <img src={selectedCharacter?.poster} alt="poster" className="size-full object-contain" />
                  </div>
                  {/* <div className="col-span-1 flex justify-between h-full z-10">
                     <div className="flex flex-col gap-6">
                        <div className="flex w-full justify-start">
                           <div className="relative flex items-start justify-center flex-col mr-5 w-16">
                              <div className="size-16">
                                 <img src='/filter/aircraft/class/attacker.png' alt="class" className=" max-w-full max-h-full object-cover" />
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
                        <div className="ml-4 text-[#333] text-xl font-semibold overflow-hidden text-ellipsis">
                           <span>{selectedCharacter?.maxim}</span>
                        </div>
                     </div>
                     <div className="w-full p-3 font-normal text-[#333] bg-[#ffffff66]">
                        <span>{selectedCharacter?.introduction}</span>
                     </div>
                     <div className="w-full p-3 single h-[324px]" style={{ backgroundImage: 'linear-gradient(180deg, #e9edf3 0%, #c9d6e7 100%)' }}>
                        <Tabs items={items} />
                     </div>
                  </div> */}

               </div>
               {/* PC */}
               <div
                  className="lg:grid hidden bg-[length:100%_100%] bg-no-repeat bg-center w-full p-10 bg-white relative grid-cols-2"
                  style={{ backgroundImage: 'url(/role-bg.png)' }}
               >
                  <div className="col-span-2 flex justify-between h-full z-10">
                     <div className="flex flex-col gap-6">
                        <div className="flex w-full justify-start">
                           <div className="relative flex items-start justify-center flex-col mr-5 w-16">
                              <div className="size-16">
                                 <img src='/filter/aircraft/class/attacker.png' alt="class" className=" max-w-full max-h-full object-cover" />
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
                        <div className="ml-4 text-[#333] text-xl font-semibold overflow-hidden text-ellipsis">
                           <span>{selectedCharacter?.maxim}</span>
                        </div>
                     </div>
                     <div className="w-full p-3 font-normal text-[#333] bg-[#ffffff66]">
                        <span>{selectedCharacter?.introduction}</span>
                     </div>
                     <div className="w-full p-3 single h-[324px]" style={{ backgroundImage: 'linear-gradient(180deg, #e9edf3 0%, #c9d6e7 100%)' }}>
                        <Tabs items={items} />
                     </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-[calc(100%-94px)]">
                     <img src={selectedCharacter?.poster} alt="poster" className="size-full object-cover" />
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default SingleAircraft