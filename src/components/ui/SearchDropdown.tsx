'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const SearchDropdown = ({ onSelect }: { onSelect: (shop: any) => void }) => {
  // Mock shop data - replace with your actual data source
  const shops = [
    { id: 1, name: 'Fashion Boutique', username: 'fashionboutique' },
    { id: 2, name: 'Tech Haven', username: 'techhaven' },
    { id: 3, name: 'Home Essentials', username: 'homeessentials' },
    { id: 4, name: 'Beauty Spot', username: 'beautyspot' },
    { id: 5, name: 'Sports World', username: 'sportsworld' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedShop, setSelectedShop] = useState<any>(null);

  const filteredShops = shops.filter(
    (shop) =>
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (shop: any) => {
    setSelectedShop(shop);
    onSelect(shop);
    setShowDropdown(false);
    setSearchTerm(shop.name);
  };

  return (
    <div className='relative mb-4'>
      <label className='mb-1 block text-sm font-medium'>Assign to Shop</label>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search shops...'
          className='w-full rounded-md border bg-sidebar-accent/40 p-2 pl-3 pr-8'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        />
        <button
          className='absolute right-2 top-1/2 -translate-y-1/2 transform'
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaChevronDown color='gray' />
        </button>
      </div>

      {showDropdown && (
        <div className='absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-white shadow-lg dark:bg-sidebar-accent'>
          {filteredShops.length === 0 ? (
            <div className='p-2 text-sm text-gray-500'>
              No matching shops found
            </div>
          ) : (
            filteredShops.map((shop) => (
              <div
                key={shop.id}
                className='cursor-pointer p-2 hover:bg-gray-100'
                onClick={() => handleSelect(shop)}
              >
                <div className='font-medium'>{shop.name}</div>
                <div className='text-xs text-gray-500'>@{shop.username}</div>
              </div>
            ))
          )}
        </div>
      )}

      {selectedShop && (
        <div className='mt-2 rounded bg-gray-50 p-2 text-sm'>
          <div>
            Selected: <span className='font-medium'>{selectedShop.name}</span>
          </div>
          <div className='text-gray-500'>@{selectedShop.username}</div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
