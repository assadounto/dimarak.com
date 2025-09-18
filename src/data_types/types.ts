// src/context/AuthContext/types.ts
import { UserType } from '@/data_types/user_type';
import { ProductType } from './product_type';

export interface BrandType {
  id: string;
  name: string;
}

export interface MaterialType {
  id: string;
  name: string;
}

export interface CategoryType {
  id: string;
  name: string;
  hasChildren: boolean;
  children: {
    id: string;
    name: string;
  }[];
}

export interface AppCacheType {
  brands: BrandType[];
  categories: CategoryType[];
  materials: MaterialType[];
  sizes: MaterialType[];
  userProducts: ProductType[];
  categoriesTotal: number;
  brandsTotal: number;
  materialsTotal: number;
  userProductsTotal: number;
  lastFetched: number | null;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  user: UserType | null;
  login: (token: string, refreshToken: string, userData: UserType) => void;
  logout: () => void;
  signup: (token: string) => void;
  setUser: (user: UserType | null) => void;
  loading: boolean;
  handleLogout: () => Promise<void>;

  // Enhanced data fetching methods with pagination
  getBrands: (
    search?: string,
    page?: number,
    pageSize?: number,
    forceRefresh?: boolean
  ) => Promise<{ brands: BrandType[]; total: number }>;

  getMaterials: (
    search?: string,
    page?: number,
    pageSize?: number,
    forceRefresh?: boolean
  ) => Promise<{ materials: MaterialType[]; total: number }>;

  getCategories: (
    parentId?: number,
    forceRefresh?: boolean
  ) => Promise<{ categories: CategoryType[]; total: number }>;
  getSizes: (
    path: string,
    forceRefresh?: boolean
  ) => Promise<{ sizes: MaterialType[] }>;
  // Total count getters
  getBrandsTotal: () => number;
  getMaterialsTotal: () => number;

  //user products
  getUserProducts: (
    username: string,
    search?: string,
    page?: number,
    pageSize?: number,
    forceRefresh?: boolean
  ) => Promise<{ products: ProductType[]; total: number }>;
  refreshUserProducts: (
    username: string
  ) => Promise<{ products: ProductType[]; total: number }>;
  updateProductInCache: (updatedProduct: ProductType) => void;
  removeProductFromCache: (productId: string) => void;

  // Cache state
  cache: AppCacheType;
  loadingCache: boolean;
}

export const CACHE_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes cache expiry
