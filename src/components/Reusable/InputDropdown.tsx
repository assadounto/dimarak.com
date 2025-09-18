'use client';

import Image from 'next/image';
import { useState } from 'react';

interface InputDropdownProps {
  name: string;
}

const InputDropdown: React.FC<InputDropdownProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-transparent flex justify-between items-center px-3 py-2 w-full text-BlackColor border border-borderColor rounded-full"
      >
        <span>{name}</span>
        <Image
          src="/gridicons_dropdown.svg"
          alt="Dropdown"
          width={20}
          height={20}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-primaryColor border border-sidebarRightBg rounded-lg shadow-lg z-10">
          <ul>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
