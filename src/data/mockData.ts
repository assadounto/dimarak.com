// mockData.ts

export const sampleShops = [
  {
    id: '17',
    name: 'Sarkodie',
    type: 'user',
    isVerified: true,
    isPinned: true,
    shop_type: 'promo',
    followersCount: 1200,
    imageUrl:
      'https://www.okayafrica.com/media-library/image.jpg?id=23551536&width=1245&height=700&quality=80&coordinates=0%2C62%2C0%2C63'
  },
  {
    id: '5',
    type: 'shop',
    name: 'D Cutz',
    isVerified: true,
    isPinned: true,
    shop_type: 'promo',
    followersCount: 1200,
    imageUrl:
      'https://marketplace.canva.com/EAF6DOq8wwA/1/0/1600w/canva-black-and-white-modern-illustrative-barbershop-logo-MnTa2CvxlTE.jpg'
  },

  {
    id: '6',
    type: 'company',
    name: 'BeautyLuxe',
    isVerified: true,
    isPinned: false,
    shop_type: 'seller',
    followersCount: 1200,
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/004/970/677/non_2x/shopping-logo-design-online-shop-logo-wordmark-free-free-vector.jpg'
  },
  {
    id: '7',
    type: 'shop',
    name: 'Swoop',
    shop_type: 'promo',
    isVerified: true,
    isPinned: true,
    followersCount: 1200,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdKIWK9hIgZiYNC0x5Nvbz_NQ7-SWJj4_CQ&s'
  },
  {
    id: '8',
    name: 'Amazon',
    isVerified: true,
    isPinned: true,
    shop_type: 'seller',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUu3aJhQF4yYtr-1Wyyz9b06gtNd9gnaM6g&s',
    followersCount: 1200
  },
  {
    id: '1',
    name: 'CocaCola',
    isVerified: true,
    isPinned: false,
    imageUrl:
      'https://www.hubspot.com/hs-fs/hubfs/develop-brand-identity_8.webp?width=350&height=350&name=develop-brand-identity_8.webp', // Replace with real image URLs
    followersCount: 560
  },
  {
    id: '2',
    isVerified: true,
    isPinned: false,
    name: 'Melcom',
    followersCount: 800,
    imageUrl:
      'https://emmarnitechs.com/wp-content/uploads/2021/03/melcom-ghana-1.jpg'
  },
  {
    id: '3',
    name: 'Itel',
    isVerified: true,
    isPinned: false,
    followersCount: 800,
    imageUrl:
      'https://static.wikia.nocookie.net/logopedia/images/e/ef/Itel.svg/revision/latest/scale-to-width-down/300?cb=20231201160725'
  },
  {
    id: '4',
    followersCount: 800,
    isVerified: true,
    isPinned: true,
    name: 'Shoprite',
    imageUrl:
      'https://bunny-wp-pullzone-apheosa1qg.b-cdn.net/wp-content/uploads/2024/06/Shoprite.png'
  }
];

export const mockWhatsNewData = [
  {
    id: 1,
    user: {
      name: 'Kent Mart',
      photo_url:
        'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2024-09/michael-keaton-today-sk-240904-9860e0.jpg'
    },
    statuses: [
      {
        status_type: 'video',
        content: 'https://d2p7sryr291vf0.cloudfront.net/videos/30/master.m3u8',
        background_color: '#000',
        text_color: '#fff'
      },
      {
        status_type: 'text',
        content: 'Kent is our hallmark. For all your weddings',
        background_color: '#9747FF',
        text_color: '#fff',
        isButton: true,
        buttonText: 'Shop Now'
      },
      {
        status_type: 'video',
        content:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        background_color: '#000',
        text_color: '#000000'
      }
    ]
  },
  {
    id: 2,
    user: {
      name: 'Cic phones',
      photo_url:
        'https://www.billboard.com/wp-content/uploads/2024/09/michael-jackson-brunei-1996-billboard-1548.jpg?w=942&h=623&crop=1'
    },
    statuses: [
      {
        status_type: 'image',
        content:
          'https://petapixel.com/assets/uploads/2022/10/iphone-14-pro-review-4-800x534.jpg',
        background_color: '#000',
        text_color: '#000',
        isButton: true,
        buttonText: 'Shop Now',
        comment: 'Iphone 15 promax available'
      },
      {
        status_type: 'video',
        content:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4 ',
        text_color: '#fff'
      },
      {
        status_type: 'video',
        content:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        background_color: '#000',
        text_color: '#000'
      }
    ]
  },
  {
    id: 3,
    user: {
      name: 'Jk Crafts',
      content:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHjWxWcPzzrpCQ3idYDPaXgWFmXkeFAQt_coEvfCckaLV0715ZWGyNK6HHHbkC1ACMto&usqp=CAU'
    },
    statuses: [
      {
        status_type: 'text',
        content: 'Handmade bracelets for every occasion!',
        background_color: '#9747FF',
        text_color: '#fff'
      },
      {
        status_type: 'video',
        content:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        background_color: '#000',
        text_color: '#000000'
      },
      {
        status_type: 'video',
        content:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        background_color: '#000',
        text_color: '#000000'
      }
    ]
  },
  {
    id: 10,
    user: {
      name: 'Rich',
      content:
        'https://img.a.transfermarkt.technology/portrait/big/520392-1697053132.png?lm=1'
    },
    statuses: [
      {
        status_type: 'image',
        content:
          'https://i.pcmag.com/imagery/reviews/03EgzklfQWC8mPJUHa9g0jq-10.fit_lim.size_919x518.v1715962278.jpg',
        background_color: '#000',
        text_color: '#000000'
      },
      {
        status_type: 'text',
        content: 'Rich is good',
        background_color: '#9747FF',
        text_color: '#fff'
      },
      {
        status_type: 'text',
        content:
          'Coding all day, making dreams come true! Yes very true indeed',
        background_color: '#9747FF',
        text_color: '#fff'
      }
      // { status_type: 'video', url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', background_color: '#f9f9f9', text_color: '#000' },
    ]
  }
  // More data for other users...
];

export const categoriesMockData = [
  // {
  //   id: 1,
  //   name: 'Electronics',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/electronics.png')
  // },
  // {
  //   id: 2,
  //   name: 'Fashion',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/fashion.png')
  // },
  // {
  //   id: 3,
  //   name: 'Health',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/health.png')
  // },

  // {
  //   id: 4,
  //   name: 'Phones',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/phones.png')
  // },
  // {
  //   id: 5,
  //   name: 'Vehicles',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/vehicle.png')
  // },
  // {
  //   id: 6,
  //   name: 'Animals',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/animals.png')
  // },
  // {
  //   id: 7,
  //   name: 'Babies',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/babies.png')
  // },
  // {
  //   id: 8,
  //   name: 'Tools',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/tools.png')
  // },
  // {
  //   id: 9,
  //   name: 'Musicals',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/musicals.png')
  // },
  // {
  //   id: 10,
  //   name: 'Hobbies',
  //   subcategories: [
  //     'Dresses',
  //     'Pants',
  //     'Skirts',
  //     'Shorts',
  //     'Jackets',
  //     'Hoodies',
  //     'Shirts',
  //     'Polo',
  //     'T-Shirts',
  //     'Tunics'
  //   ],
  //   image_url: require('@/assets/images/categories/hobbies.png')
  // }
];

export const productsMockData = [
  {
    id: 1,
    imageUrl: 'https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg',
    price: '$50.00',
    priceOff: '$70.00',
    name: 'Stylish Leather Jacket',
    location: 'Accra, Ghana',
    rating: 4
  },
  {
    id: 2,
    imageUrl: 'https://i.ebayimg.com/images/g/HA8AAOSw~kRkS3tz/s-l400.png',
    price: '$45.00',
    priceOff: '$60.00',
    name: 'Trendy Sunglasses',
    location: 'Kumasi, Ghana',
    rating: 5
  },
  {
    id: 3,
    imageUrl: 'https://m.media-amazon.com/images/I/616pFtEoQxL._AC_UY900_.jpg',
    price: '$120.00',
    priceOff: '$150.00',
    name: 'Premium Sports Watch',
    location: 'Accra, Ghana',
    rating: 4
  },
  {
    id: 4,
    imageUrl:
      'https://cdn.saksfifthavenue.com/is/image/saks/020122_SEO_HB_X_TYPES_OF_BAGS_CLOSET_EDIT_SLOT2?scl=1&qlt=85',
    price: '$35.00',
    priceOff: '$50.00',
    name: 'Stylish Handbag',
    location: 'Takoradi, Ghana',
    rating: 3
  },
  {
    id: 5,
    imageUrl:
      'https://solo-ny.com/cdn/shop/files/UBN795-10_HO_c4f17d2f-425f-4fa9-98c1-dc3f06b1933a.jpg?v=1695141176&width=1080',
    price: '$200.00',
    priceOff: '$250.00',
    name: 'Designer Backpack',
    location: 'Cape Coast, Ghana',
    rating: 5
  },
  {
    id: 6,
    imageUrl:
      'https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/solo-buds/plp/plp-solobuds-matteblack.jpg.large.2x.jpg',
    price: '$90.00',
    priceOff: '$120.00',
    name: 'Wireless Bluetooth Earbuds',
    location: 'Accra, Ghana',
    rating: 4
  },
  {
    id: 7,
    imageUrl:
      'https://tbfbags.com/cdn/shop/articles/retailers-sustainable-tote-bags_d6919cee-2fcd-482b-9bff-c1739cead2df_1024x.jpg?v=1718141628',
    price: '$70.00',
    priceOff: '$90.00',
    name: 'Eco-friendly Backpack',
    location: 'Tamale, Ghana',
    rating: 3
  },
  {
    id: 8,
    imageUrl:
      'https://www.dealsdirect.co.nz/wp-content/uploads/2021/03/IMG-4025.jpg',
    price: '$150.00',
    priceOff: '$200.00',
    name: 'Portable Bluetooth Speaker',
    location: 'Accra, Ghana',
    rating: 4
  },
  {
    id: 9,
    imageUrl:
      'https://www.freestylesa.co.za/cdn/shop/products/andre-executive-vegetable-tanned-hand-dyed-premium-leather-briefcase-satchel-182616.jpg?v=1628678199&width=1200',
    price: '$250.00',
    priceOff: '$300.00',
    name: 'Luxury Leather Briefcase',
    location: 'Accra, Ghana',
    rating: 5
  },
  {
    id: 10,
    imageUrl: 'https://m.media-amazon.com/images/I/61hFZO72+3L._AC_SY900_.jpg',
    price: '$2500.00',
    priceOff: '$300.00',
    name: 'Luzermann Diamond',
    location: 'Accra, Ghana',
    rating: 5
  }
];
export const communities = [
  {
    id: 1,
    imageUrl: 'https://ubizme.com/media/2024/11/Kasoa-1024x576.jpg',
    name: 'Kasoa Market'
  },
  {
    id: 2,
    imageUrl:
      'https://visitghana.com/wp-content/uploads/2019/04/4133_Westhills-556.jpg',
    name: 'West Hills Mall'
  }
];
