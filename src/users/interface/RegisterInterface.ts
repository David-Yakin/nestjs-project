import AddressInterface from './AddressInterface';
import ImageInterface from './ImageInterface';
import NameInterface from './NameInterface';

interface RegisterInterface {
  _id?: string;
  email: string;
  password: string;
  phone: string;
  name: NameInterface;
  address: AddressInterface;
  image: ImageInterface;
  isAdmin: boolean;
  createdAt: Date;
}

export default RegisterInterface;
