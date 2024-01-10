import AddressInterface from './AddressInterface';
import ImageInterface from './ImageInterface';
import NameInterface from './NameInterface';

interface UserFromClientInterface {
  email: string;
  password: string;
  phone: string;
  name: NameInterface;
  address: AddressInterface;
  image: ImageInterface;
}

export default UserFromClientInterface;
