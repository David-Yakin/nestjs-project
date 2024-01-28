import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from '../modules/mongodb/User';

const UsersCollection = MongooseModule.forFeature([
  { name: 'User', schema: UserSchema },
]);

export default UsersCollection;
