import { MongooseModule } from '@nestjs/mongoose';

const MongodbModule = MongooseModule.forRoot(
  'mongodb://127.0.0.1:27017/nestjs-project',
);

export default MongodbModule;
