export default interface ProductProps {
  id?: number;
  product: string;
  price: number;
  quantity: number;
  image: string;
  onClick?: () => void;
}
