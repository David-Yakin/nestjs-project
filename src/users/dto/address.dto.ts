import { MinLength } from 'class-validator';

class AddressDTO {
  state?: string;

  @MinLength(2)
  country: string;

  @MinLength(2)
  city: string;

  @MinLength(2)
  street: string;

  houseNumber: number;

  zip?: number;
}

export default AddressDTO;
