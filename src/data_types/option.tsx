export type Option = {
  value: string;
  label: string;
  isCategory?: boolean;
  children?: Option[];
  category?: string;
};
