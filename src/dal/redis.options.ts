import { CacheModule, CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';
import { config } from 'dotenv';
config();

const REDIS_PORT = process.env.REDIS_PORT || 6379;

export const RedisOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const store = await redisStore({
      ttl: 3600,
      socket: {
        host: configService.get<string>('127.0.0.1'),
        port: configService.get<number>(`${REDIS_PORT}`)!,
      },
    });
    return {
      store: () => store,
    };
  },
  inject: [ConfigService],
};

const RedisModule = CacheModule.registerAsync(RedisOptions);
export default RedisModule;
