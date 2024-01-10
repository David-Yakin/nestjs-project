import {
  Matches,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
// import NameDTO from './name.dto';
import AddressDTO from './address.dto';
import ImageDTO from './image.dto';
import NameDTO from './name.dto';

export class RegisterUserDto {
  @Matches(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/, {
    message: 'phone must be a valid phone number',
  })
  phone: string;

  @IsNotEmpty()
  name: NameDTO;

  @IsNotEmpty()
  address: AddressDTO;

  @IsNotEmpty()
  image: ImageDTO;

  @Matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, {
    message: 'email must be a valid email',
  })
  email: string;

  @Matches(
    /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/,
    {
      message:
        'Password must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
    },
  )
  password: string;
}

function ApiProperty(): (target: RegisterUserDto, propertyKey: 'name') => void {
  throw new Error('Function not implemented.');
}
