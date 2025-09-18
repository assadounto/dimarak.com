import Image from 'next/image';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const ItemCard = ({ item }: any) => {
  return (
    <div
      className={`card-container flex h-[10rem] items-center justify-between rounded-[10px] border-[1px] border-solid border-gray-200 p-4 dark:border-sidebar-accent`}
    >
      <div className='flex-container flex w-full items-center justify-between gap-[1.2rem]'>
        <div className='outer-container'>
          <div className='image-container h-[8rem] w-[8.5rem] overflow-hidden rounded-[9px]'>
            <img
              src={item.img || item?.imageUrl}
              alt={item.name}
              height={30}
              width={30}
              className='h-full w-full object-cover'
            />
          </div>
        </div>
        <div className='text-container min-w-0'>
          <span className='block truncate text-[1rem] font-semibold text-black dark:text-white'>
            {item.name}
          </span>

          <div className='price-container my-2 flex items-center justify-end gap-1'>
            {item.oldPrice && (
              <span className='block text-[.9rem] font-semibold text-gray-500 line-through'>
                {item.oldPrice}
              </span>
            )}

            <span className='block text-[.9rem] font-semibold text-black dark:text-white'>
              {item.price}
            </span>
          </div>

          <div className='item-container flex items-end justify-end'>
            {item.qty > 0 ? (
              <div className='qty-container flex items-center justify-center rounded-full bg-green-200 px-1 text-[.9rem] text-green-700'>
                <span className='block'>{`Qty: ${item.qty}`}</span>
              </div>
            ) : (
              <div className='qty-container flex w-[6rem] min-w-0 items-center justify-center truncate text-nowrap rounded-full bg-red-200 px-2 py-[.15rem] text-[.7rem] text-red-800'>
                Out of Stock
              </div>
            )}
          </div>

          <div className='flex items-end justify-end'>
            <div className='card-icon-container mt-2 flex w-[8rem] items-center justify-center border-[1px] border-solid border-black p-2 dark:border-gray-400'>
              <FiShoppingCart
                className='text-black dark:text-white'
                size={10}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card-icon-container !hidden xl:flex border-solid border-[1px] border-black  items-center justify-center p-3">
        <FiShoppingCart color="black" />
      </div> */}
    </div>
  );
};

export default ItemCard;
