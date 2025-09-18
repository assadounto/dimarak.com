'use client';
import React from 'react';
// import { useTheme } from '@/context/ThemeContextProvider';
import { IoArrowForward } from 'react-icons/io5';

interface HeaderWithActionProps {
  title: string;
  actionText: string;
  onActionPress?: () => void;
  showAction?: boolean;
}

const HeaderWithActionWeb: React.FC<HeaderWithActionProps> = ({
  title,
  actionText,
  onActionPress,
  showAction = true
}) => {
  // //   const themeContext = useTheme();
  //   if (!themeContext) return null;

  //   const { theme, isDarkMode } = themeContext;
  const isDarkMode = false;
  return (
    <div
      className={`flex items-center justify-between pb-2 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
      style={{ fontFamily: 'inherit' }}
    >
      <h2 className='text-2xl font-bold text-black dark:text-white'>{title}</h2>

      {showAction && (
        <button
          onClick={onActionPress}
          className='flex items-center text-black transition-colors hover:text-blue-800 dark:text-white'
          aria-label={actionText}
          type='button'
        >
          <span className='mr-1 text-sm font-semibold'>{actionText}</span>
          <IoArrowForward size={18} />
        </button>
      )}
    </div>
  );
};

export default HeaderWithActionWeb;
