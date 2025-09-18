import { useState, useEffect } from 'react';

const TopHeader = () => {
  const messages = [
    'Free Shipping on Orders Over $50!',
    '20% Off Your First Order - Use Code WELCOME20',
    'Shop the Latest Trends Now!'
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Change message every 4 seconds (slower interval)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [messages.length]);

  return (
    <div className='overflow-hidden bg-gray-800 py-2 text-[12px] text-white'>
      <div className='container relative mx-auto h-4 text-center'>
        <div
          className='flex transition-transform duration-1000' // Increased duration to 1 second
          style={{
            transform: `translateX(-${currentMessageIndex * 100}%)`
          }}
        >
          {messages.map((message, index) => (
            <div key={index} className='min-w-full flex-shrink-0 text-center'>
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
