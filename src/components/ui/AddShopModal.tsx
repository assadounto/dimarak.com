import React from 'react';

interface AddShopProps {
  newShop: any;
  handleInputChange: (data: any) => void;
  setIsModalOpen: (value: boolean) => void;
  handleAddShop: (value: any) => void;
}

const AddShopModal = ({
  newShop,
  handleInputChange,
  setIsModalOpen,
  handleAddShop
}: AddShopProps) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 dark:bg-black'>
        <h3 className='mb-4 text-xl font-bold'>Add New Shop</h3>

        <div className='space-y-4'>
          <div>
            <label className='mb-1 block text-sm font-medium text-gray-700'>
              Shop Name
            </label>
            <input
              type='text'
              name='name'
              value={newShop.name}
              onChange={handleInputChange}
              className='w-full rounded border border-gray-300 bg-transparent p-2'
              required
            />
          </div>

          <div>
            <label className='mb-1 block text-sm font-medium text-gray-700'>
              Image URL
            </label>
            <input
              type='text'
              name='image'
              value={newShop.image}
              onChange={handleInputChange}
              className='w-full rounded border border-gray-300 bg-transparent p-2'
              placeholder='/default-shop.jpg'
            />
          </div>

          <div>
            <label className='mb-1 block text-sm font-medium text-gray-700'>
              Location
            </label>
            <input
              type='text'
              name='location'
              value={newShop.location}
              onChange={handleInputChange}
              className='w-full rounded border border-gray-300 bg-transparent p-2'
            />
          </div>

          <div>
            <label className='mb-1 block text-sm font-medium text-gray-700'>
              Category
            </label>
            <input
              type='text'
              name='category'
              value={newShop.category}
              onChange={handleInputChange}
              className='w-full rounded border border-gray-300 bg-transparent p-2'
            />
          </div>

          <div>
            <label className='mb-1 block text-sm font-medium text-gray-700'>
              Verified
            </label>
            <select
              name='verified'
              value={newShop.verified.toString()}
              onChange={handleInputChange}
              className='w-full rounded border border-gray-300 bg-transparent p-2'
            >
              <option value='false'>No</option>
              <option value='true'>Yes</option>
            </select>
          </div>
        </div>

        <div className='mt-6 flex justify-end space-x-3'>
          <button
            onClick={() => setIsModalOpen(false)}
            className='rounded border border-gray-300 px-4 py-2'
          >
            Cancel
          </button>
          <button
            onClick={handleAddShop}
            disabled={!newShop.name}
            className={`rounded px-4 py-2 text-white dark:text-black ${!newShop.name ? 'cursor-not-allowed bg-black dark:bg-white' : 'bg-blue-900 hover:bg-blue-700'}`}
          >
            Add Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddShopModal;
