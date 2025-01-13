import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'


const CategoryDropDown = ( {onCategorySelect} ) => {

  const handleSelect = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <div className="relative">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/4 font-semibold text-gray-200 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
   
        >
          Primary Category
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
        className="absolute mt-2 w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm text-white shadow-lg">
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
// BE-emerald-600 */}
          <MenuItem>
  
            <button 
              onClick={() => handleSelect('React')}
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <PencilIcon className="size-4 fill-white/30" />
              AI
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <Square2StackIcon className="size-4 fill-white/30" />
              Data/Arch/SQL
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
              Data Structures
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
            </button>
          </MenuItem>

          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <div className="bg-cyan-600 rounded-full w-3/4 h-3/4"></div>
              <div className="text-lg">React</div>
              {/* Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd> */}
            </button>
          </MenuItem>

        </MenuItems>
      </Menu>
    </div>
  )
}

export default CategoryDropDown;
