import React from 'react';
import { PiTrashLight } from 'react-icons/pi';
import Image from 'next/image';
import { useCartWishlist } from '@/context/CartWishlistContext';
import { ProductType } from '@/data_types/product_type';

interface Props {
  item: ProductType;
  handleAddToCart: (id: string) => void;
}
const WishlistCard: React.FC<Props> = ({ item, handleAddToCart }) => {
  const { removeFromWishlist } = useCartWishlist();
  const discountPercentage = item.discountPrice ? item.discountPrice : 0;
  const discountPrice =
    item.price - Number(discountPercentage / 100) * item.price;
  return (
    <div
      key={item.id}
      className='relative w-full rounded border-0 border-gray-300/70 p-0 pb-6 sm:border sm:p-4'
    >
      <PiTrashLight
        className='absolute right-0 top-0 cursor-pointer text-xl sm:right-4 sm:top-3'
        onClick={() => removeFromWishlist(item.id)}
      />
      <div className='flex gap-4 md:h-full'>
        <div className='h-45 relative w-2/5 max-w-[230px] shrink-0 md:h-80'>
          <Image
            src={item.imagesUrl[0].url}
            alt='cart image'
            fill
            sizes='(max-width: 768px) 100vw, 128px'
            className='object-cover'
          />
        </div>

        <div className='flex flex-col md:h-full md:justify-between'>
          <p className='font-bold'>Afrogarm</p>
          <p className='text-zinc-600'>{item.name}</p>
          <div className='my-4 flex items-center gap-2 text-sm font-semibold'>
            {item.discountPrice ? (
              <>
                <span className='text-red-600'>
                  £{discountPrice.toFixed(2)}
                </span>
                <span className='font-normal text-gray-500 line-through'>
                  £{item.price.toFixed(2)}
                </span>
                <span className='font-medium text-red-500'>
                  | {Number(discountPercentage).toFixed(2)}% OFF
                </span>
              </>
            ) : (
              <span className='text-gray-900'>£{item.price.toFixed(2)}</span>
            )}
          </div>

          <p className='mb-1 flex items-center gap-1'>
            <span className='text-zinc-600'>Colour:</span>
            <span className='font-bold'>{item.color}</span>
          </p>

          {/* Desktop view Choose sizing */}
          <div className='mb-6 mt-auto hidden md:block'>
            {/* Size Select */}
            {/* <p className="flex items-center gap-1 mb-1">
            <span className="text-zinc-600">Size:</span>
            <span className="font-bold">
              {selectedSizes[item.name] ? item.size : ""}
            </span>
          </p>
          <div className="relative w-54 cursor-pointer mb-2 ">
            <select
              className="p-4 border w-full appearance-none text-zinc-600 border-gray-300/70 outline-0 focus:outline focus:black rounded"
              value={selectedSizes[item.name] || ""}
              onChange={(e) => {
                handleSizeChange(item.name, e.target.value);
                setSize(item.name, e.target.value);
              }}
            >
              <option value="" disabled>
                Select a size
              </option>
              {item.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div> */}

            <button
              type='submit'
              disabled={item.size?.name == null}
              onClick={() => handleAddToCart(item.name)}
              className='max-w-54 flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-gray-700 py-3 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400'
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view Choose sizing */}
      <div className='mt-4 block md:hidden'>
        {/* Size Select */}
        <p className='mb-1 flex items-center gap-1'>
          <span className='text-zinc-600'>Size:</span>
          <span className='font-bold'>{item.size?.name}</span>
        </p>
        {/* <div className="relative w-full md:w-60  cursor-pointer mb-2 ">
        <select
          className="p-4 border w-full appearance-none text-zinc-600 border-gray-300/70 outline-0 focus:outline focus:black rounded"
          value={selectedSizes[item.name] || ""}
          onChange={(e) => {
            handleSizeChange(item.name, e.target.value);
            setSize(item.name, e.target.value);
          }}
        >
          <option value="" disabled>
            Select a size
          </option>
          {item.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div> */}

        <button
          type='submit'
          disabled={item.size?.name == null}
          onClick={() => handleAddToCart(item.name)}
          className='flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-gray-700 py-3 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 md:w-40'
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
