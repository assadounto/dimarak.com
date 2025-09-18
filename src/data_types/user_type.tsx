export type UserType = {
  isVendor: boolean;
  id: string;
  username: string;
  email: string;
  profilePictureUrl: string;
  thumbnailUrl: string;
  gender: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  isVerified: boolean;
  blockedBy: String;
  isMultbuyEnabled: boolean;
  firstName: string;
  lastName: string;
  isFollowing: boolean;
  noOfFollowing: number;
  noOfFollowers: number;
  listings: number;
  reviewStats: {
    noOfReviews: number;
    rating: number;
  };
  bio: string;
  location: {
    locationName: string;
  };
  shippingAddress: ShippingAddress | null;
};
export interface ShippingAddress {
  city: string;
  address: string;
  country: string;
  postcode: string;
}
