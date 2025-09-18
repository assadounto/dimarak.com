import React from 'react';

interface SubContentProps {
  title: string;
  items: string[];
}

const SubContent: React.FC<SubContentProps> = ({ title, items }) => {
  return (
    <div className='max-w-[200px]'>
      {' '}
      {/* Increased width to 250px */}
      <h4 className='mb-3 text-sm font-bold'>{title}</h4>
      <ul className='space-y-2'>
        {items.map((item, index) => (
          <li key={index}>
            <a
              href='#'
              className='text-sm text-gray-700 hover:text-black hover:underline'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubContent;
