export interface FiltersInput {
  name?: string;
  brand?: number;
  category?: number;
  parentCategory?: string;
  size?: number;
  customBrand?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
  style?: string;
  condition?: string;
  discountPrice?: boolean;
  hashtags?: string[];
  colors?: string[];
}
