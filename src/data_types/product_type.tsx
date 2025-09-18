import { UserType } from './user_type';

export type ProductType = {
  id: string;
  profileImage?: string;
  username?: string;
  color?: string[];
  imagesUrl: { url: string; thumbnail: string }[];
  brand?: { name: string; id: string };
  label?: { name: string; id: string };
  name: string;
  condition?: string;
  price: number;
  discountPrice?: number | undefined;
  discountPercentage?: number | undefined;
  likes?: number;
  seller?: UserType;
  customBrand?: string;
  views?: number;
  size?: { name: string; id: string };
  quantity?: number;
};
