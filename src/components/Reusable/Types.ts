export default interface DataProps {
  data: {
    id: number;
    imageUrl: string;
    description: string;
    price: number;
    originalPrice?: number;
    deal?: number;
    location: string;
    rating: number;
    total: number;
  };
}

export interface ProductCardProps extends DataProps {
  className?: string;
  index?: number;
}

export type RatingProps = {
  value: number;
};

export type ShopBannerProps = {
  name: string;
  url: string;
};

export type ButtonProps = {
  name: string;
  url?: string;
  className: string;
  iconClass?: string;
};
export interface FeedbackDataType {
  id: number;
  userImage: string;
  userImageAlt: string;
  customerName: string;
  feedback: string;
  rating: string;
  duration: string;
}
