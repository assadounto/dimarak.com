import React from 'react';
import Image from 'next/image';
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaPinterest
} from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { BsGooglePlay } from 'react-icons/bs';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { QrCode } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='mt-12 border-t bg-white text-sm dark:bg-black'>
      <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-4'>
        <div>
          <h4 className='mb-4 font-semibold'>QUICK LINKS</h4>
          <ul className='space-y-2'>
            <li>Track My Order</li>
            <li>Help Center</li>
            <li>Returns & Refunds</li>
            <li>Shipping & Delivery Info</li>
          </ul>
          <div className='mt-6'>
            <h4 className='mb-2 font-semibold'>COUNTRY</h4>
            <select className='border px-2 py-1'>
              <option>Ghana GH₵</option>
              <option>🇺🇸 United States $</option>
              <option>🇬🇧 United Kingdom £</option>
            </select>
          </div>
        </div>

        <div>
          <h4 className='mb-4 font-semibold'>ABOUT XONBAY</h4>
          <ul className='space-y-2'>
            <li>About Xonbay</li>
            <li> Size Guide (Men & Women)</li>
            <li>The Xonbay App</li>
            <li>Xonbay Boost (Promote Your Shop)</li>
            <li>Student Discounts</li>
            <li>Gift Cards</li>
            <li>Invite Friends, Earn Rewards</li>
            <li>Become a Seller</li>
            <li>Partner with Xonbay</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>

        <div>
          <h4 className='mb-4 font-semibold'>COMMUNITY & PROMOS</h4>
          <ul className='space-y-2'>
            <li>Newsletter Sign-Up</li>
            <li>Join the Xonbay Collective</li>
            <li>Discount & Promo Codes</li>
            <li>Featured Creators & Brands</li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold'>SUBSCRIBE FOR EXCLUSIVES</h4>
          <small className='my-2 block'>
            Sign up and get 15% off your first order + early access to promos!
          </small>
          <div className='mb-2 flex'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full border px-3 py-2 text-sm'
            />
            <button className='bg-black px-4 py-2 text-sm text-white'>
              SUBSCRIBE
            </button>
          </div>
          <p className='text-xs text-gray-600 dark:text-gray-400'>
            New subscribers only. You can unsubscribe anytime.
          </p>
          <p className='mt-2 text-xs text-gray-600 dark:text-gray-400'>
            By signing up, you agree to Xonbay's
            <a href='Xonbay.com' className='underline'>
              Privacy Policy
            </a>
          </p>
          <div className='mt-6 bg-gray-300 p-4 dark:bg-gray-800'>
            <p className='font-semibold'>GET THE XONBAY APP</p>
            <p className='mt-1 text-sm'>
              Shop faster. Sell smarter. Get inspired.
            </p>
            <p className='mt-4 text-sm font-medium'>
              📲 Download on iOS / Android
            </p>
            <p className='mt-4 text-sm font-medium'>📷 Scan QR to download</p>
          </div>
        </div>
      </div>

      <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between border-t px-4 py-4 text-xs text-gray-600 md:flex-row'>
        <p>COPYRIGHT © 2025 XONBAY</p>
        <p className='mt-2 text-yellow-800 md:mt-0'>
          SIGN UP TO PREMIER FOR £9.99!*
        </p>
      </div>

      <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 py-4 text-xs text-gray-600 md:flex-row'>
        <div className='flex space-x-4 text-xl'>
          <FaInstagram />
          <FaFacebookF />
          <FaTiktok />
          <FaYoutube />
          <FaPinterest />
          <span className='text-lg font-bold'>Xonbay</span>
        </div>
        <div>
          <IoIosArrowUp className='text-2xl' />
        </div>
        <div className='flex space-x-4'>
          <a href='#' className='underline'>
            Terms & Conditions
          </a>
          <a href='#' className='underline'>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
