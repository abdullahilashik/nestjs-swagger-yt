import { Provider } from "@nestjs/common";
import { DRIZZLE } from "./db.constants";
import {createClient} from '@libsql/client';
import {drizzle} from 'drizzle-orm/libsql';
import {ConfigService} from '@nestjs/config';
import * as schema from './schema';

export const drizzleProvider = () => ({
    provide: DRIZZLE,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        const url = configService.get<string>('DATABASE_URL') || 'file:local.db';
        const client = createClient({url});
        return drizzle(url, {schema});
    }
})