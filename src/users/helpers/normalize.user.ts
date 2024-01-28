import { RegisterUserDto } from '../dto/register-user.dto';

const normalizeUser = (user: RegisterUserDto) => {
  return {
    ...user,
    image: {
      url:
        user.image.url ||
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png',
      alt: user.image.alt || 'default user',
    },
  };
};

export default normalizeUser;
