import { title } from 'node:process';

const homeDecor = [
  {
    title: '',
    items: [
      'Home & Decor',
      'Kitchen & Dining',
      'Furniture & Cushions',
      'Bedding & Linens',
      'Curtains & Rugs Bathroom'
    ]
  },
  {
    title: '',
    items: [
      'Essentials Lighting & Candles',
      'Storage & Decorative Vessels Games',
      'Decorative',
      'Household linens',
      'Stationery'
    ]
  },
  {
    title: '',
    items: [
      'Kids Decoration',
      'Art & Culture',
      'Paintings & Visual Art',
      'Sculptures & Statues',
      'Traditional Masks & Ceremonial Objects'
    ]
  },
  {
    title: '',
    items: [
      'Literature & Written Works',
      'Musical Instruments',
      'Mosaic Works',
      'Art Photography',
      'Ceramics & Artisan Pottery'
    ]
  }
];
const menCategory = [
  {
    title: '',
    items: [
      'Men’s Traditional Attire',
      'T-Shirts, Tops & Tank Tops',
      'Co-Ord Sets',
      'Jackets & Coats',
      'Suits',
      'Dress Shirts',
      'Tunics',
      'Polo Shirts'
    ]
  },
  {
    title: '',
    items: [
      'Knitwear & Vests',
      'Shorts',
      'Trousers & Pants',
      'Swimwear',
      'Boxers & Underwear',
      'Jumpsuits & Overalls'
    ]
  }
];
const kidCategory = [
  {
    title: '',
    items: [
      'Toys & Games',
      "Girls' Clothing",
      'Baby Clothing',
      'Children’s Accessories',
      'Kids Jackets & Outerwear',
      'Children’s Footwear'
    ]
  }
];
const beautyCategory = [
  {
    title: '',
    items: [
      'Hair Care',
      'Fragrances',
      'Skincare',
      'Facial Care',
      'Bath & Body',
      'Essential Oils'
    ]
  },
  {
    title: '',
    items: [
      'Men’s Grooming',
      'Beauty Accessories',
      'Gift & Beauty Sets',
      'Makeup & Cosmetics',
      'Nail Care'
    ]
  }
];
const fabricsCategory = [
  {
    title: '',
    items: [
      'All Fabrics',
      'Ankara & Wax Prints',
      'Silk, Chiffon & Stretch Fabrics',
      'Bazin',
      'Kente',
      'Adire, Indigo & Batik'
    ]
  },
  {
    title: '',
    items: [
      'Bogolan (Mud Cloth)',
      'Other Woven Textiles',
      'Ndop',
      'Dashiki Prints',
      'Addis Ababa Weaves'
    ]
  }
];
const jewelryCategory = [
  {
    title: '',
    items: [
      'All Jewelry',
      'Earrings',
      'Rings',
      'Bracelets',
      'Necklaces',
      'Body Jewelry'
    ]
  },
  {
    title: '',
    items: ['Watches', 'Brooches, Badges & Pins', 'Tie Clips', 'Cufflinks']
  }
];
const womenCategory = [
  {
    title: '',
    items: [
      'All Women',
      'Dresses',
      '2 pieces set',
      'Jackets amd Coats',
      'House clothing',
      'Jumpsuits and Overalls',
      'Skirts'
    ]
  },
  {
    title: '',
    items: [
      'Tops',
      'Tunics',
      'Trousers',
      'Tradition clothing',
      'T-shirts',
      'Swimsuits'
    ]
  },
  {
    title: '',
    items: [
      'Shirts',
      'Waistcoats and Sweeters',
      'Suits',
      'Activewear',
      'Lingerie',
      'Shorts'
    ]
  }
];
const bagsCategory = [
  {
    title: '',
    items: [
      ' Backpacks',
      'Handbags',
      'Belt Bags & Waist Packs',
      'Shoulder Bags',
      'Cosmetic & Toiletry Cases',
      'Tote & Beach Bags'
    ]
  },
  {
    title: '',
    items: [
      'Clutch Bags',
      'Luggage & Travel Bags',
      'Wallets & Small Leather Goods',
      'Purses',
      'Sports & Duffel Bags',
      'Diaper & Baby Bags'
    ]
  }
];
const accessoryCategory = [
  {
    title: '',
    items: [
      'Bags & Bag Accessories',
      'Sunglasses & Eyewear',
      'Hair Accessories',
      'Craft Supplies & Miscellaneous',
      'Mobile Phones & Cases',
      'Customization Services'
    ]
  },
  {
    title: '',
    items: [
      'Laptop Cases & Holders',
      'Makeup & Beauty Products',
      'Gloves, Mittens, Sleeves & Gaiters',
      'Hand Fans',
      'Children’s Toys',
      'Scarves & Shawls'
    ]
  },
  {
    title: '',
    items: [
      'Headwraps & Headbands',
      'Umbrellas',
      'Belts',
      'Stationery',
      'Automotive Accessories',
      'Face Masks',
      'Bow Ties'
    ]
  },
  {
    title: '',
    items: [
      'Keychains',
      'Compact Mirrors',
      'Neckties',
      'Handkerchiefs',
      'Detachable Collars',
      'Suspenders'
    ]
  }
];
const collections = [
  {
    title: '',
    items: [
      'New Drops',
      'Prom edit',
      'Festivals ',
      'Spring Drops ',
      'Summer',
      'Cowrie',
      'Accessories '
    ]
  },
  {
    title: '',
    items: [
      'Sunshine',
      'Accessories ',
      'Beach Mode: On',
      'Hot Steps',
      'Wedding Style ',
      'Maasaï sandals'
    ]
  }
];

export const categories = [
  {
    name: 'COLLECTIONS',
    subcategories: collections.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'HOME & ARTS',
    subcategories: homeDecor.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'BAGS',
    subcategories: bagsCategory.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'WOMEN',
    subcategories: womenCategory.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'JEWELRY',
    subcategories: jewelryCategory.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'FABRICS',
    subcategories: fabricsCategory.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'ALL BEAUTY & HAIR',
    subcategories: beautyCategory.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'ACCESSORIES',
    subcategories: accessoryCategory.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'KIDS',
    subcategories: kidCategory.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  },
  {
    name: 'MEN',
    subcategories: menCategory.map((subcategory) => ({
      name: subcategory.title,
      link: `/category/${subcategory?.title}`,
      items: subcategory.items
    }))
  }
];
