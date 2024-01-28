import { TypeOrmModule } from '@nestjs/typeorm';

const PostgresModule = TypeOrmModule.forRoot({
  type: 'postgres',
  synchronize: true,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  password: process.env.POSTGRES_PASSWORD || null,
  username: process.env.POSTGRES_USER || 'postgres',
  database: process.env.POSTGRES_DB || 'nest-project',
  autoLoadEntities: true,
  logging: true,
});

export default PostgresModule;
