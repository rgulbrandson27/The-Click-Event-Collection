import React from 'react'
import {useState, useEffect} from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  // ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,

  TrashIcon,
} from '@heroicons/react/16/solid'


const CategoryDropDown = ( { setNewCategory  } ) => {

  const [displayedCategory, setDisplayedCategory] = useState("Select Category")

  useEffect(() => {
    setNewCategory(displayedCategory)
  }, [displayedCategory]);

  return (
    <div className="relative">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/4 font-semibold text-gray-200 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            {displayedCategory}
            <ChevronDownIcon className="size-5 fill-white/60" />
        </MenuButton>

        <MenuItems
        className="absolute mt-0 w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-2 text-sm text-white shadow-lg">
        {/* //   transition
        //   anchor="bottom end"
        //   className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        //  */}

{/* // React-cyan-600
// Data-blue-600, 
// Java-orange-500
// JavaScript-amber-400
// TailWind-teal-400
// AI-pink-500 
// DS-violet-600
// FE-fuscia-500
// BE-emerald-600
// Python-green-500 */}
          <MenuItem>
            <button 
            className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("Artificial Intelligence")}>
                <div className="bg-pink-500 rounded-full h-3 w-3 mr-2"></div>
              Artificial Intelligence
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("Back End")}>
            <div className="bg-emerald-600 rounded-full h-3 w-3 mr-2"></div>
              Back End
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("Data")}>
            <div className="bg-blue-600 rounded-full h-3 w-3 mr-2"></div>
              Data
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("Data S&A")}>
            <div className="bg-violet-600 rounded-full h-3 w-3 mr-2"></div>
              Data S&A
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("Front End")}>
            <div className="bg-fuchsia-500 rounded-full h-3 w-3 mr-2"></div>
              Frond End
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("Java")}>
            <div className="bg-orange-500 rounded-full h-3 w-3 mr-2"></div>
              Java
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("JavaScript")}>
            <div className="bg-amber-400 rounded-full h-3 w-3 mr-2"></div>
              JavaScript
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("Python")}>
            <div className="bg-green-500 rounded-full h-3 w-3 mr-2"></div>
              Python
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />

          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("React")}>
            <div className="bg-cyan-600 rounded-full h-3 w-3 mr-2"></div>
              React
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-0.5 px-3 data-[focus]:bg-white/10"
            onClick={() => setDisplayedCategory("Tailwind")}>
              <div className="bg-teal-400 rounded-full h-3 w-3 mr-2"></div>
              Tailwind
            </button>
          </MenuItem>
      
   

        </MenuItems>
      </Menu>
    </div>
  )
}

export default CategoryDropDown;
