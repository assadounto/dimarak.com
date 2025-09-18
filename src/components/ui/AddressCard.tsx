import React, { useState } from 'react';
import DeleteSVG from '../svg/delete';
import EditSVG from '../svg/edit';
import { UserType } from '@/data_types/user_type';

const AddressCard = ({
  user,
  onEdit
}: {
  user: UserType | null;
  onEdit: () => void;
}) => {
  const [isDefault, setIsDefault] = useState(false);

  const handleDefaultToggle = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission and page refresh
    setIsDefault(!isDefault); // Toggle the state
  };

  return (
    <div className='my-2 flex flex-col py-3'>
      <div className='mb-3 flex flex-col md:mb-0 md:flex-row md:items-center'>
        <div className='flex-1 font-light'>
          <div className='mb-2 font-semibold'>
            {user?.firstName} {user?.lastName}
          </div>
          <div>{user?.shippingAddress?.address}</div>
          <div></div>
          <div>{user?.shippingAddress?.city}</div>
          <div>{user?.shippingAddress?.country}</div>
          <div className=''>{user?.shippingAddress?.postcode}</div>
          <div className='mb-3'>12345678901</div>
        </div>
        <div className='my-2 flex h-fit gap-6'>
          <button
            className='flex cursor-pointer gap-2'
            onClick={() => onEdit()}
          >
            <EditSVG />
            <span className='font-light'>Edit</span>
          </button>
          <form method='post' action='/account/addresses'>
            {/* <input type="hidden" name="addressId" value="001730ad" /> */}
            <button
              name='formType'
              value='removeAddress'
              className='flex gap-2'
              aria-label='Delete'
            >
              <DeleteSVG />
              <span className='font-light'>Delete</span>
            </button>
          </form>
        </div>
      </div>
      <form onSubmit={handleDefaultToggle} className='flex items-center'>
        <input type='hidden' name='addressId' />
        <button
          type='submit'
          className='flex items-center'
          name='formType'
          value='makeAddressDefault'
          aria-label='Make default'
        >
          <div
            className={`relative rounded-full border-2 ${isDefault ? 'border-blue-500' : 'border-gray-300'} h-6 w-6 focus:outline-none`}
          >
            {isDefault && (
              <div className='absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black'></div>
            )}
          </div>
          <span className='ml-4 text-base font-light'>
            Select as default delivery address
          </span>
        </button>
      </form>
    </div>
  );
};

export default AddressCard;
