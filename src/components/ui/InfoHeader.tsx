// components/NewInClothing.tsx
import React from 'react';
// types.ts
export interface MenuSection {
  title?: string;
  items: string[];
}

export interface NewInClothingProps {
  breadcrumb: string[];
  title: string;
  description: string;
  menuSections: MenuSection[];
}

const InfoHeader: React.FC<NewInClothingProps> = ({
  breadcrumb,
  title,
  description,
  menuSections
}) => {
  return (
    <div className='flex flex-col gap-8 px-4 py-10 font-sans md:flex-row md:px-12'>
      {/* Left Side */}
      <div className='md:w-1/3'>
        <div className='mb-4 text-sm uppercase text-gray-600'>
          {breadcrumb.join(' / ')}
        </div>
        <h2 className='mb-4 text-2xl font-semibold'>{title}</h2>
        <p className='max-w-md text-gray-700'>{description}</p>
      </div>

      {/* Menu Columns */}
      <div className='grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {menuSections.map((section, index) => (
          <div key={index} className='border-l border-gray-200 pl-4'>
            {section.title && (
              <h3 className='mb-2 font-medium text-black'>{section.title}</h3>
            )}
            <ul className='space-y-2'>
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className='cursor-pointer text-sm text-black hover:underline'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoHeader;
