import { MinLength, IsNotEmpty } from 'class-validator';

class NameDTO {
  @IsNotEmpty()
  @MinLength(2)
  first: string;

  @IsNotEmpty()
  @MinLength(2)
  middle?: string;

  @IsNotEmpty()
  @MinLength(2)
  last: string;
}

export default NameDTO;
