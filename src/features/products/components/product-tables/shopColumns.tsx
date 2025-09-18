'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Shop } from '@/constants/data';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ActionCell = ({ row }: { row: Shop }) => {
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreVertical className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => {
            router.push(
              `/dashboard/shops/${row?.name?.toLowerCase().replace(/\s+/g, '-')}`
            );
          }}
        >
          View Shop
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.push(
              `/dashboard/shops/editshop/${row?.name?.toLowerCase().replace(/\s+/g, '-')}`
            );
          }}
        >
          Edit Shop
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const shopColumns = [
  {
    name: 'IMAGE',
    selector: (row: Shop) => row.image,
    cell: (row: Shop) => (
      <div className='relative aspect-square h-10 w-10'>
        <Image
          src={row.image}
          alt={row.name}
          fill
          className='rounded-lg object-cover'
        />
      </div>
    ),
    sortable: false,
    width: '100px'
  },
  {
    name: 'NAME',
    selector: (row: Shop) => row.name,
    sortable: true,
    width: '256px'
  },

  {
    name: 'LOCATION',
    selector: (row: Shop) => row.location,
    sortable: true
  },
  {
    name: 'SALES',
    selector: (row: Shop) => row.followers, // Using followers as sales count
    sortable: true
  },
  {
    name: 'ORDERS',
    selector: (row: Shop) => row.followers, // Using followers as sales count
    sortable: true
  },
  {
    name: 'PRODUCTS',
    selector: (row: Shop) => row.followers, // Using followers as sales count
    sortable: true
  },

  {
    name: 'TODAY',
    selector: (row: Shop) => row.followers, // Using followers as sales count
    sortable: true
  },
  //   {
  //     name: 'DESCRIPTION',
  //     selector: (row: Shop) => row.description,
  //     // Optional: Add wrap: true if you want text wrapping
  //     cell: (row: Shop) => (
  //       <div className='line-clamp-2'>{row.description}</div> // Shows 2 lines with ellipsis
  //     ),
  //     sortable: false // Long text columns usually aren't sortable
  //   },
  {
    name: '',
    cell: (row: Shop) => <ActionCell row={row} />,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    width: '56px' // Fixed width for actions column
  }
];
